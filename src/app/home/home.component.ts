import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public search: string = "";
  public videos: any = []
  public idVideo:string=""
  public description:string="";
  public title:string="";
  public mostPopular:boolean=true
  
  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
    this.youtube.mostPopularVideos().subscribe(result => {
      this.videos= result.items
      console.log(this.videos) 
      
    }); 
    
  }

  searchVideo() {
    this.youtube.searchVideo(this.search).subscribe(result => {
      this.videos= result.items
      console.log(this.videos) 
      this.mostPopular=false

    });
  }

  playVideo(idVideo,title,description){
    if(this.mostPopular==true){
      this.idVideo = idVideo
    }else{
      this.idVideo = idVideo.videoId
    }    
    this.title=title
    this.description=description

  }

 

}

import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public search: string = "";
  public titleList="Videos Recomendados"
  public titlePlay="Mira el video"
  public videos: any = []
  public idVideo:string=""
  public description:string="";
  public title:string="";
  public mostPopular:boolean=true
  
  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
    this.mostPopularVideos()    
  }

/**
 *This method allows you to send a string and search through 
 the Youtube API for videos related to that string 
 */
  searchVideo() {
    this.youtube.searchVideo(this.search).subscribe(result => {
      this.videos= result.items
      console.log(this.videos) 
      this.mostPopular=false
      this.titleList= "Encontramos los siguientes videos"

    });
  }
/**
 * This method allows you to assign the information
 * of the selected video, to show your information and bring the video
 * @param idVideo 
 * @param title 
 * @param description 
 */
  playVideo(idVideo,title,description){
    if(this.mostPopular==true){
      this.idVideo = idVideo

    }else{
      this.idVideo = idVideo.videoId
     
    }    
    this.title=title
    this.description=description

  }

/**
 * this method allows you to consult which are the most popular videos,
 * to show them at the beginning, as well as to bring the information
 * of one of them and reproduce it automatically.
 */
  mostPopularVideos(){
    this.youtube.mostPopularVideos().subscribe(result => {
      this.videos= result.items
      this.idVideo=this.videos[0].id
      this.title=this.videos[0].snippet.title
      this.description=this.videos[0].snippet.description
      
    }); 
  }

 

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

 public url = 'https://www.googleapis.com/youtube/v3/search' //main url to search videos
 public urlPopular = 'https://www.googleapis.com/youtube/v3/videos' 
 public keyApi = 'AIzaSyBN53rWdsy7SOzeci0fllYTDTN6f0n8ZGI'//credentials for the Youtube API

  constructor(private http: HttpClient) { }
/**
 * Obtain through a uri the desired video, the parameter "part" is obligatory, 
 * the parameter "masResults" allows to bring the number of videos that we want, 
 * the parameter "q" is where the search string is assigned and finally it is used the key
 * @param video 
 */
  searchVideo(video:string):Observable<any>{
    let uri = `${this.url}?part=snippet&maxResults=6&q=${video}&key=${this.keyApi}` 
    return this.http.get<any>(uri);
  }
/**
 * It allows to bring the most popular videos by region, in this case of "us", 
 * which is defined with the parameter "regionCode"
 */
  mostPopularVideos():Observable<any>{
    let uri = `${this.urlPopular}?part=snippet&chart=mostPopular&maxResults=6&regionCode=us&key=${this.keyApi}` 
    return this.http.get<any>(uri);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

 public url = 'https://www.googleapis.com/youtube/v3/search'
 public urlPopular = 'https://www.googleapis.com/youtube/v3/videos'
 public keyApi = 'AIzaSyBN53rWdsy7SOzeci0fllYTDTN6f0n8ZGI'

  constructor(private http: HttpClient) { }

  searchVideo(video:string):Observable<any>{
    let uri = `${this.url}?part=snippet&maxResults=6&q=${video}&key=${this.keyApi}` 
    return this.http.get<any>(uri);
  }

  mostPopularVideos():Observable<any>{
    let uri = `${this.urlPopular}?part=snippet&chart=mostPopular&maxResults=6&regionCode=us&key=${this.keyApi}` 
    return this.http.get<any>(uri);
  }
}

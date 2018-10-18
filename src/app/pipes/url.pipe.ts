import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){

  }
  /**
   * This helps preventing Cross Site Scripting 
   * Security bugs (XSS) by sanitizing values to be safe to use
   * @param idVideo 
   * @param url 
   */
  transform(idVideo: any, url?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+idVideo+"?autoplay=1")
  }

}

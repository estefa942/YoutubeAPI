import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){

  }
  //Por la seguridad de Angular no permite mostrar todas las URL
  transform(idVideo: any, url?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+idVideo)
  }

}

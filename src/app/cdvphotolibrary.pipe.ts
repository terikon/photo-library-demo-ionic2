import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'cdvphotolibrary'})
export class CDVPhotoLibraryPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string) {
    return url.startsWith('cdvphotolibrary://') ? this.sanitizer.bypassSecurityTrustUrl(url) : url;
  }
}

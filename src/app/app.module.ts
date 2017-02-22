import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PermissionsPage } from '../pages/permissions/permissions';
import { ItemDetailsPage } from '../pages/item-details/item-details';

import { CDVPhotoLibraryPipe } from './cdvphotolibrary.pipe.ts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PermissionsPage,
    ItemDetailsPage,
    CDVPhotoLibraryPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PermissionsPage,
    ItemDetailsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

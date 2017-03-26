import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PermissionsPage } from '../pages/permissions/permissions';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CDVPhotoLibraryPipe } from './cdvphotolibrary.pipe.ts';
import { PhotoLibrary } from '@ionic-native/photo-library';

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
  providers: [
    PhotoLibrary,
    StatusBar, SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

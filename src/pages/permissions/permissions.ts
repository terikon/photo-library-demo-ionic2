import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { PhotoLibrary } from '@ionic-native/photo-library';

@Component({
  selector: 'page-permissions',
  templateUrl: 'permissions.html'
})
export class PermissionsPage {

  constructor(public navCtrl: NavController,
    private photoLibrary: PhotoLibrary, private platform: Platform, private toastCtrl: ToastController) {
  }

  tryRequestAuthorization() {

    this.platform.ready().then(() => {
      this.photoLibrary.requestAuthorization({read: true})
        .then(() => {
          this.navCtrl.pop();
        })
        .catch((err) => {
          let toast = this.toastCtrl.create({
            message: `requestAuthorization error: ${err}`,
            duration: 6000,
          });
          toast.present();
        });
    });

  }

}

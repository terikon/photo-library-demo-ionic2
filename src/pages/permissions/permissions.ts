import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-permissions',
  templateUrl: 'permissions.html'
})
export class PermissionsPage {

  constructor(public navCtrl: NavController, private platform: Platform, private toastCtrl: ToastController) {
  }

  tryRequestAuthorization() {

    this.platform.ready().then(() => {
      cordova.plugins.photoLibrary.requestAuthorization(
        () => {
          this.navCtrl.pop();
        },
        (err) => {
          let toast = this.toastCtrl.create({
            message: `requestAuthorization error: ${err}`,
            duration: 6000,
          });
          toast.present();
        },
        {read: true});
    });

  }

}

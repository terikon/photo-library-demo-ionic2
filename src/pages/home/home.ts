import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController, ModalController } from 'ionic-angular';

import { PermissionsPage } from '../permissions/permissions';
import { ItemDetailsPage } from '../item-details/item-details';

import { PhotoLibrary, LibraryItem } from 'ionic-native';

const THUMBNAIL_WIDTH = 512;
const THUMBNAIL_HEIGHT = 384;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  thumbnailWidth = THUMBNAIL_WIDTH + 'px';
  thumbnailHeight = THUMBNAIL_HEIGHT + 'px';

  library: LibraryItem[];

  constructor(public navCtrl: NavController, private platform: Platform, private cd: ChangeDetectorRef, private toastCtrl: ToastController, private modalCtrl: ModalController) {

    this.fetchPhotos();

  }

  fetchPhotos() {

    this.platform.ready().then(() => {

      this.library = [];

      PhotoLibrary.getLibrary({thumbnailWidth: THUMBNAIL_WIDTH, thumbnailHeight: THUMBNAIL_HEIGHT, chunkTimeSec: 0.1}).subscribe({
        next: (chunk) => {
          this.library = this.library.concat(chunk);
          this.cd.detectChanges();
        },
        error: (err: string) => {
          if (err.startsWith('Permission')) {

            let permissionsModal = this.modalCtrl.create(PermissionsPage);
            permissionsModal.onDidDismiss(() => {
              // retry
              this.fetchPhotos();
            });
            permissionsModal.present();

          } else { // Real error
            let toast = this.toastCtrl.create({
              message: `getLibrary error: ${err}`,
              duration: 6000,
            });
            toast.present();
          }
        },
        complete: () => {
          // Library completely loaded
        }
      });

    });

  }

  itemTapped(event, libraryItem) {
    this.navCtrl.push(ItemDetailsPage, {
      libraryItem: libraryItem
    });
  }

  trackById(index: number, libraryItem: LibraryItem): string { return libraryItem.id; }

}

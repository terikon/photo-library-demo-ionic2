import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { LibraryItem } from 'ionic-native';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  selectedLibraryItem: LibraryItem;

  constructor(public navCtrl: NavController, private navParams: NavParams) {

    this.selectedLibraryItem = navParams.get('libraryItem');

  }

}

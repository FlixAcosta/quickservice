import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantesPage } from '../index.pages'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

rest: any = RestaurantesPage;

  constructor(public navCtrl: NavController) {

  }

  iraRestaurante(){
    this.navCtrl.push(RestaurantesPage);

  }

}

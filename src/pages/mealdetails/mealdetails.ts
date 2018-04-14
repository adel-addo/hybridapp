import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MealdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mealdetails',
  templateUrl: 'mealdetails.html',
})
export class MealdetailsPage {
  mealId = null;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mealId = this.navParams.get('mealId');
  }
 
  goBack() {
    this.navCtrl.pop();
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealdetailsPage');
  }

}

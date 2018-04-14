import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
})
export class MealsPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealsPage');
  }

   constructor(public navCtrl: NavController, public navParams: NavParams)
   {
   }
 
  openDetails() {
    this.navCtrl.push('MealdetailsPage');
    this.navCtrl.push('MealdetailsPage', {mealId: 2});
  }
 
  goToChat() {
    this.navCtrl.parent.select(2);
  }
}

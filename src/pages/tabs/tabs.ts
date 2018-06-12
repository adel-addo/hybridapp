import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  //tab8='TrackPage';
tab3 = 'HomechatPage';
  tab4 = 'MedsPage';
  tab2 = 'ListPage';
   tab5 = 'WalkPage';
     // tab6 = 'PdfPage';
   tab1 = 'FoodPage';
    //tab9='MailsPage';
      tab7='ChartPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

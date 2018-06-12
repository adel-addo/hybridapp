//import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the MedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meds',
  templateUrl: 'meds.html',
})
export class MedsPage {
  data = { title:'', description:'', date:'', time:'' };
  
  

  constructor(public navCtrl: NavController,
  public platform: Platform,
  public localNotifications: LocalNotifications,
  public alertCtrl: AlertController) {
 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedsPage');
  }

  scheduled()
  {
        let notification = {
 id: 1,
 title: this.data.title,
 text: this.data.description,
 sound:this.setSound(),
 //trigger: { every: { hour: 10, minute: 0 } }
 trigger: { at:   new Date(this.data.date+" "+this.data.time) },
};

this.localNotifications.schedule(notification);

var date = new Date(this.data.date+" "+this.data.time);
 let alert = this.alertCtrl.create({
    title: 'Congratulation!',
    subTitle: 'Notification setup successfully at '+date,
    buttons: ['OK']
  });
  alert.present();
  this.data = { title:'', description:'', date:'', time:'' };
 }


 ubmit()
  {
        let notifications = {
 id: 2,
 title: this.data.title,
 text: this.data.description,
 //trigger: { every: { hour: 10, minute: 0 } }
 trigger: {at:   new Date(this.data.date+" "+this.data.time) },
 every:"minute",
};

this.localNotifications.schedule(notifications);

 }
 



setSound() {
  if (this.platform.is('android')) {
    return 'file://assets/sounds/Rooster.mp3'
  } else {
    return 'file://assets/sounds/Rooster.caf'
  }
}

}

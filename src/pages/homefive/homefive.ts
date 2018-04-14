import { Component } from '@angular/core';
import { IonicPage, AlertController,NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { DatePicker } from '@ionic-native/date-picker';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the HomefivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homefive',
  templateUrl: 'homefive.html',
})
export class HomefivePage {
  private profile : FormGroup;
  public published : any;
    readingsList:  Observable<any[]>;
  contactList:  Observable<any[]>;
        constructor(public navCtrl: NavController, af: AngularFireDatabase,private datePicker: DatePicker,  private _ALERT   : AlertController,
        public navParams: NavParams,private formBuilder: FormBuilder) {
         this.profile = this.formBuilder.group({
      period: ['', Validators.required],
     "published"    : ['', Validators.required],
        sugar: ['1', Validators.required]
  } );
           this.readingsList = af.list('/readings').valueChanges();
         this.contactList = af.list('/contacts').valueChanges();
}
  


  addContact(name: string,  address: string,  license: string,  city: string) : void{
   const contactRef: firebase.database.Reference = firebase.database().ref(`/contacts/`);
    contactRef.push({
      name: name,
      address: address,
      license: license,
      city: city
    }).then( newContact => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

     selectDateForScheduling() : void
   {  
      this.datePicker.show(
      {
         titleText            : 'Select a date/time for this notification ',
         todayText            : 'Select date',
         nowText              : 'Select time',
         date 			      : new Date(),
         mode 			      : 'datetime',
         androidTheme 	      : this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
         allowOldDates        : false,
         allowFutureDates     : true
      })
      .then((date : any) =>
      {
         this.published 	 = date;
      })
      .catch((err) =>
      {
         this.displayAlert('Error', err);
      });
   }


   open(sugar: string,  period: string) : void{
   const readingsRef: firebase.database.Reference = firebase.database().ref(`/readings/`);
    readingsRef.push({
      sugar: this.profile.value["sugar"],
      period: this.profile.value["period"]
    }).then( newReadings => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }
     displayAlert(title 		: string,
   				message 	: string) : void
   {
      let alert : any 		=	this._ALERT.create({
         title 		: title,
         subTitle  	: message,
         buttons    : ['Got it']
      });
      alert.present();
   }
   


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomefivePage');
  }

}



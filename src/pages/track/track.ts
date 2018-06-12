import { Component } from '@angular/core';
import { AlertController, NavController, Platform } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
//import { Camera, CameraOptions } from '@ionic-native/camera';
//import { Contacts, Contact, ContactAddress, ContactField, ContactName } from '@ionic-native/contacts';
import { Diagnostic } from '@ionic-native/diagnostic';


import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
//import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';
/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {

  
   //public distance:any;
 // public isCameraEnabled 		: boolean 	= false;
  // public isWifiEnabled 		: boolean 	= false;
   //public isContactsEnabled 	: boolean 	= false;
   public isLocationEnabled 	: boolean 	= false;
   public latitude     			: any;
   public longitude    			: any;
      public newlatitude     			: any;
   public newlongitude    			: any;
   public distance:any;
   public date:any;
   //public isImageTaken      	: any		= '';
   //public responseData:any;


   constructor(public navCtrl       : NavController,
               private _ALERT       : AlertController,
   			 //  private _CONTACTS    : Contacts,
               private _DIAGNOSTIC  : Diagnostic,
               private _GEO         : Geolocation,
               public zone: NgZone,
           //    private _CAMERA      : Camera,
             //  private transfer: Transfer,
               //private camera: Camera,
                public locationtracker: LocationTrackerProvider,
               //private _IAP         : InAppBrowser,
               private _PLATFORM    : Platform)
   {   this.distance= 0;
          this.date=new Date();
      this._PLATFORM.ready()
      .then(() =>
      {
        // this.isCameraAvailable();
         this.isLocationAvailable();
        // this.isWifiAvailable();
         //this.isContactsAuthorized();
      });
   }

  start(){
    this.locationtracker.startTracking();
  }
 
  stop(){
    this.locationtracker.stopTracking();
    this.dist();
    this.date=new Date();
  }
   dist(){
    this.distance=this.calculateDistance(this.latitude,this.longitude,this.locationtracker.lat, this.locationtracker.lng);
    }


  calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = (lat2 - lat1)* Math.PI / 180;
  var dLon = (lon2 - lon1)* Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1* Math.PI / 180) * Math.cos(lat2* Math.PI / 180) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = R * c;
  return d;
}
  





   isLocationAvailable()
   {
      this._DIAGNOSTIC.isLocationAvailable()
      .then((isAvailable) =>
      {

         this._GEO.getCurrentPosition()
         .then((data : any) =>
         {
			 this.isLocationEnabled 	= true;
			 this.latitude 		        = data.coords.latitude;
			 this.longitude		        = data.coords.longitude;

         })
         .catch((error : any) =>
         {
		    console.log('Error getting location', error);
		 });



      })
      .catch((error : any) =>
      {
         console.dir('Location is:' + error);
      });
   }





}



 





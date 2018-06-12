import { Component } from '@angular/core';
import { AlertController, NavController, Platform } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Contacts, Contact, ContactAddress, ContactField, ContactName } from '@ionic-native/contacts';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

/**
 * Generated class for the ImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

  
   public isCameraEnabled 		: boolean 	= false;
   public isWifiEnabled 		: boolean 	= false;
   public isContactsEnabled 	: boolean 	= false;
   public isLocationEnabled 	: boolean 	= false;
   public latitude     			: any;
   public longitude    			: any;
   public isImageTaken      	: any		= '';
   public responseData:any;


   constructor(public navCtrl       : NavController,
               private _ALERT       : AlertController,
   			   private _CONTACTS    : Contacts,
               private _DIAGNOSTIC  : Diagnostic,
               private _GEO         : Geolocation,
               private _CAMERA      : Camera,
               private transfer: Transfer,
               private camera: Camera,
                public network: NetworkEngineProvider,
               private _IAP         : InAppBrowser,
               private _PLATFORM    : Platform)
   {
      this._PLATFORM.ready()
      .then(() =>
      {
         this.isCameraAvailable();
         this.isLocationAvailable();
         this.isWifiAvailable();
         this.isContactsAuthorized();
      });
   }

   upload()
    {
      
       let options = {

           quality: 100
            };


      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:

     const fileTransfer: TransferObject = this.transfer.create();

      let options1: FileUploadOptions = {
         fileKey: 'file',
         fileName: 'name.jpg',
         headers: {},
        
         chunkedMode: false
         //mimeType: "image/jpeg",
    
      
      }

  fileTransfer.upload(imageData, 'http://127.0.0.1:5000/classify')
   .then((data) => {
     // success
     console.log(data+" Uploaded Successfully");
     alert("success");
   }, (err) => {
     // error
     alert("error"+JSON.stringify(err));
   });


    });

 
}


   isCameraAvailable()
   {
      this._DIAGNOSTIC.isCameraPresent()
      .then((isAvailable : any) =>
      {
         this.isCameraEnabled = true;
      })
      .catch((error :any) =>
      {
         console.dir('Camera is:' + error);
      });
   }




   isContactsAuthorized()
   {
      this._DIAGNOSTIC.isContactsAuthorized()
      .then((isAuthorised : any) =>
      {
         this.isContactsEnabled = true;
      })
      .catch((error : any) =>
      {
         console.dir('Contacts is:' + error);
      });
   }




   isWifiAvailable()
   {
      this._DIAGNOSTIC.isWifiAvailable()
      .then((isAvailable : any) =>
      {
         this.isWifiEnabled = true;
      })
      .catch((error : any) =>
      {
         console.dir('Wifi is:' + error);
      });
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




   openLink(link)
   {
      let target : string = '_blank',
          opts   : string = 'clearcache=yes,clearsessioncache=yes,toolbar=yes,location=yes';

      this._IAP.create(link, target, opts);
   }


    sendData() {
   // this.imgData.imageB64 = imageData;
    //console.log(this.imgData);

//my service for send data to server, use your service provider in here 
    this. network.postData(this.isImageTaken).then(
      result => {
        this.responseData = result;
      },
      err => {
        // Error log
        alert("error"+JSON.stringify(err));
      }
    );
  }

   selectPictureFromPhotoLibrary()
   {
      let options : CameraOptions = {
         quality 			: 100,
         destinationType 	: this._CAMERA.DestinationType.DATA_URL,
         encodingType 		: this._CAMERA.EncodingType.JPEG,
         saveToPhotoAlbum   : true,
         sourceType 		: 0
      }

      this._CAMERA.getPicture(options)
      .then((data : any) =>
      {
         this.isImageTaken = 'data:image/jpeg;base64,' + data;
      })
      .catch((err : any) =>
      {
         console.dir(err);
      });

      
   }




   saveContact(obj)
   {
      let contact: Contact 		= this._CONTACTS.create();


      contact.name 				= new ContactName(null, obj.surname, obj.firstname);
      contact.nickname   		= obj.nickname;
      contact.addresses 		= [new ContactAddress(true, null, null, obj.address, null, null, null, null)];
      contact.phoneNumbers 		= [new ContactField('mobile', obj.mobile)];
      contact.emails    		= [new ContactField('email', obj.email)];
      contact.photos    		= [new ContactField('profile', this.isImageTaken)];


      contact.save()
      .then((data : any) =>
      {
         let alert =   this._ALERT.create({
               title: 'Congratulations',
               subTitle : `The contact - ${obj.firstname} ${obj.surname} - was successfully added to your Address book`,
               buttons: ['Cool!']
            });
         alert.present();
      })
      .catch((error: any) =>
      {
         console.error('Error saving contact.', error);
      });
   }


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Http } from '@angular/http';

import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

 captureDataUrl: string;
options:any;
 key:any;
 response:any;
   data:any;
   http:any;
   new:any;
   
 public keyList:Array<any>;
  public loadedKeyList:Array<any>;
  public keyRef:firebase.database.Reference;

  public urlList:Array<any>;
  public loadedUrlList:Array<any>;
  public urlRef:firebase.database.Reference;


addUrl(): void {
    this.urlRef.on('value', eventSnapshot => {
    this.urlRef.update({
      url:this.data.username
    });
  });
  this.submit();
 }


addKey () {
  var brandRef = firebase.database () .ref ().child ('/image');
    brandRef.update({
      var1: this.key 
    });
}

constructor(public navCtrl: NavController,private camera: Camera,http: Http) { 
   // this.takePicture();
   this.http = http;
   this.new="";
   this.urlRef = firebase.database().ref('/predictions');
           this.data = {};
        this.data.username = '';
        this.data.response = '';

  this.urlRef.on('value',urlList => {
  let urls = [];
  urlList.forEach( url => {
    urls.push(url.val());
    return false;
  });

  this.urlList = urls;
  this.loadedUrlList = urls;
});

  }



  accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.captureDataUrl = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
    this.submit();
  }


  upload() {
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);
    this.key=`images/${filename}.jpg`;
    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
     // Do something here when the data is succesfully uploaded!
    });
    this.addKey();
    this.submit();
    //this.captureDataUrl=""
    this.new=this.response=""
  }



   submit() {
        var link = ' https://guarded-chamber-31132.herokuapp.com/classify';
        var data = JSON.stringify({username: this.data.username});
        
        this.http.post(link, data)
        .subscribe(data => {
            this.response=""+JSON.stringify(data);
            //this.data.response = data._body;
        }, error => {
            console.log("Oooops!");
        });
  }


    public takePicture(){
      this.options = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true,
        correctOrientation: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(this.options)
        .then((imageData)=>{
             this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        }).then((path) => {

        })
        this.submit();
    }


    



}

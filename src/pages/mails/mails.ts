import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the MailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mails',
  templateUrl: 'mails.html',
})
export class MailsPage {

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailsPage');
  }

  
  currentImage = null;
  
  constructor(private camera: Camera, private emailComposer: EmailComposer) { }
 
  captureImage() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
    }
 
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = imageData;
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
 
  sendEmail() {
    let email = {
      to: 'saimon@devdactic.com',
      cc: 'max@mustermann.de',
      attachments: [
        this.currentImage
      ],
      subject: 'My Cool Image',
      body: 'Hey Simon, what do you thing about this image?',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }

}

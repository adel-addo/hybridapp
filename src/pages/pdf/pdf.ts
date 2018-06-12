import { Component } from '@angular/core';
import {  Platform } from 'ionic-angular';
 
import { IonicPage, AlertController,NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { DatePicker } from '@ionic-native/date-picker';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { EmailComposer } from '@ionic-native/email-composer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
//import firebase from 'firebase';

/**
 * Generated class for the PdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
})
export class PdfPage {
 mylist = [];
 list=[];
letterObj = {
    to: '',
    from: '',
    text: ''
  }
 
  pdfObj = null;
  readingsList:  Observable<any[]>;
  public countryList:Array<any>;
  public loadedCountryList:Array<any>;
  public countryRef:firebase.database.Reference;
  i:number;
  currentImage:any;
  constructor(public navCtrl: NavController, af: AngularFireDatabase,private emailComposer: EmailComposer,
  private plt: Platform, private file: File,
  private fileOpener: FileOpener)
  {
     this.readingsList = af.list('/readings').valueChanges();
   //this.contactList = af.list('/meds').valueChanges();

    

    this.countryRef = firebase.database().ref('/readings');

  this.countryRef.on('value', countryList => {
  let countries = [];
  countryList.forEach( country => {
    countries.push(country.val());
    return false;
  });

  this.countryList = JSON.parse(JSON.stringify(countries));
  this.loadedCountryList = countries;
});

  }

  addMarkersToMap() {
  this. i=0;
  for(let marker of this.loadedCountryList)
   {    this.mylist[this.i]=marker.period;
        this.list[this.i]=marker.sugar;
       // this.mylist.push({period: marker.period, data:marker.sugar})
       this.i+=1;
   }
  }

   sendEmail() {
     this.sendPdf();
    // this.pdfObj.getBase64((data) => {
    //this.currentImage=data;
//});

    let email = {
      to: 'saimon@devdactic.com',
      cc: 'max@mustermann.de',
      attachments: [
       this.currentImage,
      ],
      subject: 'My Cool Image',
      body: 'Hey Simon, what do you thing about this image?',
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }


  createPdf() {
   
   this.addMarkersToMap();
    var docDefinition = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },
 
        { text: 'From', style: 'subheader' },
        { text: this.letterObj.from },
 
        { text: 'To', style: 'subheader' },
        this.letterObj.to,
 
        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },

         { text: 'Readings', style: 'subheader'},
           
         {
			style: 'tableExample',
			table: {
				body: [
					['Period', 'Readings'],
					[this.mylist[0], this.list[0],
          

          ]
				]
			}
		}
      ],

      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 20, 0, 5]
            },
            itemsTable: {
                margin: [0, 5, 0, 15]
            },
            itemsTableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            },
       
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

 sendPdf()
 { this.pdfObj.getDataUrl(function(dataUrl){
        this.currentImage = dataUrl;
         this.pdfObj.open();
//upload code goes here
});

 
 }


   download() {

      // On a browser simply use download!
      this.pdfObj.download();
    
  }




 
  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
         // this.currentImage=URL.createObjectURL(blob);
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
         // this.currentImage=this.file.dataDirectory + 'myletter.pdf';
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        }  )
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

}

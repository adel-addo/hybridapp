import { Component } from '@angular/core';
import {  Platform } from 'ionic-angular';
 
import { IonicPage, AlertController,NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { DatePicker } from '@ionic-native/date-picker';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
//import * as HighCharts from 'highcharts';
import { SchartsPage } from '../scharts/scharts';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { EmailComposer } from '@ionic-native/email-composer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
//import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
 private profile : FormGroup;
    cat: string = "women";
    mylist = [];
 list=[];
letterObj = {
    to: '',
    from: '',
    text: ''
  }
 
 //currentImage:any;
 high:number;
 low:number;
 normal:number;
 min:number;
 max:number;
 average:number;
 
  pdfObj = null;
  readingsList:  Observable<any[]>;
  public countryList:Array<any>;
  public loadedCountryList:Array<any>;
  public countryRef:firebase.database.Reference;
  i:number;
  currentImage:any;
  constructor(public navCtrl: NavController, af: AngularFireDatabase,private emailComposer: EmailComposer,
  
        public navParams: NavParams,private formBuilder: FormBuilder,
  private plt: Platform, private file: File,
  private fileOpener: FileOpener)
  {
     this.readingsList = af.list('/readings').valueChanges();
   //this.contactList = af.list('/meds').valueChanges();

       this.profile = this.formBuilder.group({
      period: ['', Validators.required],
     "published"    : ['', Validators.required],
        sugar: ['1', Validators.required]
  } );

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

   open(sugar: string,  period: string) : void{
   const readingsRef: firebase.database.Reference = firebase.database().ref(`/readings/`);
    readingsRef.push({
      sugar: this.profile.value["sugar"],
      period: this.profile.value["period"]
    }).then( newReadings => {
      //this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }
  go(){
    this.addMarkers();
    this.navCtrl.push( SchartsPage, {
      high: this.high,
      normal:this.normal,
      low:this.low
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
    let email = {
      to: 'saimon@devdactic.com',
      cc: 'max@mustermann.de',
      attachments: [
       
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
        { text: 'Blood Sugar Readings', style: 'header' },
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
					['Blood Sugar', 'Period'],
					[this.mylist[0], this.list[0]],
          [this.mylist[2], this.list[2]],
              		[this.mylist[3], this.list[3]],
                  		[this.mylist[4], this.list[4]],
                      		[this.mylist[5], this.list[5]],
          [this.mylist[1], this.list[1]]
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
        /// this.pdfObj.open();
//upload code goes here
});

 
 }


   download() {

      // On a browser simply use download!
      this.pdfObj.download();
    
  }












  addMarkers() {
  this. i=0;
  this.low=0;
  this.high=0;
  this.normal=0;
  for(let marker of this.loadedCountryList)
   {    
        this.mylist[this.i]=marker.period;
        this.list[this.i]=marker.sugar;
       // this.mylist.push({period: marker.period, data:marker.sugar})
       this.i+=1;

       if (marker.sugar<50)
          { this.low+=1;
          }
      else if (marker.sugar<150)
          { this.normal+=1;
          }
      else if (marker.sugar>150)
          { this.high+=1;
          }




   }
  }



  



 
 

}

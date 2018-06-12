import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { GraphPage } from '../pages/graph/graph';
//import { ItemDetailsPage } from '../pages/itemdetails/itemdetails';
//import { ListPage} from '../pages/list/list';
import { NetworkEngineProvider } from '../providers/network-engine/network-engine';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
 

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFireModule, } from 'angularfire2';
//import { AngularFire } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../pages/tabs/tabs';

import { DatePicker } from '@ionic-native/date-picker';
//import { HomefourPage } from '../pages/homefour/homefour';
import { HomefivePage } from '../pages/homefive/homefive';
import { HttpClientModule } from '@angular/common/http';
//import { LocationTracker } from '../providers/location-tracker';

import { Contacts } from '@ionic-native/contacts';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { ImagesProvider } from '../providers/images/images';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';

import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule} from '@angular/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { EmailProvider } from '../providers/email/email';
import { ImageProvider } from '../providers/image/image';
import { SchartsPage } from '../pages/scharts/scharts';
import { FchartsPage } from '../pages/fcharts/fcharts';
//import { ContactService } from '../services/contactservice';

export const firebaseConfig = {


   apiKey: "AIzaSyA3f2V1uWrPrRoPrG-cf_VVsb3IFbNs3Kg",
    authDomain: "dassistant-3c86e.firebaseapp.com",
    databaseURL: "https://dassistant-3c86e.firebaseio.com",
    projectId: "dassistant-3c86e",
    storageBucket: "dassistant-3c86e.appspot.com",
    messagingSenderId: "805011239794"
};


@NgModule({
  declarations: [
    MyApp,
    GraphPage,
     HomefivePage,
     FchartsPage,
           SchartsPage

  //    HomefourPage
    //,HomePage
    //ItemDetailsPage, ListPage
  ],
  imports: [
    BrowserModule,
      HttpClientModule ,
    IonicModule.forRoot(MyApp),
     HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
      IonicStorageModule.forRoot(),

    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
     AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GraphPage,
     HomefivePage,
           FchartsPage,

           SchartsPage

     // HomefourPage
 //,HomePage
 //, ItemDetailsPage, ListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,

    Transfer,
    NetworkEngineProvider,
      AngularFireAuth,

      Camera,
    Contacts,
    Diagnostic,
    Geolocation,
    LocalNotifications,

    InAppBrowser,
    BackgroundGeolocation,
        DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagesProvider,
    File,
    FileOpener,
     //ContactService,
    EmailComposer,
    CallNumber,
    LocationTrackerProvider,
    EmailProvider,
    ImageProvider

  ]
})
export class AppModule {}

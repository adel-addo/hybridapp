import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { GraphPage } from '../pages/graph/graph';
//import { ItemDetailsPage } from '../pages/itemdetails/itemdetails';
//import { ListPage} from '../pages/list/list';
import { NetworkEngineProvider } from '../providers/network-engine/network-engine';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
  
  //    HomefourPage
    //,HomePage
    //ItemDetailsPage, ListPage
  ],
  imports: [
    BrowserModule,
      HttpClientModule ,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
     AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GraphPage,
     HomefivePage,
  
     // HomefourPage
 //,HomePage
 //, ItemDetailsPage, ListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NetworkEngineProvider,
      AngularFireAuth,
      
        DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

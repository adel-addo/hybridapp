import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'TabsPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   firebase.initializeApp({
    apiKey: "AIzaSyA3f2V1uWrPrRoPrG-cf_VVsb3IFbNs3Kg",
    authDomain: "dassistant-3c86e.firebaseapp.com",
    databaseURL: "https://dassistant-3c86e.firebaseio.com",
    projectId: "dassistant-3c86e",
    storageBucket: "dassistant-3c86e.appspot.com",
    messagingSenderId: "805011239794"
});
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


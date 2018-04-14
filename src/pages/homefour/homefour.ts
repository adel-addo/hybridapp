import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';
import { HomefivePage } from '../homefive/homefive';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the HomefourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homefour',
  templateUrl: 'homefour.html',
})
export class HomefourPage {
  songs: Observable<any[]>;
  contactList:  Observable<any[]>;
  readingsList:  Observable<any[]>;
  public myPerson = {};
   cat: string = "men";
  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) {
 //this.songs = afDatabase.list('/songs').valueChanges();
  //this.songs = afDatabase.list('/person1').valueChanges();
      this.contactList = afDatabase.list('/contacts').valueChanges();
         this.readingsList = afDatabase.list('/readings').valueChanges();
  // this.persons = firebase.database().ref('/person1/').valueChanges();
}



read()
{
   this.navCtrl.push(HomefivePage);
}


updatePerson(firstName: string, lastName: string): void {
  const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
  personRef.update({ 
    firstName, 
    lastName 
  })
}

deletePerson(): void {
  const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
  personRef.remove()
}
createPerson(firstName: string, lastName: string): void {
  const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
  personRef.push({ 
    firstName, 
    lastName 
  })
}

}

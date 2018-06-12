import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

    private profile : FormGroup;
     age: number = 0;

  constructor( public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder )
  {

   
  this.profile = this.formBuilder.group({
      age: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      activity: ['1', Validators.required],
        gender: ['1', Validators.required]
  } );


}

 openDetails() {
   // this.navCtrl.push('ResultsPage');
    this.navCtrl.push('MealPage', {weightId: this.profile.value["weight"]  ,ageId: this.profile.value["age"]
    ,heightId: this.profile.value["height"],
   activityId: this.profile.value["activity"] ,genderId: this.profile.value["gender"]});
    
  
  }
   
  submitForm(event): void {
    // Push view to ResultPage with form values
    
    this.navCtrl.push('ResultsPage', {ageId: this.profile.value["age"]});
  // Prevent default submit action
    event.preventDefault();
    
  
  }

}

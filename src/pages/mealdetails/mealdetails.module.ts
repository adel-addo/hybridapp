import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealdetailsPage } from './mealdetails';

@NgModule({
  declarations: [
    MealdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MealdetailsPage),
  ],
})
export class MealdetailsPageModule
{
}

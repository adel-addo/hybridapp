import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedsPage } from './meds';

@NgModule({
  declarations: [
    MedsPage,
  ],
  imports: [
    IonicPageModule.forChild(MedsPage),
  ],
})
export class MedsPageModule {}

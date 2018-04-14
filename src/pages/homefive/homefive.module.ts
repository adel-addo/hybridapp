import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomefivePage } from './homefive';

@NgModule({
  declarations: [
    HomefivePage,
  ],
  imports: [
    IonicPageModule.forChild(HomefivePage),
  ],
})
export class HomefivePageModule {}

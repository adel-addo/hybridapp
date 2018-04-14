import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomechatPage } from './homechat';

@NgModule({
  declarations: [
    HomechatPage,
  ],
  imports: [
    IonicPageModule.forChild(HomechatPage),
  ],
})
export class HomechatPageModule {}

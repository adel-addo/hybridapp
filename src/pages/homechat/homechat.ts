import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Component } from '@angular/core';
//import { Http, Headers, RequestOptions } from '@angular/http';
//import { NavController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { TabsPage } from '../pages/tabs/tabs';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

/**
 * Generated class for the HomechatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homechat',
  templateUrl: 'homechat.html',
})
export class HomechatPage {

  responseTxt:any;
  parsedData:any;
  displayData:any;
  response:any;
    sendDate=Date();
  constructor(public navCtrl: NavController, public http: HttpClient,public network: NetworkEngineProvider)
   {
      }


  showTable()
   {
      this.network.calls().then
      (data=>
        {
         this.response=""+JSON.stringify(data);
          //console.log("I received: "+JSON.stringify(data));
          //this.responseTxt=JSON.stringify(data);
          this.responseTxt=JSON.stringify(data);
          this.parsedData = JSON.parse(this.responseTxt);

          this.displayData = this.parsedData.answers;
        }
       )
     }


     sendMessage(n)
   {
      this.network.call(n).then
      (data=>
        {
         this.response=""+JSON.stringify(data);
          //console.log("I received: "+JSON.stringify(data));
          //this.responseTxt=JSON.stringify(data);
          this.responseTxt=JSON.stringify(data);
          this.parsedData = JSON.parse(this.responseTxt);

          this.displayData = this.parsedData.answers;
        }
       )
     }

    crawlSite(n)
   {
      this.network.call(n).then
      (data=>
        {
         this.response=""+JSON.stringify(data);
          //console.log("I received: "+JSON.stringify(data));
          //this.responseTxt=JSON.stringify(data);
          this.responseTxt=JSON.stringify(data);
          this.parsedData = JSON.parse(this.responseTxt);

          this.displayData = this.parsedData.username;
        }
       ).catch( error => {
          this.displayData= "error";
    })
     }
  

}

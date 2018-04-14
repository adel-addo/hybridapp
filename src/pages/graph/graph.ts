import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';
import * as HighCharts from 'highcharts';
import { HometwoPage } from '../../pages/hometwo/hometwo';
//import { Chart } from 'angular-highcharts';
//import * as HighchartsMore from 'highcharts-more';
/**
 * Generated class for the GraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {
    responseTxt:any;
    response:any;
  parsedData:any;
  displayData:any;
  send:any;
  dino:any;
 // myname:any;

  myname = [];
  myprice=[];
  mychange=[];
  myvolume=[];
  
  constructor(public network: NetworkEngineProvider,public navCtrl: NavController, public params: NavParams) {
   
   
}

  read()
{
   this.navCtrl.push(HometwoPage);
   
}

 ionViewDidLoad() {

    this.dino = this.params.get("selected");
    console.log(this.dino.Calories);
  }


  showTable()
  {
    this.network.readTable().then(data=>
    {
     this.response=""+JSON.stringify(data);
    //console.log("I received: "+JSON.stringify(data));
    //this.responseTxt=JSON.stringify(data);
     this.responseTxt=JSON.stringify(data);
    this.parsedData = JSON.parse(this.responseTxt);

    this.send= this.parsedData.sort(function(a, b) {
           return b.price - a.price;
      });

    this.displayData = this.send.slice(0,5);

     // for (i = 0; i < 6; i++) {
     
    // }
     
    })

     
    
   }


ionViewDidEnter(){
 console.log('ionViewDidLoad GraphPage');
  //this.showTable();  
 var myChart = HighCharts.chart('container', {
chart: {

},
title: {
text: 'Stock Exchange'
},
xAxis: {
categories: ['Calories',  'Carbs','Protein','Fat']
},
yAxis: {
title: {
text: 'Stock Chart'
}
},
series: [{


type: 'pie',
 size: '60%',
 
   data: [{
            name: 'Carbs',
            y:  this.dino.Carbs
        },  {
            name: 'Protein',
            y:  this.dino.Protein
        }, {
            name: 'Fat',
            y:  this.dino.Fat
        }]
 
 },
 


{

name: "Breakfast",
type: 'bar',
data: [this.dino.Calories, this.dino.Carbs,this.dino.Protein,this.dino.Fat]

}]
});
}

}

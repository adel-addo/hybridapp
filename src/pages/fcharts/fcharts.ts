import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';
import * as HighCharts from 'highcharts';
//import { HometwoPage } from '../../pages/hometwo/hometwo';
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
  selector: 'page-fcharts',
  templateUrl: 'fcharts.html',
})
export class FchartsPage {
    responseTxt:any;
    response:any;
  parsedData:any;
  displayData:any;
  send:any;
  dino:any;
  protein:any;
   fat:any;
  calories:any;
   carbs:any;




 // myname:any;

  myname = [];
  myprice=[];
  mychange=[];
  myvolume=[];
  
  constructor(public network: NetworkEngineProvider,public navCtrl: NavController, public params: NavParams) {
   
   
}

  read()
{
   //this.navCtrl.push(HometwoPage);
   
}

 ionViewDidLoad() {

    this.carbs = this.params.get("carbs");
    
    this.fat = this.params.get("fat");
    this.calories = this.params.get("cal");
    
    this.protein= this.params.get("protein");
    console.log(this.calories);
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
text: 'Nutrition facts'
},
xAxis: {
categories: ['Calories',  'Carbs','Protein','Fat']
},
yAxis: {
title: {
text: 'Meal Chart'
}
},
series: [{


type: 'pie',
 size: '60%',
 
   data: [{
            name: 'Carbs',
            y:  this.carbs
        },  {
            name: 'Protein',
            y:  this.protein
        }, {
            name: 'Fat',
            y:  this.fat
        }]
 
 },
 


{

name: "Meal",
type: 'bar',
//data: [this.calories, this.carbs,this.protein,this.fat]

}]
});
}

}

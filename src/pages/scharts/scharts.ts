import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { IonicPage, NavParams } from 'ionic-angular';

/**
/**
 * Generated class for the SchartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scharts',
  templateUrl: 'scharts.html',
})
export class SchartsPage {
 high:number;
 low:number;
 normal:number;
  constructor(public navCtrl: NavController, public params: NavParams) {
  }

  ionViewDidLoad() {

    this.high = this.params.get("high");
    this.low = this.params.get("low");
    this.normal = this.params.get("normal");
    //console.log(this.dino.Calories);
  }

  ionViewDidEnter() {
  var newChart = HighCharts.chart('contain', {
  colors: ['#2f7ed8','#910000','#8bbc21','#1aadce'],
   plotOptions: {
            column: {
                colorByPoint: true
            }
        },

  chart: {
    type: 'column'
  },
  title: {
    text: 'Sugar readings'
  },
  xAxis: {
    categories: ['Normal', 'High', 'Low']
  },
  yAxis: {
    title: {
      text: 'Number'
    }
  },

series: [{



 




name: "Events",
type: 'column',
data: [     
          this.normal,this.high, this.low

      ]

}]
});











  var myChart = HighCharts.chart('container', {
  colors: ['#2f7ed8','#910000','#8bbc21','#1aadce'],
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Sugar readings'
  },
  xAxis: {
    categories: ['High', 'Normal', 'Low']
  },
  yAxis: {
    title: {
      text: 'Sugar Readings'
    }
  },

series: [{


type: 'pie',
 size: '60%',
 
   data: [
        {
            name: 'Normal',
            y:  this.normal
        },
        {
            name: 'Hyperglycemia Events',
            y:  this.high
        },  {
            name: 'Hypoglycemia Events',
            y:  this.low
        }



        ]
 
 }]
});
}















}

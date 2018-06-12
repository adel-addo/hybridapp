import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@Component({
  selector: 'homeone-page',
  templateUrl: 'homeone.html'
})
export class HomeonePage {
      // cat: string = "women";
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    map: any;
     slong;
     slat;
     elong:any;
     elat:any;
    constructor(public navCtrl: NavController,private geolocation: Geolocation) {
          this.geolocation.getCurrentPosition().then((resp) => {
         
              this.startNavigating(resp.coords.latitude,resp.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
         });

      
    }

    


    ionViewDidEnter(){
        

      
        this.loadMap();
         
     
 
    }
 
    loadMap(){
 
        let latLng = new google.maps.LatLng(5.6500,-0.1833);
 
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
 
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }
 
    startNavigating(sl,so){
 
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
 
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
      
        directionsService.route({
           // origin: 'Legon Accra',
            origin: {lat: sl, lng:so},
            //destination: {lat: this.elat, lng:this.elong},
            destination: 'Accra Mall',
            travelMode: google.maps.TravelMode['WALKING']
        }, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        });
 
    }
 
}

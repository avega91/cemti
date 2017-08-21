// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { googlemaps } from 'googlemaps';

@Component({
  selector: 'page-solicitud',
  templateUrl: 'solicitud.html'
})
// export class SolicitudPage implements OnInit {
  export class SolicitudPage{

  // autocompleteItems: any;
  // autocomplete: any;
  // acService: any;
  // placesService: any;

  constructor(public navCtrl: NavController) {
    // this.autocompleteItems = [];
    // this.autocomplete = {
    //   query: ''
    // };
  }

  buscarLugar(){
    
  }

  // ngOnInit() {
  //   console.log("init");
  //   this.acService = new google.maps.places.AutocompleteService();
  //   this.autocompleteItems = [];
  //   this.autocomplete = {
  //     query: ''
  //   };
  // }

  // updateSearch() {
  //   console.log('modal > updateSearch');
  //   if (this.autocomplete.query == '') {
  //     this.autocompleteItems = [];
  //     return;
  //   }
  //   let self = this;
  //   let config = {
  //     //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
  //     input: this.autocomplete.query,
  //     componentRestrictions: {}
  //   }
  //   this.acService.getPlacePredictions(config, function (predictions, status) {
  //     console.log('modal > getPlacePredictions > status > ', status);
  //     self.autocompleteItems = [];
  //     predictions.forEach(function (prediction) {
  //       self.autocompleteItems.push(prediction);
  //     });
  //   });
  // }
}
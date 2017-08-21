import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UbicacionPage } from '../ubicacion/ubicacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  solicitarProducto() {
    this.navCtrl.push(UbicacionPage);
  }
}

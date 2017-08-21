import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-ubicacion',
    templateUrl: 'ubicacion.html'
})

export class UbicacionPage {

    constructor(public navCtrl: NavController) {

    }

    buscarLugar() {

    }

    ionViewWillEnter() {
        this.navCtrl.swipeBackEnabled = false;
    }

    ionViewWillLeave() {
        this.navCtrl.swipeBackEnabled = true;
    }
}

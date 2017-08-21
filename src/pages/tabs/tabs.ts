import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SolicitudPage } from '../solicitud/solicitud';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SolicitudPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}

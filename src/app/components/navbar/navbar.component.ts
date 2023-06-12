import { Component } from '@angular/core';
import { routeList } from 'src/data/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  routes: any[];
  constructor() {
    this.routes = routeList.slice(1);
  }
}

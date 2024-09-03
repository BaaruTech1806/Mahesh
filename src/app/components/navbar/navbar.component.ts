import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-navbar', 
  standalone: true,
  imports: [MatToolbarModule,MatListModule,RouterModule, MatButtonModule,CommonModule, MatIconModule, MatSidenavModule, SideNavComponent,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    constructor(public route:Router){}

    showFiller = false;

    navItems=[
      {
        path:'',
        menuItem:'Home'
      },
      {
        path:'theory',
        menuItem:'Theory'
      },
      
    ]
}

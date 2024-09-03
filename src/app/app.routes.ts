import { Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path:"theory",component:ExpansionPanelComponent
    },
    {
        path:"",component:LandingPageComponent
    }
];

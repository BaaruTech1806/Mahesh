import { Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';

export const routes: Routes = [
    {
        path:"sidenav",component:ExpansionPanelComponent
    }
];

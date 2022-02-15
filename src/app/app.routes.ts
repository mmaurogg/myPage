
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { OtrosComponent } from './components/otros/otros.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProyectsComponent },
    { path: 'project/:id', component: ProyectComponent },
    { path: 'otros', component: OtrosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'  }
];

export const APP_ROUTING = RouterModule.forRoot (APP_ROUTES);



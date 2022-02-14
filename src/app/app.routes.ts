
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ProyectComponent } from './components/proyect/proyect.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'proyects', component: ProyectsComponent },
    { path: 'proyect/:id', component: ProyectComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'  }
];

export const APP_ROUTING = RouterModule.forRoot (APP_ROUTES);



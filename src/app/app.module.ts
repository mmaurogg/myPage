import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Rutas
import { APP_ROUTING } from './app.routes';

// servicios
import { ProyectsService } from 'src/app/services/proyects.service';

// componentnes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ProyectComponent } from './components/proyect/proyect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProyectsComponent,
    ProyectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    ProyectsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

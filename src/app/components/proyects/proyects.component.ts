import { Component, OnInit } from '@angular/core';
import { ProyectsService, Proyect } from 'src/app/services/proyects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html'
})
export class ProyectsComponent implements OnInit {
  
  proyects:Proyect[]=[]

  constructor( private proyectService: ProyectsService,
              private router: Router
    ) {

    this.proyects = this.proyectService.getProyects();

  }

  ngOnInit(): void {

  }


  verProyecto( idx: number ){
    this.router.navigate( ['/proyect',idx] );
  }


}
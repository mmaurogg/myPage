import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html'
})
export class ProyectComponent implements OnInit {

  proyect:any = {};


  constructor( private activateRoute: ActivatedRoute,
              private proyectService: ProyectsService
    ) {

    this.activateRoute.params.subscribe( params => {
      this.proyect = proyectService.getProyect( params['id'] );
    })

   }

  ngOnInit(): void {
  }

}

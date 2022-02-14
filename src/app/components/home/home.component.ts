import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  datos:any = 
    {
      nombre: "Manuel Mauricio Gómez Gallo",
      titulos: [
        {
          universidad: "../../../assets/img/udea-logo.png",
          titulo:"Magíster en Administración"
        },
        {
          universidad: "../../../assets/img/upb-logo.png",
          titulo:"Ingeniero Industrial"
        },
        {
          universidad: "../../../assets/img/misiontic-logo.png",
          titulo:"Desarrollador Web"
        },
        {
          universidad: "../../../assets/img/eafit-logo.png",
          titulo:" (Cursando) Introducción Ciencia de Datos"
        }
      ],
    };

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

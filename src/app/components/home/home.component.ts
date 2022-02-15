import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  mostrar:boolean = false;

  datos:any = 
    {
      nombre: "Manuel Mauricio Gómez Gallo",
      foto: "../../../assets/img/foto-mao.jpg",
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
      gustos:[
        {
          img: "../../../assets/img/familia.png",
          descripcion: "Familia"
        },
        {
          img: "../../../assets/img/deportes.png",
          descripcion: "Deportes"
        },
        {
          img: "../../../assets/img/mascotas.png",
          descripcion: "Pet lover"
        }
      ],
      profesionales:[
        {
          img: "../../../assets/img/desarrollo-web.png",
          descripcion: "Desarrollo Web"
        },
        {
          img: "../../../assets/img/analisis-data.png",
          descripcion: "Data analysis"
        },
        {
          img: "../../../assets/img/automatizar.png",
          descripcion: "Automatización"
        }
      ],
      aptitudes:[
        {
          img: "../../../assets/img/unidos.png",
          descripcion: "Sociable"
        },
        {
          img: "../../../assets/img/objetivo.png",
          descripcion: "Enfocado al objetivo"
        },
        {
          img: "../../../assets/img/planta.png",
          descripcion: "Adaptación al cambio"
        }
      ],
      conocimientos:[
        {
          img: "../../../assets/img/js.png",
          descripcion: "JavaScript - nodeJS"
        },
        {
          img: "../../../assets/img/angular.png",
          descripcion: "Angular"
        },
        {
          img: "../../../assets/img/sql.png",
          descripcion: "SQL"
        },
        {
          img: "../../../assets/img/python.png",
          descripcion: "Python - numpy y pandas"
        }
      ],
      experiencias:[
        {
          img: "../../../assets/img/coordinador.png",
          descripcion: "Coordinador de cartera (actual)"
        },
        {
          img: "../../../assets/img/elearning.png",
          descripcion: "Diseñador Instruccional - e-Learning"
        },
        {
          img: "../../../assets/img/relaciones.png",
          descripcion: "Clientes y proveedores"
        }
      ],
      cierre:{
        descripcion: "Mi interes en la programación inicia con la creacion de una base de datos para el almacenamiento de las gestiones de un equipo de cartera, las cuales se usarían despues para generar informes",
        img1: "../../../assets/img/sql.png",
        img2: "../../../assets/img/sql.png",
      }

    };

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

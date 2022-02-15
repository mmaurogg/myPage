import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {


  private proyects:Proyect[]= [
    {
      titulo: "Base de Datos Grupo Jurídico",
      lenguaje: "SQL",
      resumen: "Base de datos en SQL para recolección de datos y gestiones de deudores",
      imgLenguaje: "assets/img/sql.png",
      img: "assets/img/database.png",
      video: "assets/video/db.mp4"
    },
    {
      titulo: "Bot WhatsApp",
      git: "https://github.com/mmaurogg/bot-whatsapp",
      lenguaje: "nodeJs",
      imgLenguaje: "assets/img/js.png",
      resumen: "Proyecto para envio de mensages personalizados a mmuchas personas en una base de datos",
      img: "assets/img/botwhatsapp.png",
      video: "assets/video/bot-whatsapp.mp4"
    },
    {
      titulo: "Lista de Tareas",
      git: "https://github.com/mmaurogg/to_do_list",
      lenguaje: "Angular",
      imgLenguaje: "assets/img/angular.png",
      resumen: "Proyecto para tener control de las tareas y subtareas pendientes y terminadas",
      img: "assets/img/listatareas.jpg",
      video: "assets/video/tareas.mp4"
    },
    {
      titulo: "Análisis de datos Cotton",
      git: "https://github.com/mmaurogg/data_analisis_cotton_puls",
      lenguaje: "Python - numpy y pandas",
      imgLenguaje: "assets/img/python.png",
      resumen: "Caso de estudio de análisis de datos para segmentacion y probabilidad de compra ",
      img: "assets/img/dataanalisis.jpg",
      video: "assets/video/analisis-data.mp4"
    },
    {
      titulo: "Tienda Shop Store",
      git: "https://github.com/mmaurogg/portafolio",
      lenguaje: "Angular",
      imgLenguaje: "assets/img/angular.png",
      resumen: "Proyecto de una tienda virtual - contiene formularios, pagina principal y buscador",
      img: "assets/img/shopstore.png",
      video: "assets/video/ShopStore.mp4"
    }
  ];

  constructor() { 
    console.log("servicio funcionando")
  }

  getProyects(){
    return this.proyects;
  }

  getProyect( idx: number){
    return this.proyects[idx];
  }

}

export interface Proyect{
  titulo: string;
  git?: string,
  lenguaje: string,
  resumen: string;
  imgLenguaje: string;
  img: string;
  video: string;
}
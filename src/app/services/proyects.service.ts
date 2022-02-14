import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {


  private proyects:Proyect[]= [
    {
      titulo: "Proyecto 1",
      lenguaje: "pandas y numpay",
      resumen: "Proyecto de prueba para algo",
      imgLenguaje: "assets/img/js.png",
      img: "assets/img/proyecto1.jpg",
      video: "assets/video/proyecto1.mp4"
    },
    {
      titulo: "Proyecto 2",
      lenguaje: "nodeJs",
      imgLenguaje: "assets/img/python.png",
      resumen: "Proyecto de prueba para algo",
      img: "assets/img/proyecto1.jpg",
      video: "assets/video/proyecto1.mp4"
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
  lenguaje: string,
  resumen: string;
  imgLenguaje: string;
  img: string;
  video: string;
}
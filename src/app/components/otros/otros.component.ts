import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
})
export class OtrosComponent implements OnInit {

  otros:any = 
    {
      quiero: `Quero hacer parte de la transformación digital y tecnológica que vivimos hoy, 
        es por esta razón que busco formar parte de una organización de base tecnológica que 
        fomente el crecimiento de sus colaboradores.`,
      ofrezco: `Todo mi conocimiento y experiencia en otros campos laborales para encontrar soluciones a travez de diferentes enfoques, 
        además, esforzarme todos los dias por aprender algo nuevo y ser mejor persona,`,
      nivel:[
        {jr:"Conocimientos básicos de lenguajes de programación específicos y conceptos claves"},
        {msn:"Alta productividad en el desarrollo de las soluciones, conocimiento en profundidad en el lenguaje de programación"},
        {sn:"Gran conocimiento en el lenguaje de programación, capaz de ofrecer valor agregado a la compañía"}
      ]
    }
    
  constructor() { }

  ngOnInit(): void {
  }

}

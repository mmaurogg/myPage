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
      ofrezco: `Esforzarme todos los dias por arender algo nuevo y ser mejor persona, 
        también pongo todo mi conocimiento en otros campos laborales para encontrar soluciones a travez de diferentes enfoques.`,
    }
    
  constructor() { }

  ngOnInit(): void {
  }

}

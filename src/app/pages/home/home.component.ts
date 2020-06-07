import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dataTwo = [];
  public dataThree = [];
  public dataFour = [];
  public dataFive = [];

  constructor() {
  }

  ngOnInit(): void {
    this.dataTwo = [
      {
        title: '¿Quieres emprender un negocio?',
        content: '¿Estas cansado de trabajar para enriquecer a tu jefe? Estás en el lugar adecuado. Queremos facilitarte todas las herramientas para que puedas llevarlo a cabo.'
      },
      {
        title: 'Cuéntanos tu idea',
        content: '¿Solo tienes la idea pero no tienes claro por dónde empezar? Estaremos encantados de escucharte a través de una de nuestras asesorías online. Analizaremos la viabilidad de la misma, y te guiaremos para que puedas ponerla en marcha cuanto antes!'
      }
    ];


    this.dataThree = [
      {
        title: '¿Tienes una tienda online?',
        content: 'En nuestro formacion“ aprende a Importar de China” te enseñaremos todo lo necesario para que seas capaz de importar tus productos directamente, sin intermediarios. Esto se va a traducir en un ahorro de costes, es decir, un aumento de tu margen de beneficios.'
      },
      {
        title: '¿Aun no la tienes?',
        content: 'Ningún problema! En vez de enseñarte a como crear un ecommerce ( y para no hacerte aprender a programar), te lo vamos a crear y configurar, y te lo entregamos ya funcionando y listo para que puedas empezar a vender tus productos.'
      }
    ];

    this.dataFour = [
      {
        title: ' Me da pereza el marketing',
        content: 'Entendemos que uno no puede saber de todo. Pero a día de hoy, el marketing online es una herramienta fundamental para todo. Aunque llegar a ser un experto requiere bastante tiempo, te vamos a enseñar de manera sencilla a crear tus campañas publicitarias en Facebook e Instagram. Paso a paso, pero directo a los puntos clave.'
      }
    ];

    this.dataFive = [
      {
        title: ' El Equipo',
        content: 'Entendemos que uno no puede saber de todo. Pero a día de hoy, el marketing online es una herramienta fundamental para todo. Aunque llegar a ser un experto requiere bastante tiempo, te vamos a enseñar de manera sencilla a crear tus campañas publicitarias en Facebook e Instagram. Paso a paso, pero directo a los puntos clave.'
      }
    ];
  }
}

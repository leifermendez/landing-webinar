import {Component, Input, OnInit} from '@angular/core';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

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
  faWhatsapp = faWhatsapp;

  constructor() {
  }

  ngOnInit(): void {
    this.dataTwo = [
      {
        title: '¿Quieres emprender un negocio?',
        content: '¿Estas cansado de trabajar para enriquecer a tu jefe? Estás en el lugar adecuado. Queremos facilitarte todas las herramientas para que puedas llevar a cabo esa idea que te ronda la cabeza.'
      },
      {
        title: '¡Cuéntanos tu idea!',
        content: '¿Solo tienes la idea pero no tienes claro por dónde empezar? Estaremos encantados de escucharte a través de una de nuestras asesorías online. <br><br> Analizaremos la viabilidad de la misma, y te guiaremos para que puedas ponerla en marcha cuanto antes.',
        contact: 'Escribenos'
      }
    ];


    this.dataThree = [
      {
        title: '¿Tienes una tienda online?',
        content: 'Entonces nuestra formación <b>“Emprende Importando”</b> es perfecta para ti. Te enseñaremos todo lo necesario para que seas capaz de importar tus productos directamente, sin intermediarios.  <br><br>  Esto se va a traducir en un ahorro de costes, es decir, un aumento de tu margen de beneficios.'
      },
      {
        title: '¿Aún no la tienes?',
        content: '¡Ningún problema! En vez de enseñarte a como crear un ecommerce (y para no hacerte aprender a programar), te lo vamos a crear y configurar, y te lo entregamos ya funcionando y listo para que puedas empezar a vender tus productos.'
      }
    ];

    this.dataFour = [
      {
        title: ' El marketing',
        content: 'Entendemos que uno no puede saber de todo, pero a día de hoy, el marketing online es una herramienta fundamental. <br><br> Dado que llegar a ser un experto requiere bastante tiempo, en esta formación te vamos a enseñar de manera sencilla a crear tus campañas publicitarias en Facebook e Instagram. Paso a paso, pero directo a los puntos clave.'
      }
    ];

    this.dataFive = [
      {
        title: ' El Equipo',
        content: 'Contamos con un equipo internacional de jóvenes profesionales, con varios años de experiencia cada uno en su sector (importaciones, formación empresarial, marketing, desarrollo web y diseño gráfico). <br><br> Nuestras dos sedes logísticas se encuentran en España y en Holanda.'
      }
    ];
  }
}

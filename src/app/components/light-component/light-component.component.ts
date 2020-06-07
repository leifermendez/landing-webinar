import {Component, Input, OnInit} from '@angular/core';
import {faFacebookF, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-light-component',
  templateUrl: './light-component.component.html',
  styleUrls: ['./light-component.component.css']
})
export class LightComponentComponent implements OnInit {
  @Input() data: any = [];
  @Input() color = '';
  faWhatsapp = faWhatsapp;

  constructor() {
  }

  ngOnInit(): void {
  }

}

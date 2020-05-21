import {Component, OnInit} from '@angular/core';
import {faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-section-fourth',
  templateUrl: './section-fourth.component.html',
  styleUrls: ['./section-fourth.component.css']
})
export class SectionFourthComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;

  constructor() {
  }

  ngOnInit() {
  }

}

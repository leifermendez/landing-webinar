import { Component, OnInit } from '@angular/core';
import {faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faArrowRight, faCheck} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register-block',
  templateUrl: './register-block.component.html',
  styleUrls: ['./register-block.component.css']
})
export class RegisterBlockComponent implements OnInit {
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}

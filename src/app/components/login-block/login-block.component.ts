import {Component, OnInit} from '@angular/core';
import {faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.css']
})
export class LoginBLockComponent implements OnInit {
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  faArrowRight = faArrowRight;

  constructor() {
  }

  ngOnInit(): void {
  }

}

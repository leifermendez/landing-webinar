import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  clickLink = () => {
    const body = document.querySelector('body');
    body.classList.remove('hiro-nav-popup-modal-open');
  };
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  data: any;

  constructor() {
  }

  ngOnInit(): void {
    this.data = {
      title: 'PAGE_SERVICES.TITLE',
      text: 'PAGE_SERVICES.TEXT'
    };
  }
}

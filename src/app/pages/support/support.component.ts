import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  data: any;

  constructor() {
  }

  ngOnInit(): void {
    this.data = {
      title: 'PAGE_SUPPORT.TITLE',
      text: 'PAGE_SUPPORT.TEXT'
    };
  }

}

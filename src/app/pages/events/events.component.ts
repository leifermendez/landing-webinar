import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  data: any;

  constructor() {
  }

  ngOnInit(): void {
    this.data = {
      title: 'PAGE_EVENTS.TITLE',
      text: 'PAGE_EVENTS.TEXT'
    };
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any;

  constructor() {
  }

  ngOnInit(): void {
    this.data = {
      title: 'PAGE_ABOUT.TITLE',
      text: 'PAGE_ABOUT.TEXT'
    };
  }

}

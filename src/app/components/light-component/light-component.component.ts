import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-light-component',
  templateUrl: './light-component.component.html',
  styleUrls: ['./light-component.component.css']
})
export class LightComponentComponent implements OnInit {
  @Input() data: any = [];
  @Input() color = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}

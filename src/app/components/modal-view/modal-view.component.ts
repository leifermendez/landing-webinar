import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/images/plan-1.json',
  };

  constructor() {
  }

  ngOnInit(): void {
  }


  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}

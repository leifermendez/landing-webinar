import {Component, OnInit} from '@angular/core';
import {ModalViewComponent} from '../modal-view/modal-view.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ModalVideoComponent} from '../modal-video/modal-video.component';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.css']
})
export class SectionThreeComponent implements OnInit {
  bsModalRef: BsModalRef;
  public data = [
    {
      id: 3,
      video: 'https://media-mochileros.s3.us-east-2.amazonaws.com/videos/WhatsApp+Video+2020-05-25+at+18.51.04.mp4',
      name: 'Sofia Mommeso',
      country: 'ar',
      subTitle: 'Emprendedor'
    },
    {
      id: 2,
      video: 'https://media-mochileros.s3.us-east-2.amazonaws.com/videos/WhatsApp+Video+2020-05-26+at+01.24.49.mp4',
      name: 'Charles Castañeda',
      country: 'ar',
      subTitle: 'Emprendedor'
    },
    {
      id: 1,
      video: 'https://media-mochileros.s3.us-east-2.amazonaws.com/videos/WhatsApp+Video+2020-05-25+at+18.51.03.mp4',
      name: 'Roxana Sanchez',
      country: 'co',
      subTitle: 'Emprendedor'
    },
    {
      id: 4,
      video: 'https://media-mochileros.s3.us-east-2.amazonaws.com/videos/VID-20200601-WA0027.mp4',
      name: 'Victor Corral',
      country: 'es',
      subTitle: 'Emprendedor'
    }
  ];

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  open(initialize: any = null) {
    const initialState = {
      data: this.data.find(a => a.id === initialize)
    };
    this.bsModalRef = this.modalService.show(
      ModalVideoComponent,
      Object.assign({initialState}, {
        class: 'modal-light-plan modal-video-light'
      })
    );
  }
}

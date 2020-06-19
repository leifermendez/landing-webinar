import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';
import {faCheck, faTimes, faCrown, faAward} from '@fortawesome/free-solid-svg-icons';
import {animate, style, transition, trigger} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css'],
  animations: [
    trigger('swipe', [
      transition(':enter', [
        style({transform: 'translateY(-20%)', opacity: '0'}),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.2s ease-out', style({transform: 'translateY(20%)', opacity: '1'}))
      ])
    ])
  ]
})
export class ModalVideoComponent implements OnInit {
  public list: any = [];
  faCheck = faCheck;
  faTimes = faTimes;
  faCrown = faCrown;
  faAward = faAward;
  public section: any;
  public data: any;

  public images = {
    FIRST_PLAN: {
      IMG: '../../../assets/images/first_plan.jpg',
      ICON: null
    },
    SECOND_PLAN: {
      IMG: '../../../assets/images/ecommerce_plan.jpg',
      ICON: faAward
    },
    THIRD_PLAN: {
      IMG: '../../../assets/images/third_plan.jpg',
      ICON: faCrown
    },
    FOURTH_PLAN: {
      IMG: '../../../assets/images/fourth_plan.jpg',
      ICON: faCrown
    }
  };


  constructor(private translate: TranslateService,
              public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.translate.get('MODAL_PLAN').subscribe((res: string) => {
      // this.data = res[this.section];
      // this.changeBackground(this.section);
    });
  }


  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  changeBackground = (plan: string) => {
    // @ts-ignore
    const pointer = document.querySelector('.section-image').style;
    pointer.setProperty('--images-background', `url(${this.images[plan]['IMG']})`);
  };
}

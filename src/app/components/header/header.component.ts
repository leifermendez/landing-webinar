import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {transition, trigger, style, animate} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
export class HeaderComponent implements OnInit {
  public content = {
    firstSecond: null,
    secondSecond: null,
    thirdSecond: null
  };

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.get('SECTION_ONE.SECOND_SENTENCE').subscribe((res: string) => {
      this.content = {
        ...this.content, ...{
          firstSecond: res
        }
      };
    });
    this.translate.get('SECTION_TWO.SECOND_SENTENCE').subscribe((res: string) => {
      this.content = {
        ...this.content, ...{
          secondSecond: res
        }
      };
    });
    this.translate.get('SECTION_THREE.SECOND_SENTENCE').subscribe((res: string) => {
      this.content = {
        ...this.content, ...{
          thirdSecond: res
        }
      };
    });
  }

  clickLink = () => {
    const body = document.querySelector('body');
    body.classList.remove('hiro-nav-popup-modal-open');
  };
}

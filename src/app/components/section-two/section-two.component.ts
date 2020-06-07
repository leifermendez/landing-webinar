import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ModalViewComponent} from '../modal-view/modal-view.component';
import {faCheck, faTimes, faCrown, faAward} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {
  @Input() showTitle = false;
  @Input() mode = false;
  public items: any;
  public checkList: any;
  bsModalRef: BsModalRef;
  faAward = faAward;
  faWhatsapp = faWhatsapp;
  faCheck = faCheck;
  faCrown = faCrown;

  constructor(private modalService: BsModalService,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.get('SERVICES.SECOND.CONTENT').subscribe((res: string) => {
      this.items = res;
    });
    this.translate.get('SERVICES.FIRST.LIST').subscribe((res: string) => {
      this.checkList = res;
    });
  }


  open(data: any = null) {
    const initialState = {
      section: data
    };

    this.bsModalRef = this.modalService.show(
      ModalViewComponent,
      Object.assign({initialState}, {
        class: 'modal-light-plan'
      })
    );
  }

}

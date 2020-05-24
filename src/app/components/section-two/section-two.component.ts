import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ModalViewComponent} from '../modal-view/modal-view.component';
import {faCheck, faTimes, faCrown, faAward} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {
  bsModalRef: BsModalRef;
  faAward = faAward;
  faCheck = faCheck;
  faCrown = faCrown;
  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
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

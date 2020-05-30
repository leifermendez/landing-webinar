import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {faCheck, faTimes, faCrown, faAward} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css']
})
export class ModalGalleryComponent implements OnInit {
  public section: any;
  faTimes = faTimes;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {


  }

}

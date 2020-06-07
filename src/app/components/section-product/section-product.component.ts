import {Component, Input, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {ModalViewComponent} from '../modal-view/modal-view.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ModalGalleryComponent} from '../modal-gallery/modal-gallery.component';

@Component({
  selector: 'app-section-product',
  templateUrl: './section-product.component.html',
  styleUrls: ['./section-product.component.css']
})
export class SectionProductComponent implements OnInit {
  @Input() mode = false;
  bsModalRef: BsModalRef;
  galleryImages: any[];
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplayTimeout: 1500,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: false
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {


    this.galleryImages = [
      {
        firstImg: {
          image: '../../assets/images/products/adidas/img_1.jpeg',
          brand: {
            name: 'Adidas'
          }
        },
        secondImg: {
          image: '../../assets/images/products/adidas/img_2.jpeg',
          brand: {
            name: 'Adidas'
          }
        }
      },
      {
        firstImg: {
          image: '../../assets/images/products/adidas/img_3.jpeg',
          brand: {
            name: 'Adidas'
          }
        },
        secondImg: {
          image: '../../assets/images/products/adidas/img_4.jpeg',
          brand: {
            name: 'Adidas'
          }
        }
      },
      {
        firstImg: {
          image: '../../assets/images/products/nike/img_1.jpeg',
          brand: {
            name: 'Nike'
          }
        },
        secondImg: {
          image: '../../assets/images/products/nike/img_1.jpg',
          brand: {
            name: 'Nike'
          }
        }
      },
      {
        firstImg: {
          image: '../../assets/images/products/gucci/img_1.jpg',
          brand: {
            name: 'Gucci'
          }
        },
        secondImg: {
          image: '../../assets/images/products/balenciaga/img_1.jpg',
          brand: {
            name: 'Balenciaga'
          }
        }
      },
      {
        firstImg: {
          image: '../../assets/images/products/givenchy/img_1.jpg',
          brand: {
            name: 'Givenchy'
          }
        },
        secondImg: {
          image: '../../assets/images/products/burberry/img_2.jpg',
          brand: {
            name: 'Burberry'
          }
        }
      },
      {
        firstImg: {
          image: '../../assets/images/products/gucci/img_2.jpg',
          brand: {
            name: 'Gucci'
          }
        },
        secondImg: {
          image: '../../assets/images/products/versace/img_1.jpeg',
          brand: {
            name: 'Versace'
          }
        }
      },
      {
        firstImg: {
          image: '../../assets/images/products/louis_vuitton/img_1.jpg',
          brand: {
            name: 'Louis Vuitton'
          }
        },
        secondImg: {
          image: '../../assets/images/products/louis_vuitton/img_2.jpg',
          brand: {
            name: 'Louis Vuitton'
          }
        }
      },
      {
        firstImg: {
          image: '../../assets/images/products/louis_vuitton/img_3.jpg',
          brand: {
            name: 'Louis Vuitton'
          }
        },
        secondImg: {
          image: '../../assets/images/products/louis_vuitton/img_4.jpg',
          brand: {
            name: 'Louis Vuitton'
          }
        }
      },
    ];
  }

  open(data: any = null) {
    const initialState = {
      section: data
    };

    this.bsModalRef = this.modalService.show(
      ModalGalleryComponent,
      Object.assign({initialState}, {
        class: 'modal-light-plan'
      })
    );
  }

}

import {Component, OnInit} from '@angular/core';
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
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 8
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
          image: 'http://photo.yupoo.com/424334770/b220f73b/3a982beb.jpeg',
          brand: {
            name: 'Adidas'
          }
        },
        secondImg: {
          image: 'https://photo.yupoo.com/2942273488/a9806676/0b699468.jpg',
          brand: {
            name: 'Nike'
          }
        }
      },
      {
        firstImg: {
          image: 'http://photo.yupoo.com/424334770/2204ebda/eea0daa1.jpg',
          brand: {
            name: 'Adidas'
          }
        },
        secondImg: {
          image: 'https://photo.yupoo.com/2942273488/b3ab090d/ab8f2a9f.jpg',
          brand: {
            name: 'Nike'
          }
        }
      },
      {
        firstImg: {
          image: 'http://photo.yupoo.com/280093721_v/1d261ca8/97cdf66f.jpeg',
          brand: {
            name: 'Nike'
          }
        },
        secondImg: {
          image: 'http://photo.yupoo.com/280093721_v/cdc60167/582270ed.jpeg',
          brand: {
            name: 'Nike'
          }
        }
      },
      {
        firstImg: {
          image: 'http://photo.yupoo.com/junny8668/c50bdfd4/d992a662.jpg',
          brand: {
            name: 'Nike'
          }
        },
        secondImg: {
          image: 'http://photo.yupoo.com/junny8668/c445fe84/b21e41a1.jpg',
          brand: {
            name: 'Nike'
          }
        }
      },
      {
        firstImg: {
          image: 'http://photo.yupoo.com/junny8668/514d0661/de657b28.jpg',
          brand: {
            name: 'Nike'
          }
        },
        secondImg: {
          image: 'http://photo.yupoo.com/junny8668/af9d8abe/0cb7d782.jpg',
          brand: {
            name: 'Nike'
          }
        }
      },
      {
        firstImg: {
          image: 'http://photo.yupoo.com/junny8668/af35a6a6/6f173fdb.jpg',
          brand: {
            name: 'Nike'
          }
        },
        secondImg: {
          image: 'http://photo.yupoo.com/junny8668/92195956/25d70c92.jpg',
          brand: {
            name: 'Nike'
          }
        }
      },
      {
        firstImg: {
          image: 'https://photo.yupoo.com/hotbags/3c898cf3/f6986440.jpg',
          brand: {
            name: 'Nike'
          }
        },
        secondImg: {
          image: 'https://photo.yupoo.com/hotbags/7eeb7291/c8ec0aa4.jpg',
          brand: {
            name: 'Nike'
          }
        }
      },
      {
        firstImg: {
          image: 'https://photo.yupoo.com/hotbags/4252fd3b/15dfafc6.jpg',
          brand: {
            name: 'Nike'
          }
        },
        secondImg: {
          image: 'https://photo.yupoo.com/hotbags/49cbd152/fe9369cf.jpg',
          brand: {
            name: 'Nike'
          }
        }
      }
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

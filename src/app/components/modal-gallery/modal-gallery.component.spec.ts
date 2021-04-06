import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalGalleryComponent } from './modal-gallery.component';

describe('ModalGalleryComponent', () => {
  let component: ModalGalleryComponent;
  let fixture: ComponentFixture<ModalGalleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

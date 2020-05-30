import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductComponent } from './section-product.component';

describe('SectionProductComponent', () => {
  let component: SectionProductComponent;
  let fixture: ComponentFixture<SectionProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

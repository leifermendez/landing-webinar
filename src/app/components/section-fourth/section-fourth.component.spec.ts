import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourthComponent } from './section-fourth.component';

describe('SectionFourthComponent', () => {
  let component: SectionFourthComponent;
  let fixture: ComponentFixture<SectionFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

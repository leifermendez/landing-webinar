import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionFourthComponent } from './section-fourth.component';

describe('SectionFourthComponent', () => {
  let component: SectionFourthComponent;
  let fixture: ComponentFixture<SectionFourthComponent>;

  beforeEach(waitForAsync(() => {
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

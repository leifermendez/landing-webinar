import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionTwoComponent } from './section-two.component';

describe('SectionTwoComponent', () => {
  let component: SectionTwoComponent;
  let fixture: ComponentFixture<SectionTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

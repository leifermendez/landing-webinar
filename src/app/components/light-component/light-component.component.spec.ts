import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightComponentComponent } from './light-component.component';

describe('LightComponentComponent', () => {
  let component: LightComponentComponent;
  let fixture: ComponentFixture<LightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBlockComponent } from './register-block.component';

describe('RegisterBlockComponent', () => {
  let component: RegisterBlockComponent;
  let fixture: ComponentFixture<RegisterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

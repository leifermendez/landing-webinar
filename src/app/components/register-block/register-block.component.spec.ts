import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterBlockComponent } from './register-block.component';

describe('RegisterBlockComponent', () => {
  let component: RegisterBlockComponent;
  let fixture: ComponentFixture<RegisterBlockComponent>;

  beforeEach(waitForAsync(() => {
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

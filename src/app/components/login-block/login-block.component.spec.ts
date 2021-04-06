import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginBLockComponent } from './login-block.component';

describe('LoginBLockComponent', () => {
  let component: LoginBLockComponent;
  let fixture: ComponentFixture<LoginBLockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSignInComponent } from './after-sign-in.component';

describe('AfterSignInComponent', () => {
  let component: AfterSignInComponent;
  let fixture: ComponentFixture<AfterSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterSignInComponent]
    });
    fixture = TestBed.createComponent(AfterSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

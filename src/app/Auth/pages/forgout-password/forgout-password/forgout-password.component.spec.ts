import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgoutPasswordComponent } from './forgout-password.component';

describe('ForgoutPasswordComponent', () => {
  let component: ForgoutPasswordComponent;
  let fixture: ComponentFixture<ForgoutPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgoutPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgoutPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

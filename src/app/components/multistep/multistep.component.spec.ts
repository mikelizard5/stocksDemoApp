import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistepComponent } from './multistep.component';

describe('MultistepComponent', () => {
  let component: MultistepComponent;
  let fixture: ComponentFixture<MultistepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultistepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultistepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

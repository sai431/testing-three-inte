import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymservicesComponent } from './gymservices.component';

describe('GymservicesComponent', () => {
  let component: GymservicesComponent;
  let fixture: ComponentFixture<GymservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

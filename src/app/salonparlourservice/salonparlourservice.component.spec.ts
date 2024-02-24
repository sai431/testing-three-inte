import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonparlourserviceComponent } from './salonparlourservice.component';

describe('SalonparlourserviceComponent', () => {
  let component: SalonparlourserviceComponent;
  let fixture: ComponentFixture<SalonparlourserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalonparlourserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalonparlourserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

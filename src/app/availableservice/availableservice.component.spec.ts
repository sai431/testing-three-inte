import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableserviceComponent } from './availableservice.component';

describe('AvailableserviceComponent', () => {
  let component: AvailableserviceComponent;
  let fixture: ComponentFixture<AvailableserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailableserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

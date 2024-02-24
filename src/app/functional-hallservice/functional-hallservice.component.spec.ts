import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalHallserviceComponent } from './functional-hallservice.component';

describe('FunctionalHallserviceComponent', () => {
  let component: FunctionalHallserviceComponent;
  let fixture: ComponentFixture<FunctionalHallserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionalHallserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionalHallserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

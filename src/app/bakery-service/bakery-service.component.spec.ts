import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryServiceComponent } from './bakery-service.component';

describe('BakeryServiceComponent', () => {
  let component: BakeryServiceComponent;
  let fixture: ComponentFixture<BakeryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BakeryServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BakeryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

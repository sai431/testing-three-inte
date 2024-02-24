import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleservicesComponent } from './wholesaleservices.component';

describe('WholesaleservicesComponent', () => {
  let component: WholesaleservicesComponent;
  let fixture: ComponentFixture<WholesaleservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WholesaleservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WholesaleservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

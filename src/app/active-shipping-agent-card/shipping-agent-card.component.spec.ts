import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAgentCardComponent } from './shipping-agent-card.component';

describe('ShippingAgentCardComponent', () => {
  let component: ShippingAgentCardComponent;
  let fixture: ComponentFixture<ShippingAgentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingAgentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingAgentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveShippingAgentCardComponent } from './inactive-shipping-agent-card.component';

describe('InactiveShippingAgentCardComponent', () => {
  let component: InactiveShippingAgentCardComponent;
  let fixture: ComponentFixture<InactiveShippingAgentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactiveShippingAgentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactiveShippingAgentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

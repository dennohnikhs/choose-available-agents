import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableAgentsComponent } from './available-agents.component';

describe('AvailableAgentsComponent', () => {
  let component: AvailableAgentsComponent;
  let fixture: ComponentFixture<AvailableAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableAgentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDashboardButton } from './default-dashboard-button';

describe('DefaultDashboardButton', () => {
  let component: DefaultDashboardButton;
  let fixture: ComponentFixture<DefaultDashboardButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultDashboardButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultDashboardButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotInformationComponent } from './bot-information.component';

describe('BotInformationComponent', () => {
  let component: BotInformationComponent;
  let fixture: ComponentFixture<BotInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

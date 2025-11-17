import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotlistComponent } from './botlist.component';

describe('BotlistComponent', () => {
  let component: BotlistComponent;
  let fixture: ComponentFixture<BotlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

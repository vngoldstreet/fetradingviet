import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyusingComponent } from './whyusing.component';

describe('WhyusingComponent', () => {
  let component: WhyusingComponent;
  let fixture: ComponentFixture<WhyusingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyusingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyusingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownledgeComponent } from './knownledge.component';

describe('KnownledgeComponent', () => {
  let component: KnownledgeComponent;
  let fixture: ComponentFixture<KnownledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnownledgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnownledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

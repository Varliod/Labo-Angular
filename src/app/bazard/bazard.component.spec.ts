import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazardComponent } from './bazard.component';

describe('BazardComponent', () => {
  let component: BazardComponent;
  let fixture: ComponentFixture<BazardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BazardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BazardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

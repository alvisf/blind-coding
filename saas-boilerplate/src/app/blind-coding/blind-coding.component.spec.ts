import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindCodingComponent } from './blind-coding.component';

describe('BlindCodingComponent', () => {
  let component: BlindCodingComponent;
  let fixture: ComponentFixture<BlindCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindCodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

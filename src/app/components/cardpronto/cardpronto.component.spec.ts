import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardprontoComponent } from './cardpronto.component';

describe('CardprontoComponent', () => {
  let component: CardprontoComponent;
  let fixture: ComponentFixture<CardprontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardprontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardprontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

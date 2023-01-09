import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAvaliacaoComponent } from './footer-avaliacao.component';

describe('FooterAvaliacaoComponent', () => {
  let component: FooterAvaliacaoComponent;
  let fixture: ComponentFixture<FooterAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

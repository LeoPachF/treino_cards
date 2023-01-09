import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDescontoComponent } from './footer-desconto.component';

describe('FooterDescontoComponent', () => {
  let component: FooterDescontoComponent;
  let fixture: ComponentFixture<FooterDescontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDescontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDescontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

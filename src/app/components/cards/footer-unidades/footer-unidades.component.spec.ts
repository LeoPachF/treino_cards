import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUnidadesComponent } from './footer-unidades.component';

describe('FooterUnidadesComponent', () => {
  let component: FooterUnidadesComponent;
  let fixture: ComponentFixture<FooterUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterUnidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

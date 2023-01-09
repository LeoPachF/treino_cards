import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-unidades',
  templateUrl: './footer-unidades.component.html',
  styleUrls: ['./footer-unidades.component.css'],
})
export class FooterUnidadesComponent implements OnInit {
  unidades: string = '200';
  constructor() {}

  ngOnInit(): void {}
}

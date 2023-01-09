import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-desconto',
  templateUrl: './footer-desconto.component.html',
  styleUrls: ['./footer-desconto.component.css'],
})
export class FooterDescontoComponent implements OnInit {
  public desconto: string = '30%';
  constructor() {}

  ngOnInit(): void {}
}

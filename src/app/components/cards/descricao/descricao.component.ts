import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css'],
})
export class DescricaoComponent implements OnInit {
  descricao: string =
    'Gabinete Gamer Brazil PC, Mid Tower, ATX / Micro-ATX + Kit 3 Cooler GAMER ARGB, Com Lateral De Vidro';
  limiteCaracteres = 60;

  limitarTexto(texto: string, limite: number): string {
    if (texto.length > limite) {
      return texto.slice(0, this.limiteCaracteres) + '...';
    }
    return texto;
  }

  constructor() {}

  ngOnInit(): void {}
}

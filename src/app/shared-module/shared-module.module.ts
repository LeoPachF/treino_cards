import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprarComponent } from '../components/cards/comprar/comprar.component';
import { DescricaoComponent } from '../components/cards/descricao/descricao.component';
import { FooterAvaliacaoComponent } from '../components/cards/footer-avaliacao/footer-avaliacao.component';
import { FooterDescontoComponent } from '../components/cards/footer-desconto/footer-desconto.component';
import { FooterUnidadesComponent } from '../components/cards/footer-unidades/footer-unidades.component';
import { ImageComponent } from '../components/cards/image/image.component';
import { PriceComponent } from '../components/cards/price/price.component';

@NgModule({
  declarations: [
    ComprarComponent,
    DescricaoComponent,
    FooterAvaliacaoComponent,
    FooterDescontoComponent,
    FooterUnidadesComponent,
    ImageComponent,
    PriceComponent,
  ],
  imports: [CommonModule],
})
export class SharedModuleModule {}

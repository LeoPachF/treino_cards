import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterDescontoComponent } from './components/cards/footer-desconto/footer-desconto.component';
import { FooterUnidadesComponent } from './components/cards/footer-unidades/footer-unidades.component';
import { FooterAvaliacaoComponent } from './components/cards/footer-avaliacao/footer-avaliacao.component';
import { PriceComponent } from './components/cards/price/price.component';
import { ComprarComponent } from './components/cards/comprar/comprar.component';
import { ImageComponent } from './components/cards/image/image.component';
import { DescricaoComponent } from './components/cards/descricao/descricao.component';
import { CardprontoComponent } from './components/cardpronto/cardpronto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterDescontoComponent,
    FooterUnidadesComponent,
    FooterAvaliacaoComponent,
    PriceComponent,
    ComprarComponent,
    ImageComponent,
    DescricaoComponent,
    CardprontoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

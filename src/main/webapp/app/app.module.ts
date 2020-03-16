import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WebSocketKafkaVanilaJhSharedModule } from 'app/shared/shared.module';
import { WebSocketKafkaVanilaJhCoreModule } from 'app/core/core.module';
import { WebSocketKafkaVanilaJhAppRoutingModule } from './app-routing.module';
import { WebSocketKafkaVanilaJhHomeModule } from './home/home.module';
import { WebSocketKafkaVanilaJhEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WebSocketKafkaVanilaJhSharedModule,
    WebSocketKafkaVanilaJhCoreModule,
    WebSocketKafkaVanilaJhHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WebSocketKafkaVanilaJhEntityModule,
    WebSocketKafkaVanilaJhAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class WebSocketKafkaVanilaJhAppModule {}

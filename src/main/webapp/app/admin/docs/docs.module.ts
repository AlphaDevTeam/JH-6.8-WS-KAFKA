import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebSocketKafkaVanilaJhSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [WebSocketKafkaVanilaJhSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}

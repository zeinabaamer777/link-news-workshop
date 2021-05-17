import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailsRoutingModule } from './news-details-routing.module';
import { NewsDetailsComponent } from './news-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [NewsDetailsComponent],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class NewsDetailsModule { }

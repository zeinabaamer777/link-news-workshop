import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListRoutingModule } from './news-list-routing.module';
import { NewsListComponent } from './news-list.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule,
    NewsListRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class NewsListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class HomeModule { }

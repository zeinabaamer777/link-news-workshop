import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [
    "assets/images/slider/img1.png",
    "assets/images/slider/img2.png",
    "assets/images/slider/img3.png",
  ];

  sliderConfig = {
    direction: 'horizontal',
    navigation: true,
    grabCursor: true,
    observer: true,
    slidesPerView: 1,
    slideNextClass: 'slider-next',
    slidePrevClass: 'slider-prev',
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false
    },

  };

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

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
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.images)
  }

}

import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-slider-home',
  templateUrl: './owl-slider-home.component.html',
  styleUrls: ['./owl-slider-home.component.css'],
})
export class OwlSliderHomeComponent implements OnInit {
  activeSlides: SlidesOutputData;

  slidesStore: any[];
  index = '0';
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: true,
    navText: ['next', 'previous'],
    smartSpeed: 1000,
    responsive: {
      0: {
        nav: false,
      },
      600: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  };
  ngOnInit() {}

  constructor() {}

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    this.index = '0' + (data.startPosition + 1);
    console.log(this.activeSlides);
  }
}

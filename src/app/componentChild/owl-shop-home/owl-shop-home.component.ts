import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-shop-home',
  templateUrl: './owl-shop-home.component.html',
  styleUrls: ['./owl-shop-home.component.css'],
})
export class OwlShopHomeComponent implements OnInit {
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
        margin: 15,
        nav: false,
        items: 1,
      },
      600: {
        margin: 15,
        items: 1,
        nav: false,
      },
      768: {
        margin: 30,
        nav: true,
        items: 1,
      },
    },
  };
  slidesStore = [
    {
      id: 1,
      title: 'Quartz Belt Watch',
      src: 'assets/img/product/product_1.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watch2',
      src: 'assets/img/product/product_2.png',
    },
    {
      id: 2,
      title: 'Quartz Belt Watchadfasd',
      src: 'assets/img/product/product_4.png',
    },
  ];
  count = Math.ceil(this.slidesStore.length / 8);
  counter(i: number) {
    return new Array(i);
  }
  constructor() {}

  ngOnInit(): void {}
}

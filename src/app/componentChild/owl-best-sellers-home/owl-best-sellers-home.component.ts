import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-best-sellers-home',
  templateUrl: './owl-best-sellers-home.component.html',
  styleUrls: ['./owl-best-sellers-home.component.css'],
})
export class OwlBestSellersHomeComponent implements OnInit {
  constructor() {}
  customOptions: OwlOptions = {
    items: 4,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: true,
    navText: ['next', 'previous'],
    responsive: {
      0: {
        margin: 15,
        items: 1,
        nav: false,
      },
      576: {
        margin: 15,
        items: 2,
        nav: false,
      },
      768: {
        margin: 30,
        items: 3,
        nav: true,
      },
      991: {
        margin: 30,
        items: 4,
        nav: true,
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
  ngOnInit(): void {}
}

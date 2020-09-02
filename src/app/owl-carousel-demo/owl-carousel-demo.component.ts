import { Component, OnInit } from '@angular/core';
declare var $: any;
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-owl-carousel-demo',
  templateUrl: './owl-carousel-demo.component.html',
  styleUrls: ['./owl-carousel-demo.component.css'],
})
export class OwlCarouselDemoComponent implements OnInit {
  title = 'test';
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
  ngOnInit() {
    console.log($('.banner_slider'));
    $('.banner_slider').on(
      'initialized.owl.carousel changed.owl.carousel',
      function (e) {
        console.log(e);

        function pad2(number) {
          return (number < 10 ? '0' : '') + number;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(pad2(carousel.current()));
      }
    );
  }
}

import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Aranoz';
  products: any;
  menus: any;
  isHomePage: any;
  constructor(private renderer: Renderer2) {
    this.isHomePage =
      window.location.pathname === '/home' || '/' ? true : false;
    console.log(this.isHomePage);
  }
  ngOnInit() {
    this.isHomePage =
      window.location.pathname === '/home' || '/' ? true : false;
    // console.log($('.banner_slider'));
  }
  onChangePage(value) {
    console.log(value);

    this.isHomePage = value === '/home' ? true : false;
    console.log(this.isHomePage);
  }
  ngAfterViewInit() {
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/custom.js').onload = () => {};
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}

import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css'],
})
export class ShopCategoryComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript(
      'assets/js/customShopCategory.js'
    ).onload = () => {};
    this.renderExternalScript('assets/js/price_rangs.js').onload = () => {};
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopCategoryComponent } from './pages/shop-category/shop-category.component';
import { CartComponent } from './pages/cart/cart.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchComponent } from './componentChild/search/search.component';
import { MenuComponent } from './componentChild/menu/menu.component';
import { OwlShopHomeComponent } from './componentChild/owl-shop-home/owl-shop-home.component';
import { OwlSliderHomeComponent } from './componentChild/owl-slider-home/owl-slider-home.component';
import { OwlBestSellersHomeComponent } from './componentChild/owl-best-sellers-home/owl-best-sellers-home.component';
import { ProductComponent } from './componentChild/product/product.component';
import { FooterComponent } from './componentChild/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopCategoryComponent,
    CartComponent,
    BlogComponent,
    CheckoutComponent,
    ConfirmationComponent,
    ContactComponent,
    ElementsComponent,
    LoginComponent,
    SingleBlogComponent,
    SingleProductComponent,
    TrackingComponent,
    NotFoundComponent,
    SearchComponent,
    MenuComponent,
    OwlShopHomeComponent,
    OwlSliderHomeComponent,
    OwlBestSellersHomeComponent,
    ProductComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

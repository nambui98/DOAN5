import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsComponent } from './elements/elements.component';
import { LoginComponent } from './login/login.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { TrackingComponent } from './tracking/tracking.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

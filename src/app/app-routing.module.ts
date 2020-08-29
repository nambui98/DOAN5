import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { paths } from './app-paths';
import { PathResolveService } from './path-resolve.service';
// export const paths = {
//   home: 'home',
//   shop: 'shop',
//   contact: 'contact',
//   cart: 'cart',
//   blog: 'blog',
//   checkout: 'checkout',
//   confirmation: 'confirmation',
//   elements: 'elements',
//   login: 'login',
//   singleBlog: 'single-blog/:id',
//   singleProduct: 'single-product/:id',
//   tracking: 'tracking',
// };
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: paths.home,
  },
  {
    path: paths.home,
    component: HomeComponent,
  },
  {
    path: paths.shop,
    component: ShopCategoryComponent,
  },
  {
    path: paths.contact,
    component: ContactComponent,
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService,
    },
    component: NotFoundComponent,
  },
  // { path: 'home', component: HomeComponent },
  // { path: 'shop', component: ShopCategoryComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'confirmation', component: ConfirmationComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'elements', component: ElementsComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'single-blog/:id', component: SingleBlogComponent },
  // { path: 'single-product/:id', component: SingleProductComponent },
  // { path: 'tracking', component: TrackingComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
  { path: paths.cart, component: CartComponent },
  { path: paths.blog, component: BlogComponent },
  { path: paths.checkout, component: CheckoutComponent },
  { path: paths.confirmation, component: ConfirmationComponent },
  { path: paths.elements, component: ElementsComponent },
  { path: paths.login, component: LoginComponent },
  { path: paths.singleBlog, component: SingleBlogComponent },
  { path: paths.singleProduct, component: SingleProductComponent },
  { path: paths.tracking, component: TrackingComponent },
  {
    path: '**',
    resolve: {
      path: PathResolveService,
    },
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

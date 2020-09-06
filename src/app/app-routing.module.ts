import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

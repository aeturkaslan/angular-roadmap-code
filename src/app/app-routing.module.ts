import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { canActivateChildGuard, canActivateGuard, canDeactivateGuard, isAdminGuard, isUserGuard, resolveGuard } from './guards/guards';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "products", component: ProductsComponent,
    canActivate: [canActivateGuard],
    canActivateChild: [canActivateChildGuard],
    canDeactivate: [canDeactivateGuard],
    resolve: { photos: resolveGuard },
  },
  { path: "dashboard", component: AdminComponent, canMatch: [isAdminGuard] },
  { path: "dashboard", component: UserComponent, canMatch: [isUserGuard] },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

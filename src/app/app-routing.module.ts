import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AuthorDashboardComponent } from './Components/author-dashboard/author-dashboard.component';
import { BooksComponent } from './Components/books/books.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PurchasedbooksComponent } from './Components/purchasedbooks/purchasedbooks.component';
import { SearchbooksComponent } from './Components/searchbooks/searchbooks.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CreatebookComponent } from './createbook/createbook.component';
const routes: Routes = [
  {
    path: "createbook",
    component: CreatebookComponent,
    pathMatch: "full"
  },
  {
    path: "viewcart",
    component: CartComponent,
    pathMatch: "full"
  },
  {
    path: "searchbook",
    component: SearchbooksComponent,
    pathMatch: "full"
  },
  {
    path: "books",
    component: BooksComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutComponent,
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "author-dashboard",
    component: AuthorDashboardComponent,
    pathMatch: "full"
  },
  {
    path: "purchasedbooks",
    component: PurchasedbooksComponent,
    pathMatch: "full"
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

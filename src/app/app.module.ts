import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, } from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AboutComponent } from './Components/about/about.component'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { FootComponent } from './foot/foot.component';
import {MatCardModule} from '@angular/material/card';
import { BooksComponent } from './Components/books/books.component';
import { SearchbooksComponent } from './Components/searchbooks/searchbooks.component';
import { CartComponent } from './Components/cart/cart.component';
import { AuthorDashboardComponent } from './Components/author-dashboard/author-dashboard.component';
import { PurchasedbooksComponent } from './Components/purchasedbooks/purchasedbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    CreatebookComponent,
    FootComponent,
    BooksComponent,
    SearchbooksComponent,
    CartComponent,
    AuthorDashboardComponent,
    PurchasedbooksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    FlexLayoutModule,
    MatRippleModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

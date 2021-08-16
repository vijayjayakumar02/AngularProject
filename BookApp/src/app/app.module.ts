import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';

const bookRoute: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'pricing', component: PricingComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    BooksComponent,
    HomeComponent,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(bookRoute)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

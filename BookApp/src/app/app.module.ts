import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { FormComponent } from './form/form.component';
import { SelectService } from './select.service';
import { FormDisplayComponent } from './form-display/form-display.component';


const bookRoute: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'books', component: BooksComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'form', component: FormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    BooksComponent,
    HomeComponent,
    PricingComponent,
    FormComponent,
    FormDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(bookRoute)
  ],

  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

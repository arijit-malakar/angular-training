import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { LoginModule } from './login/login.module';
import { MainService } from './main.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, CoursesComponent, ProductsComponent, SingleProductComponent],
  imports: [
    BrowserModule,
    LoginModule,
    BrowserAnimationsModule,
    MatInputModule,
    AppRoutingModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}

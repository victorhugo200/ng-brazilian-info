import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarModule,
    HomeModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TopWheyComponent } from './top-whey/top-whey.component';
import { AppRoutingModule } from './app-routing.module';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TopWheyComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    AppRoutingModule,
    ButtonModule,
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

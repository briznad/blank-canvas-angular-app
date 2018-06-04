import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

// components
import { AppComponent }  from './components/app/app';
import { ModalComponent }  from './components/modal/modal';
import { SnackBarComponent }  from './components/snack-bar/snack-bar';
import { HeaderComponent }  from './components/header/header';
import { MenuComponent }  from './components/menu/menu';
import { HomepageComponent }  from './components/homepage/homepage';

// Services
import { DataService } from './services/data.service';
import { SnackBarService } from './services/snack-bar.service';

@NgModule({
  imports      : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations : [
    AppComponent,
    ModalComponent,
    SnackBarComponent,
    HeaderComponent,
    MenuComponent,
    HomepageComponent
  ],
  providers    : [
    DataService,
    SnackBarService
  ],
  bootstrap    : [
    AppComponent
  ]
})

export class AppModule {}
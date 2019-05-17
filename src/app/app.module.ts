import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { UserComponent } from './pages/user/user.component';
import { CommonModule} from "@angular/common";
import { UsersService } from './providers/users.service';
import { RouterModule } from '@angular/router';
import { APPROUTES } from './app.routes';
import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    APPROUTES,
    RouterModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }

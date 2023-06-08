import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroItemComponent } from './hero-item/hero-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

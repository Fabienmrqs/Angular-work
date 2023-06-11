import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExoAngularComponent } from './exo-angular/exo-angular.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroItemComponent,
    FormGroupComponent,
    ExoAngularComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

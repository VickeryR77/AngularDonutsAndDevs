import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutViewComponent } from "./donut-view/donut-view.component";
import { PeopleComponent } from './people/people.component';
import { PersonViewComponent } from "./person-view/person-view.component";
import { HttpClientModule } from '@angular/common/http';

//You have to declare -all- the components here

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    PeopleComponent,
    PersonViewComponent,
    DonutViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

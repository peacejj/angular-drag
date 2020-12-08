import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragComponent } from './demo/angular-gridster2/drag/drag.component';
import { GridsterModule as GridsterModule2 } from 'angular-gridster2';
import { Drag2Component } from './demo/angular2gridster/drag2/drag2.component';
import { GridsterModule } from 'angular2gridster';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    Drag2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule2,
    GridsterModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendComponent } from './components/backend/backend.component';
import { FrontendComponent } from './components/frontend/frontend.component';


@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    FrontendComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

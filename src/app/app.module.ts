import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cp1Component } from './cp1/cp1.component';
import { ProfileComponent } from './profile/profile.component';
import { CpDirectiveComponent } from './cp-directive/cp-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    Cp1Component,
    ProfileComponent,
    CpDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

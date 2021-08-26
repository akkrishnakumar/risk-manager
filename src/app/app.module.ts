import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiskmComponent } from './riskm/riskm.component';
import { HeaderComponent } from './header/header.component';
import { PsrowComponent } from './riskm/psrow/psrow.component';

@NgModule({
  declarations: [
    AppComponent,
    RiskmComponent,
    HeaderComponent,
    PsrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

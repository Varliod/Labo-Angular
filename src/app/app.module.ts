import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { MachinComponent } from './machin/machin.component';
import { ChouetteComponent } from './chouette/chouette.component';
import { ChoseComponent } from './chose/chose.component';
import { BiduleComponent } from './bidule/bidule.component';
import { BazardComponent } from './bazard/bazard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MachinComponent,
    ChouetteComponent,
    ChoseComponent,
    BiduleComponent,
    BazardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

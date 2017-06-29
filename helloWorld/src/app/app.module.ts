import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail.component';
import {HeroesComponent} from "./component/heroes.component";
import {DashboardComponent} from "./component/dashboard.component";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./mock/in-memory-data.service";
import {HeroSearchComponent} from "./component/hero-search.component";



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

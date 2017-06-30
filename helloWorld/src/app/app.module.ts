import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule}   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail.component';
import {HeroesComponent} from "./component/heroes.component";
import {DashboardComponent} from "./component/dashboard.component";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import { FlexLayoutModule } from '@angular/flex-layout';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./mock/in-memory-data.service";
import {HeroSearchComponent} from "./component/hero-search.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCheckboxModule, MdAutocompleteModule, MdInputModule, MdRadioModule, MdDatepickerModule,
  MdSelectModule,
  MdNativeDateModule, MdMenuModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdTabsModule,
  MdProgressSpinnerModule, MdCardModule, MdDialogModule, MdSliderModule, MdTooltipModule
} from '@angular/material';
import 'hammerjs';
import {AutocompleteOverviewExample} from "./component/controls-autocomplete.component";
import {TestMaterialComponent, DialogResultExampleDialog} from "./component/test-material.component";
import {CheckboxConfigurableExample} from "./component/controls-checkbox.component";



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    AutocompleteOverviewExample,
    TestMaterialComponent,
    CheckboxConfigurableExample,
    DialogResultExampleDialog,
    TestMaterialComponent

  ],
  entryComponents: [DialogResultExampleDialog],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdNativeDateModule,
    MdInputModule,
    MdRadioModule,MdDatepickerModule,MdSelectModule,
    MdMenuModule,
    MdIconModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdDialogModule,
    MdSliderModule,
    MdTooltipModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

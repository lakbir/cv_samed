import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import { PersonelInfosComponent } from './components/personel-infos/personel-infos.component';
import { AboutYouComponent } from './components/about-you/about-you.component';
import { CurrentMissionsComponent } from './components/current-missions/current-missions.component';
import { HistoryMissionsComponent } from './components/history-missions/history-missions.component';
import {MatTableModule} from "@angular/material/table";
import { AgendaComponent } from './components/agenda/agenda.component';
import { ConnaissanceComponent } from './components/connaissance/connaissance.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { SoldeCongeComponent } from './components/solde-conge/solde-conge.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PersonelInfosComponent,
    AboutYouComponent,
    CurrentMissionsComponent,
    HistoryMissionsComponent,
    AgendaComponent,
    ConnaissanceComponent,
    SoldeCongeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SevastopolComponent } from './pages/sevastopol/sevastopol.component';
import { CrimeaComponent } from './pages/crimea/crimea.component';
import { MainComponent } from './main/main.component';
import {MatDialogModule} from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { VinnytsiaComponent } from './pages/vinnytsia/vinnytsia.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SevastopolComponent,
    CrimeaComponent,
    MainComponent,
    VinnytsiaComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

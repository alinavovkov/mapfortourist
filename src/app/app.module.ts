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
import { CherkasyComponent } from './pages/cherkasy/cherkasy.component';
import { CityService } from './services/city.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OdesaComponent } from './pages/odesa/odesa.component';
import { ChernihivComponent } from './pages/chernihiv/chernihiv.component';
import { ChernivtsiComponent } from './pages/chernivtsi/chernivtsi.component';
import { DnipropetrovskComponent } from './pages/dnipropetrovsk/dnipropetrovsk.component';
import { DonetskComponent } from './pages/donetsk/donetsk.component';
import { IvanoFrankivskComponent } from './pages/ivano-frankivsk/ivano-frankivsk.component';
import { KharkivComponent } from './pages/kharkiv/kharkiv.component';
import { KhersonComponent } from './pages/kherson/kherson.component';
import { KhmelnytskyiComponent } from './pages/khmelnytskyi/khmelnytskyi.component';
import { KyivComponent } from './pages/kyiv/kyiv.component';
import { KyivCityComponent } from './pages/kyiv-city/kyiv-city.component';
import { KirovohradComponent } from './pages/kirovohrad/kirovohrad.component';
import { LuhanskComponent } from './pages/luhansk/luhansk.component';
import { LvivComponent } from './pages/lviv/lviv.component';
import { MykolaivComponent } from './pages/mykolaiv/mykolaiv.component';
import { PoltavaComponent } from './pages/poltava/poltava.component';
import { RivneComponent } from './pages/rivne/rivne.component';
import { SumuComponent } from './pages/sumu/sumu.component';
import { TernopilComponent } from './pages/ternopil/ternopil.component';
import { ZakarpattiaComponent } from './pages/zakarpattia/zakarpattia.component';
import { VolynComponent } from './pages/volyn/volyn.component';
import { ZaporizhiaComponent } from './pages/zaporizhia/zaporizhia.component';
import { ZhytomyrComponent } from './pages/zhytomyr/zhytomyr.component';

@NgModule({
  declarations: [
    AppComponent,
    SevastopolComponent,
    CrimeaComponent,
    MainComponent,
    VinnytsiaComponent,
    DialogComponent,
    CherkasyComponent,
    OdesaComponent,
    ChernihivComponent,
    ChernivtsiComponent,
    DnipropetrovskComponent,
    DonetskComponent,
    IvanoFrankivskComponent,
    KharkivComponent,
    KhersonComponent,
    KhmelnytskyiComponent,
    KyivComponent,
    KyivCityComponent,
    KirovohradComponent,
    LuhanskComponent,
    LvivComponent,
    MykolaivComponent,
    PoltavaComponent,
    RivneComponent,
    SumuComponent,
    TernopilComponent,
    ZakarpattiaComponent,
    VolynComponent,
    ZaporizhiaComponent,
    ZhytomyrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

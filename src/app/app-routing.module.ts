import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SevastopolComponent } from './pages/sevastopol/sevastopol.component';
import { CrimeaComponent } from './pages/crimea/crimea.component';
import { MainComponent } from './main/main.component';
import { VinnytsiaComponent } from './pages/vinnytsia/vinnytsia.component';
import { CherkasyComponent } from './pages/cherkasy/cherkasy.component';
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
import { ZhytomyrComponent } from './pages/zhytomyr/zhytomyr.component';
import { ZaporizhiaComponent } from './pages/zaporizhia/zaporizhia.component';
import { VolynComponent } from './pages/volyn/volyn.component';

const routes: Routes = [
  { path: 'sevastopol', component: SevastopolComponent },
  { path: 'crimea', component: CrimeaComponent },
  { path: 'vinnytsia', component: VinnytsiaComponent },
  { path: 'cherkasy', component: CherkasyComponent },
  { path: 'odesa', component: OdesaComponent },
  { path: 'chernihiv', component: ChernihivComponent },
  { path: 'chernivtsi', component: ChernivtsiComponent },
  { path: 'dnipropetrovsk', component: DnipropetrovskComponent },
  { path: 'donetsk', component: DonetskComponent },
  { path: 'ivano-frankivsk', component: IvanoFrankivskComponent },
  { path: 'kharkiv', component: KharkivComponent },
  { path: 'kherson', component: KhersonComponent },
  { path: 'khmelnytskyi', component: KhmelnytskyiComponent },
  { path: 'kyiv', component: KyivComponent },
  { path: 'kyiv-city', component: KyivCityComponent },
  { path: 'kirovohrad', component: KirovohradComponent },
  { path: 'luhansk', component: LuhanskComponent },
  { path: 'lviv', component: LvivComponent },
  { path: 'mykolaiv', component: MykolaivComponent },
  { path: 'poltava', component: PoltavaComponent },
  { path: 'rivne', component: RivneComponent },
  { path: 'sumu', component: SumuComponent },
  { path: 'ternopil', component: TernopilComponent },
  { path: 'zakarpattia', component: ZakarpattiaComponent },
  { path: 'volyn', component: VolynComponent },
  { path: 'zaporizhia', component: ZaporizhiaComponent },
  { path: 'zhytomyr', component: ZhytomyrComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}

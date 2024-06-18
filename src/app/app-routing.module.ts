import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SevastopolComponent } from './pages/sevastopol/sevastopol.component';
import { CrimeaComponent } from './pages/crimea/crimea.component';
import { MainComponent } from './main/main.component';
import { VinnytsiaComponent } from './pages/vinnytsia/vinnytsia.component';

const routes: Routes = [
  { path: 'sevastopol', component: SevastopolComponent },
  { path: 'crimea', component: CrimeaComponent },
  { path: 'vinnytsia', component: VinnytsiaComponent },
  { path: '', component: MainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}

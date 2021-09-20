import { HoldingsComponent } from './holdings/holdings.component';
import { RiskmComponent } from './riskm/riskm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path :  'riskm' , component : RiskmComponent},
  {path : 'hold' , component : HoldingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

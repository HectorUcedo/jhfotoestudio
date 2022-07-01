import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent}, 
  { path: 'about', component: AboutComponent}, 
  { path: 'item/:id', component: ItemComponent}, 
  { path: '**', pathMatch: 'full', redirectTo: ''}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


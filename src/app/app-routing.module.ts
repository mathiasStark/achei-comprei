import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TopWheyComponent } from './top-whey/top-whey.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'whey', component: TopWheyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

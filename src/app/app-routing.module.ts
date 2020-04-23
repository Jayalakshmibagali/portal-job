import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsoonComponent } from './monsoon/monsoon.component';
import { SeasonComponent } from './season/season.component';


const routes: Routes = [
  { path: 'monsoon', component:MonsoonComponent },
  { path:'season', component:SeasonComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';

const routes: Routes = [
  {  path: '', component: FirstComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [FirstComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }

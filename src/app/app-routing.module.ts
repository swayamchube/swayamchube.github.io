import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeList } from 'src/data/navigation';

const routes: Routes = routeList; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

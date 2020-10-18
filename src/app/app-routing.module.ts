import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutViewComponent } from './donut-view/donut-view.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [

  { path: 'donuts', component: DonutsComponent},
  { path: 'people', component: PeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SingleComponent} from './pages/single/single.component';


const routes: Routes = [
  {path: ':slug', component: SingleComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}

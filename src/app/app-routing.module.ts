import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {BlogModule} from './blog/blog.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'single',
    loadChildren: () => BlogModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

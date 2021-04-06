import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {BlogModule} from './blog/blog.module';
import {OauthModule} from './oauth/oauth.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'single',
    loadChildren: () => BlogModule
  },
  {
    path: 'oauth',
    loadChildren: () => OauthModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'ignore',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    useHash: true,
    relativeLinkResolution: 'legacy',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

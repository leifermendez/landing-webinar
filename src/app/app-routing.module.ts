import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {BlogModule} from './blog/blog.module';
import {OauthModule} from './oauth/oauth.module';
import {AboutComponent} from './pages/about/about.component';
import {ServicesComponent} from './pages/services/services.component';
import {SupportComponent} from './pages/support/support.component';
import {EventsComponent} from './pages/events/events.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'support', component: SupportComponent},
  {path: 'events', component: EventsComponent},
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
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

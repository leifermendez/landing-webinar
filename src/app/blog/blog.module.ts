import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {SingleComponent} from './pages/single/single.component';
import {HeaderComponent} from '../components/header/header.component';
import {SharedModule} from '../shared/shared.module';
import {MarkdownModule} from 'ngx-markdown';


@NgModule({
  declarations: [SingleComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ]
})
export class BlogModule {
}

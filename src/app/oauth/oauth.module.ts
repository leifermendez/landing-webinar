import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OauthRoutingModule } from './oauth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {SharedModule} from '../shared/shared.module';
import {MarkdownModule} from 'ngx-markdown';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    OauthRoutingModule,
    SharedModule,
    MarkdownModule
  ]
})
export class OauthModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../components/header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {ReadMoreDirective} from '../read-more.directive';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    ReadMoreDirective
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule {
}

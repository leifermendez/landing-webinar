import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../components/header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {ReadMoreDirective} from '../read-more.directive';
import {RouterModule} from '@angular/router';
import {FooterComponent} from '../components/footer/footer.component';
import {SectionFourthComponent} from '../components/section-fourth/section-fourth.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FaqComponent} from '../components/faq/faq.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [
    HeaderComponent,
    ReadMoreDirective,
    FooterComponent,
    FaqComponent,
    SectionFourthComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    FontAwesomeModule,
    CollapseModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    SectionFourthComponent,
    FaqComponent]
})
export class SharedModule {
}

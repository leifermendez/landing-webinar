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
import {SectionThreeComponent} from '../components/section-three/section-three.component';
import {SectionOneComponent} from '../components/section-one/section-one.component';
import {SectionTwoComponent} from '../components/section-two/section-two.component';
import {LoginBLockComponent} from '../components/login-block/login-block.component';
import {RegisterBlockComponent} from '../components/register-block/register-block.component';
import {VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule} from 'ngx-videogular';
import {NgxFlagIconCssModule} from 'ngx-flag-icon-css';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';


@NgModule({
  declarations: [
    HeaderComponent,
    ReadMoreDirective,
    FooterComponent,
    FaqComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionFourthComponent,
    SectionThreeComponent,
    LoginBLockComponent,
    RegisterBlockComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    FontAwesomeModule,
    CollapseModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgxFlagIconCssModule,
    NgxGalleryModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionFourthComponent,
    SectionThreeComponent,
    LoginBLockComponent,
    RegisterBlockComponent,
    FaqComponent,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,]
})
export class SharedModule {
}

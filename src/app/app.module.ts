import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {SectionOneComponent} from './components/section-one/section-one.component';
import {SectionTwoComponent} from './components/section-two/section-two.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ModalViewComponent} from './components/modal-view/modal-view.component';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from './shared/shared.module';
import {VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule} from 'ngx-videogular';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import {NgxFlagIconCssModule} from 'ngx-flag-icon-css';
import {ModalGalleryComponent} from './components/modal-gallery/modal-gallery.component';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import { SectionProductComponent } from './components/section-product/section-product.component';
import {PhotoGalleryModule} from '@twogate/ngx-photo-gallery';
import {CarouselModule} from 'ngx-owl-carousel-o';


export function playerFactory() {
  return player;
}


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalViewComponent,
    ModalVideoComponent,
    ModalGalleryComponent,
    SectionProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LottieModule.forRoot({player: playerFactory}),
    ModalModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    RouterModule,
    NgxFlagIconCssModule,
    NgxGalleryModule,
    PhotoGalleryModule,
    CarouselModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

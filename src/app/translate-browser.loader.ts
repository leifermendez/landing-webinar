// shared/loaders/translate-browser.loader.ts
import {Observable} from 'rxjs';
import {TranslateLoader} from '@ngx-translate/core';

import {
  makeStateKey,
  StateKey,
  TransferState
} from '@angular/platform-browser';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

export class TranslateBrowserLoader implements TranslateLoader {
  constructor(private http: HttpClient, private transferState: TransferState) {
  }

  public getTranslation(lang: string): Observable<any> {
    const key: StateKey<number> = makeStateKey<number>(
      'transfer-translate-' + lang
    );
    const data = this.transferState.get(key, null);

    // First we are looking for the translations in transfer-state,
    // if none found, http load as fallback
    if (data) {
      return new Observable((observer) => {
        observer.next(data);
        observer.complete();
      });
    } else {
      return new TranslateHttpLoader(this.http).getTranslation(lang);
    }
  }
}

export function translateBrowserLoaderFactory(
  httpClient: HttpClient,
  transferState: TransferState
) {
  return new TranslateBrowserLoader(httpClient, transferState);
}

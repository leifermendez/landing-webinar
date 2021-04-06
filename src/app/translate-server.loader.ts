// shared/loaders/translate-server.loader.ts
import { join } from 'path';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import {
  makeStateKey,
  StateKey,
  TransferState
} from '@angular/platform-browser';
// @ts-ignore
import * as fs from 'fs';

export class TranslateServerLoader implements TranslateLoader {
  constructor(
    private transferState: TransferState,
    private prefix: string = 'i18n',
    private suffix: string = '.json'
  ) {}

  public getTranslation(lang: string): Observable<any> {
    return new Observable((observer) => {

      const PROJECT_NAME = 'landing-webinar';
      // tslint:disable-next-line:variable-name
      const assets_folder = join(
        process.cwd(),
        'dist',
        PROJECT_NAME, // Your project name here
        'browser',
        'assets',
        this.prefix
      );

      const jsonData = JSON.parse(
        fs.readFileSync(`${assets_folder}/${lang}${this.suffix}`, 'utf8')
      );

      // Here we save the translations in the transfer-state
      const key: StateKey<number> = makeStateKey<number>(
        'transfer-translate-' + lang
      );
      this.transferState.set(key, jsonData);

      observer.next(jsonData);
      observer.complete();
    });
  }
}

export function translateServerLoaderFactory(transferState: TransferState) {
  return new TranslateServerLoader(transferState);
}

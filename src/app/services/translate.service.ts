import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
   translation: {
    [langs: string]: { [key: string]: string }
  } = {
      English: {
        greeting: "Hello",
        name: "Nayera"
      }, Arabic: {
        greeting: "مرحبا",
        name: "نيره"
      }
    }

  private _currentLanguage: 'English' | 'Arabic' = 'English';

  constructor() {
    const storedLang = this.getItems('currentLanguage')

    if (storedLang === 'English' || storedLang === 'Arabic') {
      this._currentLanguage = storedLang
    }
  }

  setItem(key :string,value:string){
    return localStorage.setItem(key,value)
  }
  getItems(key:string){
    return localStorage.getItem(key)
  }

  get currentLanguage(): 'English' | 'Arabic' {
    return this._currentLanguage;
  }

  set currentLanguage(lang: 'English' | 'Arabic') {
    this._currentLanguage = lang;
    this.setItem('currentLanguage', lang)
  }
}

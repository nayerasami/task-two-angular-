import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';
@Pipe({
  name: 'langTranslation',
  pure:false
})
export class TranslationPipe implements PipeTransform {

  constructor(private translateService :TranslateService){}
  private translation= this.translateService.translation


  transform(value: string): string {
    const currentLang = this.translateService.currentLanguage
    console.log("currentLannnn pipe",currentLang)
    return this.translation[currentLang]?.[value] || value;
  }
}

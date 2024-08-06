import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'LangTranslation'
})
export class TranslationPipe implements PipeTransform {

  private translation = {
    English: {
      greeting: "Hello",
      name:"Nayera"
    }, Arabic: {
      greeting: "مرحبا",
      name:"نيره"
    }
  }
  transform(value: string,langs:'English'|'Arabic'): string {
    return this.translation[langs].greeting || value;
  }

}

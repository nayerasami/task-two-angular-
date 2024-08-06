import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langTranslation'
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
  transform(value: string,langs:'English'|'Arabic',property :'greeting'|'name'): string {
    return (this.translation[langs] ||'')[property] || value;
  }

}

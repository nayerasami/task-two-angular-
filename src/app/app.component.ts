import { Component } from '@angular/core';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-two';

  constructor(private translateService: TranslateService) { }
  get currentLang(): 'English' | 'Arabic' {
    return this.translateService.currentLanguage;
  }


  translate() {
    const newLang = this.currentLang === 'English' ? 'Arabic' : 'English';
    this.translateService.currentLanguage = newLang
    console.log(newLang, "newLang")

  }



}

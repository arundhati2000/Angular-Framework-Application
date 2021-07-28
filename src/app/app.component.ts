import { Component } from '@angular/core';

import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color: ThemePalette = 'primary';
  isDarkTheme=false;
  title = 'mat-theming';
  toggleTheme(){
    this.isDarkTheme=!this.isDarkTheme;
      }
ngOnInit(){
  this.isDarkTheme=localStorage.getItem('theme') === "Dark" ? true : false;
}
      storeThemeSelection(){
        localStorage.setItem('theme',this.isDarkTheme ? "Dark" : "Light");
      }
}

// export type Theme = 'light-theme' | 'dark-theme';

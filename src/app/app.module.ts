import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebpageStartComponent } from './webpage-start/webpage-start.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import {MatRippleModule} from '@angular/material/core';
import { TrialComponent } from './trial/trial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';










@NgModule({
  declarations: [
    AppComponent,
    WebpageStartComponent,
    ContactComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     
     MatButtonModule,
     MatSelectModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonToggleModule,
     MatRippleModule,
     MatSlideToggleModule,
     MatRadioModule,
     MatSidenavModule,
     
     RouterModule.forRoot(
       [{path:'contact', component:ContactComponent},
      {path:'',component:WebpageStartComponent}]
     ),
     BrowserAnimationsModule
  
     

  ],
  providers: [],
  bootstrap: [AppComponent],   //Here
  
})
export class AppModule { 

  isDarkTheme: boolean=false;
}

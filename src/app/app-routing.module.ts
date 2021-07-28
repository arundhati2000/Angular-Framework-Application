import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { WebpageStartComponent } from './webpage-start/webpage-start.component';
import {ThemePalette} from '@angular/material/core';


const routes: Routes = [
  {path:'contact', component:ContactComponent
   },{
     path:'',component:WebpageStartComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  color: ThemePalette = 'primary';
}
export const routingComponents=[ContactComponent]

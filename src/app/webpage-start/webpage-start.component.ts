import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { FormsModule } from '@angular/forms';
// import { StartUp } from '../start-up';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {FormControl, Validators} from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
import {Router} from '@angular/router';
import {  Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ThemePalette} from '@angular/material/core';
import {FormBuilder, FormGroup} from '@angular/forms';



// interface Animal {
//   name: string;
//   sound: string;
// }

// interface Product {
//   name: string;
 
// }
@Component({
  selector: 'webpage-start',
  templateUrl: './webpage-start.component.html',
  styleUrls: ['./webpage-start.component.scss']
}
)







export class WebpageStartComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required
  ]);
  animalControl = new FormControl('', Validators.required);
  animaloneControl = new FormControl('', Validators.required);
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  
  theme: Theme = 'light-theme';
  public box=["Marketing","Aeronautics Space  & Defence","AI","Analytics","Animation","AR VR","ArchitectureInterior Design","Art & Photography","Automotive"];
  public info=" ";
  public count=1200;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  
  

  ngOnInit() {
    this.initializeTheme();
  }
  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }
 
  
  mouseOver(){
    let spanelem=(<HTMLInputElement>document.getElementById("disp"));
    spanelem.innerText="Allowed Extension jpg";
    spanelem.style.background="rgba(0,0,0,.637)";
    spanelem.style.color="#fff";
    spanelem.style.padding="8px";
    spanelem.style.borderRadius="5px";
    spanelem.style.fontSize="9px";
    spanelem.style.height="50px";
    // alert("Helloo!");

  }

  Upload(){

    let fileUpload=(<HTMLInputElement>document.getElementById("img_upload"));
    // let spanelem=(<HTMLInputElement>document.getElementById("disp"));
    fileUpload.addEventListener('change',() =>{
      var len_files=fileUpload.files;

      if(len_files!==null){
        if(len_files[0].size > 2000*1024){
          alert("Maximum File Size: 2MB");
        }
      }


    })
  }
  initializeTheme = (): void =>
  this.renderer.addClass(this.document.body, this.theme);

  
  // userModel=new StartUp("Innovation","Marketing","Renewable Energy");
 
  selectFormControl = new FormControl('', Validators.required);

 animals: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  prodControl = new FormControl('', Validators.required);
  prod: string[] = [
    'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'
  ];

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
   
  //  over(){
  //   let popText= (<HTMLInputElement>document.getElementById('disp'));
  //   popText.style.display = 'block';
  //  }

  //  out(){
  //   let popText= (<HTMLInputElement>document.getElementById('disp'));
  //   popText.style.display = 'none';
  //  }

  fontStyleControl = new FormControl();
  fontStyle?: string;


  favoriteSeason: string="";
  seasons: string[] = ['All', 'Incubation', 'Acceleration', 'Investement','Mentoring'];
  
  
  
}

export type Theme = 'light-theme' | 'dark-theme';
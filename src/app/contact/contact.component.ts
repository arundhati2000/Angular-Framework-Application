import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';
import {ThemePalette} from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  
  // userModel=new StartUp("Innovation","Marketing","Renewable Energy");
  animalControl = new FormControl('', Validators.required);
  animaloneControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

 animals: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  prodControl = new FormControl('', Validators.required);
  prod: string[] = [
    'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'
  ];

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  emailoneFormControl = new FormControl('', [
    Validators.required
  ]);

  emailtwoFormControl = new FormControl('', [
    Validators.required
  ]);

  emailthreeFormControl = new FormControl('', [
    Validators.required
  ]);

  emailfourFormControl = new FormControl('', [
    Validators.required
  ]);
  color: ThemePalette = 'primary';
  radius: string="";
  
  firstname="";
  lastname="";
  email="";
  mobile="";
  state="";
  city="";
  // rippleColor: string = "white";
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
  

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  constructor() { }

  ngOnInit(): void {
  }
blank(){
  let x=document.getElementById("mat-input-1");
  if(x==null){
    let y=(<HTMLInputElement>document.getElementById("underlinefname"));
   y.style.backgroundColor="red";

  }
}
}
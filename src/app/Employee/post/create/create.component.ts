import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

//Department dropdown interface
interface Department {
  value: string;
  viewValue: string;
}

//gender interface
interface Gender {
  value: string;
  gendervalue : string;
}

//blood group interface
interface BloodGroup {
  value: string;
  bloodGroup : string;
}
//internetavailable group interface
interface internet {
  value: string;
  internetavailablevalue : string;
}
//system available  interface
interface System {
  value: string;
  systemavailablevalue : string;
}
 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit  {
 
 //department dropdown values
  departments: Department[] = [
    {value: 'Accounts-0', viewValue: 'Accounts'},
    {value: 'MIS-1', viewValue: 'MIS'},
    {value: 'Admin-2', viewValue: 'Admin'},
  ];
 //gender dropdown values
 genders: Gender[] = [
  {value: 'Male-1', gendervalue: 'Male'},
  {value: 'Female-2', gendervalue: 'Female'},
  ];
 //gender dropdown values
 systems: System[] = [
  {value: 'Yes-1', systemavailablevalue: 'Yes'},
  {value: 'No-2', systemavailablevalue: 'No'},
  ];
 //blood dropdown values
 bloods: BloodGroup[] = [
  {value: 'A+-2', bloodGroup: 'A+'},
  {value: 'A--2', bloodGroup: 'A-'},
  {value: 'B+-2', bloodGroup: 'B+'},
  {value: 'B--2', bloodGroup: 'B-'},
  {value: 'O+-2', bloodGroup: 'O+'},
  {value: 'O--2', bloodGroup: 'O-'},
  {value: 'AB+-2', bloodGroup: 'AB+'},
  {value: 'AB--2', bloodGroup: 'AB-'},
  ];

//internet dropdown values
internets: internet[] = [
  {value: 'Yes-1', internetavailablevalue: 'Yes'},
  {value: 'No-2', internetavailablevalue: 'No'},
  ];

  constructor(private builder: FormBuilder) { }
  isLinear=true;

  ngOnInit(): void {
  }

  Empregister = this.builder.group({
    basic: this.builder.group({
      firstname:this.builder.control('',Validators.required),
      lastname:this.builder.control('',Validators.required)

    }),
    contact: this.builder.group({
      email:this.builder.control('',Validators.required),
      phone:this.builder.control('',Validators.required),
      fax:this.builder.control('',Validators.required)

    }),
    address: this.builder.group({
      street:this.builder.control('',Validators.required),
      city:this.builder.control('',Validators.required),
      pin:this.builder.control('',Validators.required)
    })
  });

  get Basicform(){
    return this.Empregister.get("basic") as FormGroup;
  }
  get contactform(){
    return this.Empregister.get("contact") as FormGroup;
  }
  get addressform(){
    return this.Empregister.get("address") as FormGroup;
  }
  HandleSubmit(){
    if(this.Empregister.valid){
      console.log(this.Empregister.value);
    }
  }

}

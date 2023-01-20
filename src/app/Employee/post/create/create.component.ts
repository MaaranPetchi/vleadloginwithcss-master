import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../post';

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
//marital available  interface
interface Martial {
  value: string;
  martialvalue : string;
}
 
//Resignation   interface
interface Resignation {
  value: string;
  Resignationvalue : string;
}
 
//Destination   interface
interface Destination {
  value: string;
  destinationvalue : string;
}
 
//reportingManager1   interface
interface ReportingManager1 {
  value: string;
  reportingmanager1value : string;
}
 
//proficiency
interface Proficiency {
  value: string;
  proficiencyValue: string;
}
 
//reporting manger 2
interface Manager2 {
  value: string;
  viewValue: string;
}
 
//ReportingLeader1 manger 2
interface ReportingLeader1 {
  value: string;
  reportingleader1Value: string;
}
//ReportingLeader1 manger 2
interface ReportingLeader2 {
  value: string;
  reportingleader2Value: string;
}
 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit  {
  toppings = new FormControl('');
  toppingList: string[] = ['Ajith', 'Arun', 'Balaji', 'Rajesh', 'Karthi', 'Rajesh'];
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
 //systemavailable dropdown values
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
 //systemavailable dropdown values
 martials: Martial[] = [
  {value: 'Single-1', martialvalue: 'Single'},
  {value: 'Married-2', martialvalue: 'Married'},
  ];
 //Resignation dropdown values
 resignations: Resignation[] = [
  {value: 'HealthProblem-1', Resignationvalue: 'HealthProblem'},
  {value: 'PersonalProblem-2', Resignationvalue: 'PersonalProblem'},
  {value: 'BetterOffer-3', Resignationvalue: 'BetterOffer'},
  ];
 //destination dropdown values
 destinations: Destination[] = [
  {value: 'HealthProblem-1', destinationvalue: 'HealthProblem'},
  {value: 'PersonalProblem-2', destinationvalue: 'PersonalProblem'},
  {value: 'BetterOffer-3', destinationvalue: 'BetterOffer'},
  ];
  //reportingmanagers1
  reportingmanagers1: ReportingManager1[] = [
  {value: 'HealthProblem-1', reportingmanager1value: 'Sidharth'},
  {value: 'PersonalProblem-2', reportingmanager1value: 'Balaji'},
  {value: 'BetterOffer-3', reportingmanager1value: 'Arun'},
  ];
 
  managers2: Manager2[] = [
    {value: 'steak-0', viewValue: 'Ram'},
    {value: 'pizza-1', viewValue: 'Amar'},
    {value: 'tacos-2', viewValue: 'Kumar'},
  ];
 
  proficiencys: Proficiency[] = [
    {value: 'Novice-0', proficiencyValue: 'Novice'},
    {value: 'Beginner-1', proficiencyValue: 'Beginner'},
    {value: 'Proficient-2', proficiencyValue: 'Proficient'},
    {value: 'Expert-2', proficiencyValue: 'Expert'},
    {value: 'Master-2', proficiencyValue: 'Master'},
  ];
  reportingleaders1: ReportingLeader1[] = [
    {value: 'HealthProblem-1', reportingleader1Value: 'Sidharth'},
    {value: 'PersonalProblem-2', reportingleader1Value: 'Balaji'},
    {value: 'BetterOffer-3', reportingleader1Value: 'Arun'},
  ];
  reportingleaders2: ReportingLeader2[] = [
    {value: 'HealthProblem-1', reportingleader2Value: 'Sidharth'},
    {value: 'PersonalProblem-2', reportingleader2Value: 'Balaji'},
    {value: 'BetterOffer-3', reportingleader2Value: 'Arun'},
  ];
  
  

  constructor(private builder: FormBuilder,) { }
  isLinear=true;

  ngOnInit(): void {
  }

  Empregister = this.builder.group({
    basic: this.builder.group({
      TRADMIN:this.builder.control('',Validators.required),
      Department:this.builder.control('',Validators.required),
      DateOfJoining:this.builder.control('',Validators.required),
      DateofResignation:this.builder.control('',Validators.required),
      Gender:this.builder.control('',Validators.required),
      IsInternetAvailable:this.builder.control('',Validators.required),
      System:this.builder.control('',Validators.required),
      EmployeeName:this.builder.control('',Validators.required),
      DateofBirth:this.builder.control('',Validators.required),
      Maritalstatus:this.builder.control('',Validators.required),
      ResignReasons:this.builder.control('',Validators.required),
      Destination:this.builder.control('',Validators.required),
      CheckBox:this.builder.control('',Validators.required),

    }),
    contact: this.builder.group({
      ReportingManager1:this.builder.control('',Validators.required),
      ReportingManager2:this.builder.control('',Validators.required),
      Proficiency:this.builder.control('',Validators.required),
      ReportingLeader1:this.builder.control('',Validators.required),
      ReportingLeader2:this.builder.control('',Validators.required),
      EmployeeHierarchy:this.builder.control('',Validators.required),

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
  private _allState: Observable<Post[]>;  
  SelCountryId:string="0";  
  FromStudent: any;  
}

import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
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
//Employeeprocess manger 2
interface Employeeprocess {
  value: string;
  employeeprocessValue: string;
}
//Employeeprocess manger 2
interface EmployeeRole {
  value: string;
  employeeroleValue: string;
}
 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit  {
  form!: FormGroup;

//multiple selection employeeprocess
employeesrole= new FormControl('');
employeesroleList:string[]=["Account","Accounts","Admin", "Artists", "Buisness", "Finance", "HR", "MIS" ,"Sales", "SalesAdmin"]

//multiple selection employeeprocess end


//multiple selection employeeprocess
employeesprocess= new FormControl('');
employeesprocessList:string[]=["Client Coordination",  "Production Allocation", "Production",  "Quality Allocation",   "Quality",  "Proof Reading Allocation", "Proof Reading",  "Buddy Proof", "Sew Proof","Sew Out","Client", "Reports"]

//multiple selection employeeprocess end





//Testing multiple selection employeeprocess
// employeesList:Employeeprocess[] = [
//   {value: 'Account-1', employeeprocessValue: 'Account'},
//   {value: 'Accounts-2', employeeprocessValue: 'Accounts'},
//   {value: 'Admin-3', employeeprocessValue: 'Admin'},
//   {value: 'Artists-3', employeeprocessValue: 'Artists'},
//   {value: 'Buisness-3', employeeprocessValue: 'Buisness'},
//   {value: 'Finance-3', employeeprocessValue: 'Finance'},
//   {value: 'HR-3', employeeprocessValue: 'HR'},
//   {value: 'MIS-3', employeeprocessValue: 'MIS'},
//   {value: 'Sales-3', employeeprocessValue: 'Sales'},
//   {value: 'SalesAdmin-3', employeeprocessValue: 'SalesAdmin'},
// ];

//multiple selection employeeprocess end



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
  //employeeroles
  employeeroles: EmployeeRole[] = [
    {value: 'Account-0', employeeroleValue: 'Account'},
    {value: 'Accounts-1', employeeroleValue: 'Accounts'},
    {value: 'Admin-2', employeeroleValue: 'Admin'},
    {value: 'Artists-3', employeeroleValue: 'Artists'},
    {value: 'Buisness-4', employeeroleValue: 'Buisness'},
    {value: 'Finance-5', employeeroleValue: 'Finance'},
    {value: 'HR-6', employeeroleValue: 'HR'},
    {value: 'MIS-7', employeeroleValue: 'MIS'},
    {value: 'Sales-8', employeeroleValue: 'Sales'},
    {value: 'SalesAdmin-9', employeeroleValue: 'SalesAdmin'},
  ];
  
  constructor(private builder: FormBuilder,public postService: PostService,
    private router: Router) { }
  isLinear=true;

  ngOnInit(): void {
    this.form = this.builder.group({
      basic: this.builder.group({
        TRADMIN: new FormControl('',Validators.required),
        Department:new FormControl('',Validators.required),
        DateOfJoining:new FormControl('',Validators.required),
        DateofResignation:new FormControl('',Validators.required),
        Gender:new FormControl('',Validators.required),
        IsInternetAvailable:new FormControl('',Validators.required),
        System:new FormControl('',Validators.required),
        EmployeeName:new FormControl('',Validators.required),
        DateofBirth:new FormControl('',Validators.required),
        Maritalstatus:new FormControl('',Validators.required),
        ResignReasons:new FormControl('',Validators.required),
        Destination:new FormControl('',Validators.required),
        CheckBox:new FormControl('',Validators.required),
      }),
      contact: this.builder.group({
        ReportingManager1:new FormControl('',Validators.required),
        ReportingManager2:new FormControl('',Validators.required),
        Proficiency:new FormControl('',Validators.required),
        ReportingLeader1:new FormControl('',Validators.required),
        ReportingLeader2:new FormControl('',Validators.required),
        EmployeeHierarchy:new FormControl('',Validators.required),
  
      }),
      address: this.builder.group({
        street:new FormControl('',Validators.required),
        PersonalEmailAddress:new FormControl('',Validators.required),
        EmployeeRoles:new FormControl('',Validators.required),
        PresentAddress1:new FormControl('',Validators.required),
        PresentAddress2:new FormControl('',Validators.required),
        PresentAddress3:new FormControl('',Validators.required),
        PermanentAddress1:new FormControl('',Validators.required),
        PermanentAddress2:new FormControl('',Validators.required),
        PermanentAddress3:new FormControl('',Validators.required),
        PhoneNumber:new FormControl('',Validators.required),
        MobileNumber:new FormControl('',Validators.required),
        EmergencyContactName:new FormControl('',Validators.required),
        EmergencyContactNo:new FormControl('',Validators.required),
        OfficialEmailAddress:new FormControl('',Validators.required),
        EmployeeProcess:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required),
       
      })
    });
  }


  get f(){
    return this.form.controls;
  }
     
  get Basicform(){
    return this.form.get("basic") as FormGroup;
  }
  get contactform(){
    return this.form.get("contact") as FormGroup;
  }
  get addressform(){
    return this.form.get("address") as FormGroup;
  }
  
  submit(){
    if(this.form.invalid){
      console.log(this.form.value);
      this.postService.create(this.form.value).subscribe((res:any) => {
        console.log('Post created successfully!');
        this.router.navigateByUrl('post/index');
   })
    }
  }
  
  

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  Form: FormGroup;

  constructor(private fb: FormBuilder, private empObj: FormService,  private _router: Router) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      professionalList: this.fb.array([
        this.onAddCompanyGroup()
      ])
  })
  console.log(this.Form)
  }
  onAddCompanyGroup(): FormGroup
{
  return this.fb.group({
  companyName:['', Validators.required],
  designation: ['', Validators.required],
  startDate: ['', Validators.required],
  endDate: ['', Validators.required],
  skill: ['', Validators.required]
  });
}
CompanyList: {companyName:string, designation:string, startDate:Date, endDate:Date, skill:string}[] = [];

cName: string;
designation:string;
startDate:Date;
endDate:Date;
skill:string;
onPushCompanyList()
{
  this.cName=this.Form.get('professionalList').value[0].companyName
  this.designation=this.Form.get('professionalList').value[0].designation
  this.startDate=this.Form.get('professionalList').value[0].startDate
  this.endDate=this.Form.get('professionalList').value[0].endDate
  this.skill=this.Form.get('professionalList').value[0].skill
  
  this.CompanyList.push({companyName:this.cName,designation:this.designation,startDate:this.startDate,endDate:this.endDate,skill:this.skill})
}

onAddCompany():void
{
  this.onPushCompanyList()

  console.log(this.CompanyList);


  (<FormArray>this.Form.get('professionalList')).push(this.onAddCompanyGroup())
}


onNext()
{
  this.onPushCompanyList();
  this.empObj.onCompanyDetailTemp(this.CompanyList);

  this._router.navigate(['/attachments']);
}
}

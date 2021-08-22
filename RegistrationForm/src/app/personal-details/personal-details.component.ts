import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private formObj: FormService, private _router: Router) { }

  countryList: Array<any> = [
    { name: 'India', states: ['Tamil Nadu','Kerala','Karnataka', 'Maharastra', 'Punjab', 'Uttar Pradesh'] },
    { name: 'USA', states: ['New  York', 'Los Angels'] },
    { name: 'Russia', states: ['Moscow', 'Tatarstan', 'Jewish'] }
  ];

  inputForm: FormGroup;

  states: Array<any>=[];

  changeCountry(count:any) 
  {
    this.states = this.countryList.find(con => con.name == count.target.value).states;
  }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    })
  }

  onNext()
  {
    let fName=this.inputForm.controls.firstName.value;
    let lName=this.inputForm.controls.lastName.value;
    let pNumber=this.inputForm.controls.phoneNumber.value;
    let add=this.inputForm.controls.address.value;
    let con=this.inputForm.controls.country.value;
    let state=this.inputForm.controls.state.value;

    this.formObj.onPersonalDetailTemp(fName,lName,pNumber,add,con,state);

    this._router.navigate(['/professional-details']);
  }
}

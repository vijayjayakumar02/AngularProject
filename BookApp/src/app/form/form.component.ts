import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {SelectService} from '../select.service';
import { Country } from '../../app/country';
import { State } from '../../app/state';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    form = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required)
  });

  constructor(private selectService: SelectService) { }

  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value.country);
    this.selectService.onListAdd(this.form.value.fname,this.form.value.lname,this.form.value.phoneNumber,this.form.value.email,this.form.value.address,this.form.value.country,this.form.value.state);
  }



  
  selectedCountry: Country = new Country(2, 'INDIA');
  countries: Country[] = [];
  states: State[] = [];

  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid:any) {
    let id = countryid.target.value;
    this.states = this.selectService.getStates().filter((item) => item.countryid == id);
  }

}

import { Injectable } from '@angular/core';
import {Country} from './country';
import {State} from './state';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  getCountries(){
    return[
      new Country(1, 'INDIA'),
      new Country(2, 'USA'),
      new Country(3, 'RUSSIA'),
      new Country(4, 'BRAZIL')
    ];
  }
  getStates() {
    return [
      new State(1, 1, 'TamilNadu' ),
      new State(2, 1, 'karnataka' ),
      new State(3, 1, 'Andhra Pradesh'),
      new State(4, 1, 'Delhi'),
      new State(5, 2, 'New York'),
      new State(6, 2, 'Hawaii'),
      new State(7, 2, 'Florida'),
      new State(8, 3, 'Moscow'),
      new State(9, 3, 'St. Petersburg'),
      new State(10, 3, 'Kizhi Island'),
      new State(11, 4, 'Sao Paulo' ),
      new State(12, 4, 'Rio de Janeiro'),
      new State(13, 4, 'Minas Gerais')
     ];
   }
  constructor() { }

   formList:{fname:string, lname:string, phoneNumber: number, EmailId:string, Address:string, country:string, state:string}[]=[];

   onListAdd(fname:string, lname:string, phoneNumber: number, EmailId:string, Address:string, country:string, state:string){
     this.formList.push({
      fname:fname,
      lname:lname,
      phoneNumber:phoneNumber,
      EmailId: EmailId,
      Address: Address,
      country: country,
      state: state
     });
   }
   onFormList(){
     console.log(this.formList.values);
     return this.formList;
   }
}

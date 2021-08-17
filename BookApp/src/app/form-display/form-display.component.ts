import { SelectService } from './../select.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent implements OnInit {

  formList: {fname:string, lname:string, phoneNumber: number, EmailId:string, Address:string, country:string, state:string}[] = [];

  constructor(private selectservice: SelectService) { }

  ngOnInit(): void {
    this.formList = this.selectservice.onFormList();
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  
  employeeList: any;
  
  constructor() { }
  
  ngOnInit(): void {
    // Retrieve the employee data from browser storage
    this.employeeList = localStorage.getItem('details');
   
    this.employeeList=JSON.parse(this.employeeList);
     
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: Array<Employee> = [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getemployees();
    this.employees = this.employees.sort(this.compare);
  }

  compare(a:Employee,b:Employee) {
    if ( a.firstName.toLowerCase() < b.firstName.toLowerCase() ){
      return -1;
    }
    if ( a.firstName.toLowerCase() > b.firstName.toLowerCase() ){
      return 1;
    }
    return 0;
  }

}

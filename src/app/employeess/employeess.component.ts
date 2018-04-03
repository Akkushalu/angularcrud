import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './shared/employee.service';
@Component({
  selector: 'app-employeess',
  templateUrl: './employeess.component.html',
  styleUrls: ['./employeess.component.css'],
  providers:[EmployeeService]
})
export class EmployeessComponent implements OnInit {

  constructor(public employeesrevice:EmployeeService) { }

  ngOnInit() {
  }

}

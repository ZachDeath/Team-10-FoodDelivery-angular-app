import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/shared/employeeConstructor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private eService: EmployeeService) {}

  isLogged: boolean;

  ngOnInit(): void {
    this.isLogged=this.eService.isLogged;
  }
}

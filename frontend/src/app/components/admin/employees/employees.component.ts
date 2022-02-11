import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/shared/employeeConstructor';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  term: string;
  columnsToDisplay = [
    'employee_id',
    'first_name',
    'last_name',
    'date_of_birth',
    'email_address',
    'phone_number',
    'delete',
  ];

  @ViewChild(MatTable) table: MatTable<Employee>;


  constructor(private employeeService: EmployeeService) {
    this.employees = [];
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employeeService.getAllEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }

  deleteEmployee(id: number) {
    if (this.employeeService.employeeObj.employee_id != id) {
      let text = 'Are you sure you want to delete this employee?';
      if (confirm(text) == true) {
        const employeeDeleted = this.employees.findIndex(
          (element) => element.employee_id == id
        );
        console.log(employeeDeleted);
        this.employeeService.deleteEmployee(id).subscribe();
        this.employees.splice(employeeDeleted, 1);
        this.table.renderRows();
      }
    }

    else {
      let text = "You can't delete yourself!";
      console.log(text)
    }
  }

}

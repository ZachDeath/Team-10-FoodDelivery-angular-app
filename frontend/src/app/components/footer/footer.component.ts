import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/shared/employeeConstructor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  color = '#dc4726'
  isAdmin: boolean;

  constructor(private router: Router, private eService: EmployeeService) { 
    console.log("Footer Loaded")
  }

  

  ngOnInit(): void {

    this.eService.loginChanged.subscribe((update: boolean) => {
      console.log("Admin logged in/logged out");
      this.isAdmin = update;
      this.color = '#ba1e1e'
    });

    
  }

  

}

import { NgStyle } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { PostsService } from 'src/app/services/post.service';
import { Message } from 'src/app/shared/messageConstructor';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{
  @ViewChild('contactForm') contactForm: NgForm;

  color = '#dc4726';
  isAdmin = false;
  
  message: Message = {
    message_id:null,
    first_name: null,
    last_name: null,
    email_address: null,
    message: null,
    user_id: null,
  };

  messageSubmitted: Message = {
    message_id:null,
    first_name: null,
    last_name: null,
    email_address: null,
    message: null,
    user_id: null,
  };
  
  constructor(private postsService: PostsService, private eService: EmployeeService, private router: Router) {
    console.log('Contact Form Loaded');
  
  } 


  ngOnInit(): void {
    if (this.eService.isLogged) {
      this.color = '#ba1e1e';
      this.isAdmin = true;
    }
  }



  onSubmit() {
    this.messageSubmitted.first_name = this.contactForm.value.firstName;
    this.messageSubmitted.last_name = this.contactForm.value.lastName;
    this.messageSubmitted.email_address = this.contactForm.value.email;
    this.messageSubmitted.message = this.contactForm.value.message;
  
    console.log(this.messageSubmitted);

    this.postsService.submitMessage(this.messageSubmitted);
    this.contactForm.form.reset();

  }

}

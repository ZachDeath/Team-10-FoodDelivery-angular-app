import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/post.service';
import { Message } from 'src/app/shared/messageConstructor';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{
  @ViewChild('contactForm') contactForm: NgForm;
  
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
  
  constructor(private postsService: PostsService) {
    console.log('Registration Page Loaded');
  } 

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("BUTTON PRESSED!")
    this.messageSubmitted.first_name = this.contactForm.value.firstName;
    this.messageSubmitted.last_name = this.contactForm.value.lastName;
    this.messageSubmitted.email_address = this.contactForm.value.email;
    this.messageSubmitted.message = this.contactForm.value.message;
  
    console.log(this.messageSubmitted);

    this.postsService.submitMessage(this.messageSubmitted);
    this.contactForm.form.reset();

  }

}

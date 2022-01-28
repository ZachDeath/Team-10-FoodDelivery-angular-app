import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  // Works, need to implement method to refresh page after delete though
  deleteUser(id: number) {
    console.log("Working")
    this.userService.deleteUser(id).subscribe();
  }


}

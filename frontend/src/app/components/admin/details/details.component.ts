import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/userConstructor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  users: User[];
  term: string;
  columnsToDisplay = [
    'user_id',
    'first_name',
    'last_name',
    'date_of_birth',
    'email_address',
    'phone_number',
    'delete',
  ];

  @ViewChild(MatTable) table: MatTable<User>;

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
    let text = 'Are you sure you want to delete this user?';
    if (confirm(text) == true) {
      const userDeleted = this.users.findIndex(
        (element) => element.user_id == id
      );
      console.log(userDeleted);
      this.userService.deleteUser(id).subscribe();
      this.users.splice(userDeleted, 1);
      this.table.renderRows();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Users } from "src/app/models/Users";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<Users> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }
  deleteUser(id: number): void{
    this.userService.deleteUser(id).subscribe((response: any) => {
      console.log('Usuário Excluido')
    }, (err: any) => {
      console.log(err)
    }, () => {
      this.getUsers();
    })
  }
}

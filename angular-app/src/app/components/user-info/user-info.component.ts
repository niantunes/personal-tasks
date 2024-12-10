import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() :void {
    this.userService.getAll().subscribe(
      (users) => {
        if (users.length > 0) {
          this.users = users;
        } else {
          console.error('Usuário não cadastrado.');  
        }
      },
      (error) => {
        console.error('Erro ao carregar usuário:', error);
      }
    );
  }

}

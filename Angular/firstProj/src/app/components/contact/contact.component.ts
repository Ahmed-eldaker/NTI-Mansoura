import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
usersService=inject(UsersService)
usersData:any
ngOnInit():void{
  this.usersService.getUsers().subscribe({
    next:(res)=>{this.usersData=res;
    },
    error:(err)=>{console.log(err);
    }
  })
}
}

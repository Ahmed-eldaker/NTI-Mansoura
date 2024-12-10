import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  // token!:string
  _TokenService=inject(TokenService)
  private readonly _UserService=inject(UsersService)
  private readonly _router=inject(Router)
  logInForm:FormGroup=new FormGroup({
    userName:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    password:new FormControl(null,[Validators.required]),
  })
  onSubmit(){
    console.log(this._TokenService.token);
    
    this._UserService.postUsers(this.logInForm.value).subscribe({
      next:(res)=>{this._TokenService=res},
      error:(err)=>{console.log(err);
      }
    })
    // console.log(this.logInForm.value);
    this._router.navigate([''])
    
  }

}

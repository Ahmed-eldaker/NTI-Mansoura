import { Component, ContentChild, inject, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CustomDirDirective } from '../../custom/custom-dir.directive';
import { MyServiceService } from '../../services/my-service.service';
import { UsersService } from './../../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CustomDirDirective],
  // import { resolve } from 'node:path';
templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  dataParent:string='data from parent'
  namesArr!:string[]
  arr:number[]=[]
  
  // constructor(_myService:MyServiceService){
    constructor(){
    let data=inject(MyServiceService)
    // let data=new MyServiceService()
    this.namesArr= data.names  
    // console.log(
      // this.namesArr= myService.names  
      // );
      
    }
    data=inject(UsersService)
    ngOnInit(){
      this.data.getUsers().subscribe({
        next:(res)=>{console.log(res);
        },
        error:(err)=>{console.log(err);
        },
      })
      
    let observableEx=new Observable((observers)=>{
      observers.next(1)
      observers.next(4)
      observers.next(6)
      observers.next(8)
    })
    observableEx.subscribe((val:any)=>{
      this.arr.push(val)
    })
console.log(this.arr);


    let promiseEx=new Promise((resolve)=>{
      console.log("promise");
      
    })
  
    
    
  }
  
  
  
  
}

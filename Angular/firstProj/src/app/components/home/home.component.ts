// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { FoodComponent } from "../food/food.component";
import { RecomDataComponent } from "../recom-data/recom-data.component";
import { ParentComponent } from "../parent/parent.component";
import { CustomDirDirective } from '../../custom/custom-dir.directive';
// import { IProduct } from '../../Interfaces/iproduct';
// import { log } from 'console';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RecomDataComponent, ParentComponent,CustomDirDirective],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
auth:string="guest"
products: IProduct[]=[
{
  name: 'iphone',
  price: 30000,
  onSale: false,
  imgSrc: './assets/imgs/Anastronautridingahorseinaphotorealisticstyle6.webp',
  reviews:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
},{
  name: 'samsung',
  price: 25000,
  onSale: false,
  imgSrc: './assets/imgs/gratisography-cool-cat-800x525.jpg'
}
,{
  name: 'oppo',
  price: 12000,
  onSale: false,
  imgSrc: './assets/imgs/premium_photo-1664474619075-644dd191935f.jpg'
},{
  name: 'honor',
  price: 5000,
  onSale: true,
  imgSrc: './assets/imgs/premium_photo-1664474619075-644dd191935f.jpg'
},
{
  name: 'iphone',
  price: 30000,
  onSale: false,
  imgSrc: './assets/imgs/Anastronautridingahorseinaphotorealisticstyle6.webp',
  reviews:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
},{
  name: 'samsung',
  price: 25000,
  onSale: false,
  imgSrc: './assets/imgs/gratisography-cool-cat-800x525.jpg'
}
,{
  name: 'oppo',
  price: 12000,
  onSale: false,
  imgSrc: './assets/imgs/premium_photo-1664474619075-644dd191935f.jpg'
},{
  name: 'honor',
  price: 5000,
  onSale: true,
  imgSrc: './assets/imgs/premium_photo-1664474619075-644dd191935f.jpg'
}
]
// auth:string="admin"
//   color="red"
//   isAdmin:boolean=false
//   isTrue:boolean=true
//   link:string="./assets/imgs/Anastronautridingahorseinaphotorealisticstyle6.webp"
//   name:string="jessica"
//   sayHello():void{
//   alert(`hello  ${this.name}`)
    
//   }
test(e:KeyboardEvent){
  console.log(e.ctrlKey);
  
}
}

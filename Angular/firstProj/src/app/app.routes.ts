import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { FlowersComponent } from './components/flowers/flowers.component';
import { FoodComponent } from './components/food/food.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { GalleyComponent } from './components/galley/galley.component';

export const routes: Routes = [
   {path: '',redirectTo:"home" ,pathMatch:"full"},
   {path: 'home',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'gallery',component:GallaryComponent,children:[
      {path:'animals',component:AnimalsComponent},
      {path:'food',component:FoodComponent},
      {path:'flowers',component:FlowersComponent}
   ]},
   {path:'**',component:NotFoundComponent}
];

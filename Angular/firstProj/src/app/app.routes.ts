import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GallaryComponent } from './components/gallary/gallary.component';
// import { GalleyComponent } from './components/galley/galley.component';

export const routes: Routes = [
   {path: '',redirectTo:"home" ,pathMatch:"full"},
   {path: 'home',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'gallery',component:GallaryComponent}
];

import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from "../parent/parent.component";
import { CustomDirDirective } from '../../custom/custom-dir.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, ParentComponent,CustomDirDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
data:string="jessica"
@ViewChild('changeDiv') myElement!:ElementRef;
show():void{
    console.log(this.myElement.nativeElement.style.display="none");
  }
}
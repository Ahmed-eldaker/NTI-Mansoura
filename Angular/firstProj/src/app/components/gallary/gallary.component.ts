import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ParentComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {

}

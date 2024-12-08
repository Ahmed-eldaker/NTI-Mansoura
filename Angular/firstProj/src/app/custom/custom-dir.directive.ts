import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
  standalone: true
})
export class CustomDirDirective implements OnInit{

  constructor(private ele:ElementRef) {

  
   }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ele.nativeElement.style.color="white"
    this.ele.nativeElement.style.width="200px"
     this.ele.nativeElement.style.padding="20px 0px"
     this.ele.nativeElement.style.background="red"
  }

   @HostListener('mouseenter') onMouseEnter(){
      this.ele.nativeElement.style.color="white"
      this.ele.nativeElement.style.width="200px"
       this.ele.nativeElement.style.padding="20px 0px"
       this.ele.nativeElement.style.background="red"
    }
    
   @HostListener('mouseleave') onMouseLeave()
   {
    
     
      this.ele.nativeElement.style.background="tomato"
   }
  
}

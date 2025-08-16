import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router,RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() findDoctor = new EventEmitter<void>();
  constructor(private router:Router){

  }
  navigate(fragment:string){
    this.router.navigate(['/Home'],{fragment}).then(()=>{
      if(fragment === 'Home'){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      const element = document.getElementById(fragment);
      console.log(element)
      if(element){
        element.scrollIntoView({behavior:'smooth'})
      }
      else {
        
        this.router.navigate(['/not-found']);
      }
   
    })
  }

  onFindDoctor() {
    this.findDoctor.emit();
  }
}

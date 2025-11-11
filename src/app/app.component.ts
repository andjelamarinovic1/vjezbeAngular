import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf,NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vjezbeAngular';

  name: string ='NekoIme';
  isLoggedIn: boolean=false;

  

  products: any[] = [
    { name: 'proizvod 1',
      price:20,
      sale:true
    },

    {
      name:'proizvod 2',
      price:44,
      sale:false
    },

    {

      name:'proizvod 3',
      price:54,
      sale:true
    },
];



counter: number=0;

myFunc(){

  this.counter++;
}


category: any [] = [ 
  {
    type:'Sport',
    selected:false, 
    description:"Odabran je sport"
  },

  {
    type:'Music',
    selected:false, 
    description:"Odabrana je muzika"
  },

  {
    type:'Movies',
    selected:false, 
    description:"Odabran je film"
  },

  {
    type:'Travel',
    selected:false, 
    description:"Odabrano je putovanje"
  },
 ];


 selectCategory(category:any){
  category.selected=true;
 }




}

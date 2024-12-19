import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advanced-loop';
  show:boolean=true;
  name:string="kiran";
  age:number=0;
  toggleProductComponent(){
   this.show= !this.show;
   //this.name=this.name+" "+this.name;
  }
  changeName(){
    this.name=" Alen";
  }
  incremenetAge(){
    this.age=this.age+1;
  }
  }

import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit,OnDestroy,OnChanges{
  totalPrice:number=0;
  searchName:string='';
  productsBackUp:Product[]=[];
  products:Product[]=[];
  @Input() userName= ''
  @Input() age=0;

  constructor(private productServ:ProductService){
    this.products=this.productServ.getAllProducts();
    this.productsBackUp=this.productServ.getAllProducts();
    // setInterval(() => {
    //   console.log("something",this.searchName)
    // },100)
    // setTimeout(() => {
    //   this.calculateTotalPrice();
    // },4000)
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges",changes);
  }
  ngOnDestroy(): void {
    console.log("On Destory");
  }
  ngOnInit(){
    console.log("Inside on int method");
  }
  

  searchNameChange(){
    console.log("searchName",this.searchName);
    this.products=this.productsBackUp.filter(product => product.name.toLowerCase().includes(this.searchName.toLowerCase()) )
  }
  simplifyData(){
    let prices=this.products.map(product => product.price);
    console.log("prices",prices)
  }
  filterResult(){
    this.products=this.products.filter(product => product.price<15);
  }
  calculateTotalPrice(){
    this.totalPrice =this.products.reduce((total,product)=> total+product.price ,0);

  }
}

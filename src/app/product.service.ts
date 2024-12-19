import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[{
    "name": "Heavy Duty Dust Pan",
    "price": 13,
    "dateofmanufacture": "08-04-2024",
    "expiryDate": "03-09-2024",
    "description": "Geologist II"
  }, {
    "name": "Scallops - Live In Shell",
    "price": 30,
    "dateofmanufacture": "29-10-2024",
    "expiryDate": "15-11-2024",
    "description": "Health Coach IV"
  }, {
    "name": "Bagelers",
    "price": 21,
    "dateofmanufacture": "09-06-2024",
    "expiryDate": "16-08-2024",
    "description": "VP Accounting"
  }, {
    "name": "Salami - Genova",
    "price": 9,
    "dateofmanufacture": "08-03-2024",
    "expiryDate": "07-11-2024",
    "description": "Assistant Media Planner"
  }, {
    "name": "Raisin - Golden",
    "price": 26,
    "dateofmanufacture": "04-12-2023",
    "expiryDate": "29-03-2025",
    "description": "Dental Hygienist"
  }, {
    "name": "Oil - Margarine",
    "price": 5,
    "dateofmanufacture": "01-02-2024",
    "expiryDate": "04-02-2025",
    "description": "Social Worker"
  }, {
    "name": "Numi - Assorted Teas",
    "price": 28,
    "dateofmanufacture": "25-07-2024",
    "expiryDate": "06-11-2024",
    "description": "Product Engineer"
  }, {
    "name": "Ecolab - Power Fusion",
    "price": 26,
    "dateofmanufacture": "16-11-2024",
    "expiryDate": "27-06-2024",
    "description": "VP Marketing"
  }, {
    "name": "Bread Foccacia Whole",
    "price": 24,
    "dateofmanufacture": "27-12-2023",
    "expiryDate": "07-01-2025",
    "description": "Graphic Designer"
  }, {
    "name": "Bread - Malt",
    "price": 18,
    "dateofmanufacture": "19-12-2023",
    "expiryDate": "10-12-2024",
    "description": "Computer Systems Analyst IV"
  }]
  
  constructor() { }   
  getAllProducts():Product[]{
    return this.products;

  }
  
}

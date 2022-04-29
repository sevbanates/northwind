import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category1 = {categoryId:1, categoryName:"Mutfak"}
  category2 = {categoryId:2, categoryName:"Züccaciye"}
  category3 = {categoryId:3, categoryName:"Elektronik"}
  category4 = {categoryId:4, categoryName:"Beyaz Eşya"}
  category5 = {categoryId:5, categoryName:"Ev Aletleri"}
  categories = [this.category1, this.category2, this.category3, this.category4, this.category5]

  constructor() { }

  ngOnInit(): void {
  }

}

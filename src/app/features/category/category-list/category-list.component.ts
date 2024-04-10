import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
 //categories? : Category[];
 categories$?: Observable<Category[]>;

 constructor(private categoryServices: CategoryService){
 }

  ngOnInit(): void {
   this.categories$ = this.categoryServices.getAllCategories();

  }

}

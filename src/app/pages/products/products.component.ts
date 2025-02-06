import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports:[CommonModule],
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  characters: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((data) => {
      this.characters = data.results;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Matrix', 'The Dark Knight', 'Inception', 'The Incredibles'];

   constructor() { }

   ngOnInit() {
   }

}

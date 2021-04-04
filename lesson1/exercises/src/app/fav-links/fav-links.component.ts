import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linkTitle = 'Favorite Links';
  favLinks = [
    'https://tcrf.net/The_Cutting_Room_Floor',
    'https://www.retroreversing.com/',
    'https://wololo.net/'
  ]
  
  constructor() { }

  ngOnInit() {
  }

}

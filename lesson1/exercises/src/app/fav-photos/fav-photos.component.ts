import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Iconic Photos';
  image1 = '../assets/fav-photos/Beyonce.jpg';
  image1Source = '(Source: Kevin Winter/Getty)';
  image2 = '../assets/fav-photos/Lebron-James-Dwane-Wade.jpg';
  image2Source = '(Source: AP Photo/Morry Gash)';
  image3 = '../assets/fav-photos/Bruce-Lee.jpg';
  image3Source = '(Source: Enter the Dragon, Copyright: Warner Bros.)'

  constructor() { }

  ngOnInit() {
  }

}
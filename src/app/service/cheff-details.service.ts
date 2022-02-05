import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheffDetailsService {

  img = new Image();
  constructor() { }

  cheffDetails = [{
    img: this.img.src = "assets/cheff.png", name: 'Cheff 1', special: ['Pizza', 'Sandwich'], rating: [1, 2, 3, 4, 5] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 2', special: ['Burger', 'French Fires'], rating: [1, 2, 3] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 3', special: ['Pasta', 'Rice', 'Beverages'], rating: [1, 2, 3, 4] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 4', special: ['Rice', 'South Indian Foods'], rating: [1, 2, 3] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 5', special: ['Starters', 'Beverages'], rating: [1, 2, 3, 4] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 6', special: ['Pasta', 'South Indian Foods'], rating: [1, 2, 3, 4, 5] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 7', special: ['Burger', 'French Fires'], rating: [1, 2, 3] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 8', special: ['Burger', 'French Fires'], rating: [1, 2, 3, 4] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 9', special: ['Burger', 'French Fires'], rating: [1, 2] },
  { img: this.img.src = "assets/cheff.png", name: 'Cheff 10', special: ['Burger', 'French Fires'], rating: [1, 2, 3, 4] },]
}

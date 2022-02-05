import { Component, OnInit } from '@angular/core';
import { CheffDetailsService } from 'src/app/service/cheff-details.service';

@Component({
  selector: 'app-top-ratings',
  templateUrl: './top-ratings.component.html',
  styleUrls: ['./top-ratings.component.css']
})
export class TopRatingsComponent implements OnInit {

  topRatesCheff: any[] = [];

  constructor(private cheffDetailsService : CheffDetailsService) { }

  ngOnInit(): void {
    this.cheffDetailsService.cheffDetails.forEach(ele => {
      this.topRatesCheff.push({'img' : ele.img, 'name' : ele.name, 'rating' : ele.rating, 'specialised' : ele.special})
    })
   console.log(this.topRatesCheff)
  }

}

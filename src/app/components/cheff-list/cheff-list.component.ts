import { Component, OnInit } from '@angular/core';
import { CheffDetailsService } from 'src/app/service/cheff-details.service';

@Component({
  selector: 'app-cheff-list',
  templateUrl: './cheff-list.component.html',
  styleUrls: ['./cheff-list.component.css']
})
export class CheffListComponent implements OnInit {

  cheffDetails: any[] = [];
  cheffName: String[] = [];
  special: String[] = [];
  rating: number[] = []

  constructor(private cheffDetailsService : CheffDetailsService) { this.getCheffDetails() }

  ngOnInit(): void {
  }

  getCheffDetails() { 
    let index = 0;
    this.cheffDetailsService.cheffDetails.forEach(ele => {
      // this.cheffName.push(ele['name'])
      this.cheffDetails.push(ele);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { TodaysSpecialService } from 'src/app/service/todays-special.service';

@Component({
  selector: 'app-todays-special',
  templateUrl: './todays-special.component.html',
  styleUrls: ['./todays-special.component.css']
})
export class TodaysSpecialComponent implements OnInit {
todays_Special_Foods: any = [];
  constructor(private todaysSpecialService : TodaysSpecialService) { }

  ngOnInit(): void {
    this.todays_Special_Foods = this.todaysSpecialService.specialFoods;
  }

}

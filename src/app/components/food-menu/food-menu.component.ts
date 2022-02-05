import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from 'src/app/service/food-menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  foodList: any[] = []
  foodItemList: any[] = []

  constructor(private foodMenuService: FoodMenuService) { }

  ngOnInit(): void {
    this.foodList =  this.foodMenuService.foodList;
    // console.log(this.foodList)
    // console.log(this.foodList[0]['itemList'][0][0])
    // this.foodList.forEach(ele => {
    //   console.log(ele['itemList'][0][0]['subTitle'])
    // })
    for (const iterator of this.foodList) {
      // console.log(iterator)
      this.foodItemList = iterator['itemList'];
      console.log(this.foodItemList)
      console.log(this.foodItemList[0][0]['items'])
    }
  }
  

}

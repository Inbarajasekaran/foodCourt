import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {

  constructor() { }

  img = new Image()

  foodList = [
    {
      mainTitle: "Small Snacks",
      image: this.img.src = "/assets/starter.jpeg",
      itemList: [
        [
          { subTitle: "Cakes", items: ["Cup Cakes", "Ice Cakes", "Black Forest", "White Forest", "Butterscotch Mix", "Vannila", "Strawberry", "Chocolate"] },
        ],
        [
          { subTitle: "Corn", items: ["Sweet Corn", "Pepper Corn", "Masala Corn", "Chocolate Corn", "Schezwan Corn"] }
        ],
        // [
        //   {
        //     subTitle: "Rolls and Puffs", items: [
        //       [
        //         { itemSubTitle: "Rolls" },
        //         ["Veg. Roll", "Chicken Roll", "Mushroom Roll", "Schezwan Roll"]
        //       ],
        //       [
        //         { itemSubTitle: "Puffs" },
        //         ["Veg. Puffs", "Chicken Puffs", "Egg Puffs", "Mushroom Puffs", "Fries", "Cookiees"]
        //       ]
        //     ]
        //   },
        // ],
        [
          { subTitle: "Fries", items: ["Italian French Fries", "French Fries", "Salty Fries"] },
        ],
        [
          { subTitle: "Cookiees", items: ["Cashew nut Cookies", "Wall nut Cookies", "Butter Cookies", "Pepper Cookies", "Cheese Cookies"] }
        ]
      ]
    },
    {
      mainTitle: "Small Snacks",
      image: this.img.src = "/assets/starter.jpeg",
      itemList: [
        [
          { subTitle: "TEST", items: ["Cup Cakes", "Ice Cakes", "Black Forest", "White Forest", "Butterscotch Mix", "Vannila", "Strawberry", "Chocolate"] },
        ],
        [
          { subTitle: "Corn", items: ["Sweet Corn", "Pepper Corn", "Masala Corn", "Chocolate Corn", "Schezwan Corn"] }
        ],
        // [
        //   {
        //     subTitle: "Rolls and Puffs", items: [
        //       [
        //         { itemSubTitle: "Rolls" },
        //         ["Veg. Roll", "Chicken Roll", "Mushroom Roll", "Schezwan Roll"]
        //       ],
        //       [
        //         { itemSubTitle: "Puffs" },
        //         ["Veg. Puffs", "Chicken Puffs", "Egg Puffs", "Mushroom Puffs", "Fries", "Cookiees"]
        //       ]
        //     ]
        //   },
        // ],
        [
          { subTitle: "Fries", items: ["Italian French Fries", "French Fries", "Salty Fries"] }
        ],
        [
          { subTitle: "Cookiees", items: ["Cashew nut Cookies", "Wall nut Cookies", "Butter Cookies", "Pepper Cookies", "Cheese Cookies"] }
        ]
      ]
    }
  ]

}
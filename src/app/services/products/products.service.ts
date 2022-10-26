import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  bannerImages = [
    {
      imgurl: 'assets/images/slide1.jpg',
    },
    {
      imgurl: 'assets/images/slide8.jpg',
    },
    {
      imgurl: 'assets/images/slide3.jpg',
    },
    {
      imgurl: 'assets/images/slide4.jpg',
    },
    {
      imgurl: 'assets/images/slide5.jpg',
    },
    {
      imgurl: 'assets/images/slide6.jpg',
    },
  ];

  products = [
    {
      id: 1,
      imgurl: 'assets/images/slide1.jpg',
      name: 'Multi color bag',
      category: 'bags',
      price: 50,
      totalStock: 10,
    },
    {
      id: 2,
      imgurl: 'assets/images/slide3.jpg',
      name: 'Daily use bag',
      category: 'bags',
      price: 100,
      totalStock: 10,
    },
    {
      id: 3,
      imgurl: 'assets/images/slide6.jpg',
      name: 'TV',
      category: 'electronics',
      price: 19999,
      totalStock: 0,
    },
    {
      id: 4,
      imgurl: 'assets/images/slide1.jpg',
      name: 'Vosto bag',
      category: 'bags',
      price: 200,
      totalStock: 10,
    },
    {
      id: 5,
      imgurl: 'assets/images/slide7.jpg',
      name: 'School bag',
      category: 'bags',
      price: 1000,
      totalStock: 1,
    },
    {
      id: 6,
      imgurl: 'assets/images/slide8.jpg',
      name: 'Casual shoe',
      category: 'shoes',
      price: 2000,
      totalStock: 7,
    },
    {
      id: 7,
      imgurl: 'assets/images/slide8.jpg',
      name: 'Sneakers',
      category: 'shoes',
      price: 5999,
      totalStock: 3,
    },
    {
      id: 8,
      imgurl: 'assets/images/slide4.jpg',
      name: 'Phone',
      category: 'electronics',
      price: 38999,
      totalStock: 5,
    },
    {
      id: 9,
      imgurl: 'assets/images/slide5.jpg',
      name: 'Laptop',
      category: 'electronics',
      price: 70000,
      totalStock: 2,
    },
  ];

  constructor(
  ) {}
}

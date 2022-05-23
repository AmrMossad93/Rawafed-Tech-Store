import {IProductRate} from "./product-rate";

export interface IProductList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IProductRate;
}

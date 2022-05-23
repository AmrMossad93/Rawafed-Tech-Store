import {IProductDetailRange} from "./product-detail-range";

export interface IProductDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:IProductDetailRange
}

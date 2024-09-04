import { Chart } from "./Chart";

export interface featuredProducts {
  stripeid: any;
  id: number;
  image: string;
  brand: string;
  description: string;
  rating: number;
  price: number;
  details: string;
  quantity: number;
  isFav: boolean;
  charts: Chart[];
}

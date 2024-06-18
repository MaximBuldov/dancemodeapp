export interface IProduct {
  id: number;
  name: string | NameOfClass;
  price: string;
  time: string;
  date_time: string;
  total?: string;
  is_canceled: boolean;
  total_sales: number;
  stock_status: IStockStatus;
  categories: ICategory[];
  cancel: number[];
  confirm: number[];
  stock_quantity: number;
  paid: number[];
  pending: number[];
  wait_list: number[];
  regular_price?: string;
}

export interface ICartProduct extends IProduct {
  day: string;
  month: string;
  total?: string;
}

export interface ICreateProduct {
  name: NameOfClass;
  time: number;
  price: string;
}

export interface IBatchProducts {
  create?: IProduct[];
  update?: IProduct[];
  delete?: number[];
}

export interface ICategory {
  id: number | Categories;
  name?: string;
  slug?: string;
}

export enum NameOfClass {
  BEGINNER = 'Beginner',
  ADV = 'Int/Adv',
  CUSTOM = 'Custom'
}

export enum Categories {
  BEGINNER = 16,
  ADV = 23,
  CUSTOM = 24
}

export enum IStockStatus {
  INSTOCK = 'instock',
  OUTOFSTOCK = 'outofstock',
  ONBACKORDER = 'onbackorder'
}

export const catOptions = [
  { label: NameOfClass.BEGINNER, value: Categories.BEGINNER },
  { label: NameOfClass.ADV, value: Categories.ADV },
  { label: NameOfClass.CUSTOM, value: Categories.CUSTOM }
];

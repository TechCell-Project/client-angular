import { Image, Paging, Timestamp } from '@models/common.model';
import { ProductStatus } from '@utils/list.utils';

export class Product extends Timestamp {
  _id: string = '';
  name: string = '';
  description: string = '';
  category: Category = new Category();
  status: ProductStatus = ProductStatus.Deleted;
  generalAttributes: Array<AttributeDynamic> = [];
  generalImages: Array<Image> = [];
  descriptionImages: Array<Image> = [];
  variations: Array<Variation> = [];
}

export class Attribute extends Timestamp {
  _id: string = '';
  label: string = '';
  name: string = '';
  description: string = '';
}

export class Category {
  _id: string = '';
  label: string = '';
  name: string = '';
  description: string = '';
  url: string = '';
  requireAttributes: Array<Attribute> = [];
}

export class Price {
  base: number = 0;
  sale: number = 0;
  special: number = 0;
}

export class Variation {
  sku: string = '';
  stock: number = 0;
  attributes: AttributeDynamic = new AttributeDynamic();
  price: Price = new Price();
  images: Array<Image> = [];
  status: ProductStatus = ProductStatus.Deleted;
}

export class AttributeDynamic {
  k: string = '';
  v: string = '';
  u?: string = '';
  name?: string = '';
}

export class PagingProduct extends Paging {
  detail: boolean | null = null;
  select_type: string | null = null;
  keyword: string | null = null;
}

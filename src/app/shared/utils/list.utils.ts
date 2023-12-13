export enum ProductStatus {
  ComingSoon = 1,
  NewArrival = 2,
  Pre_order = 3,
  OnSales = 4,
  Hide = 5,
  NotSales = 6,
  LowStock = 7,
  TemporarilyOutOfStock = 8,
  Deleted = -1,
}

export enum RootPath {
  Home = '/trang-chu',
  Login = '/dang-nhap',
  Register = '/dang-ky',
  Category = '/danh-muc-san-pham',
}

export enum FeatureKey {
  Auth = 'auth',
  Product = 'product',
  Order = 'order',
  Cart = 'cart',
  Notification = 'notification',
}

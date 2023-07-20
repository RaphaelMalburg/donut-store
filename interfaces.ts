export interface Product {
  title: string;
  description: string;
  price: number | string;
  additionalInfo?: string;
  image?: any;
  id?: number;
  value?: number | undefined;
  quantity?: number;
  subtotal?: number;
}

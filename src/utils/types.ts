export type Product = {
  Image_1: string;
  SKU: number;
  Name: string;
  Title: string;
  Description: string;
  Brand: string;
  "Cost Price": number;
  Quantity: number;
  size: string;
  "Bulk Weight": number;
  supplier: Suppliers;
};

export type Products = Product[];

export type Suppliers = "FragranceX" | "FragranceNet" | "Morris Costumes";

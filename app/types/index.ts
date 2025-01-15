export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  oldPrice: number;
  calories: string;
  weight: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  dateAlt: string;
  time: string;
  time2: string;
  subtitle: string;
}

export interface Filter {
  id: number;
  name: string;
}

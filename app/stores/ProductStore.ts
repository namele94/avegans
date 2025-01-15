import {makeAutoObservable} from 'mobx';
import {Filter, Product} from '../types';
import {filterData, products as mockProducts} from '../data/mockData';
import {makePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CartItem extends Product {
  quantity: number;
}

class ProductStore {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  activeFilter: Filter = filterData[0];
  cart: CartItem[] = [];
  error: string | null = null;
  selectedItem: {
    image: string;
    price: number;
    name: string;
    id: string;
    category: string;
  } = {category: '', id: '', image: '', name: '', price: 0};
  avatarUrl: string | undefined = '';
  name: string = '';
  birthDate: string = '';
  search: string = '';
  orderList: boolean[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'ProductStore',
      properties: ['name', 'avatarUrl', 'birthDate', 'orderList'],
      storage: AsyncStorage,
    });
  }

  loadProducts = () => {
    try {
      this.products = mockProducts;
      this.filteredProducts = mockProducts;
      this.applyFilter('Dinner');
    } catch (error: any) {}
  };

  setFilter = (filter: string) => {
    this.applyFilter(filter);
  };

  setSelectedItem = (item: Product) => {
    this.selectedItem = item;
  };

  private applyFilter = (filter: string) => {
    this.filteredProducts = mockProducts.filter(
      product => product.category.toLowerCase() === filter.toLowerCase(),
    );
  };

  handlePlus = (product: Product) => {
    const existingItem = this.cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cart = [...this.cart];
    } else {
      this.cart.push({...product, quantity: 1});
    }
  };

  handleMinus = (productId: string) => {
    const existingItem = this.cart.find(item => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        this.cart = [...this.cart];
      } else {
        this.removeFromCart(productId);
      }
    }
  };

  removeFromCart = (productId: string) => {
    this.cart = this.cart.filter(item => item.id !== productId);
  };

  setAvatarUrl = (url: string | undefined) => {
    this.avatarUrl = url;
  };

  setName = (name: string) => {
    this.name = name;
  };

  setBirthDate = (date: string) => {
    this.birthDate = date;
  };

  clearCart = () => {
    this.cart = [];
  };

  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  addOrderList = () => {
    if (this.orderList.length === 5) {
      this.orderList = [];
    }
    this.orderList.push(true);
  };

  getItemQuantity = (productId: string): number => {
    const item = this.cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  get totalItems() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  get cartDiscountAmount() {
    return this.cart.reduce((sum, item) => {
      const oldPrice = item.oldPrice || item.price;
      const discount = (oldPrice - item.price) * item.quantity;
      return sum + discount;
    }, 0);
  }
}

export default ProductStore;

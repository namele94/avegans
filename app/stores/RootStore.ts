import ProductStore from './ProductStore';

class RootStore {
  productStore: ProductStore;

  constructor() {
    this.productStore = new ProductStore();
  }
}

export default RootStore;

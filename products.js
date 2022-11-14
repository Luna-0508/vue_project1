export default class ProductService {
  getProductsSmall() {
    return fetch("products.json")
      .then(res => res.json())
      .then(d => d.data);
  }
}

export class ShoppingCart {
  private readonly product: Product[] = [];

  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.product.push(product);
    }
  }

  amountOfProduct(): number {
    return this.product.length;
  }

  totalAmount(): number {
    return this.product.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Camiseta', 49.9);
const product2 = new Product('Caneca', 1.9);
const product3 = new Product('Caneta', 0.9);

const shoppingCart = new ShoppingCart();
shoppingCart.insertProducts(product1, product2, product3);
console.log(shoppingCart.totalAmount());
console.log(shoppingCart.amountOfProduct());

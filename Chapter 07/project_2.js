class Menu{
  #priceOne
  #priceTwo
  constructor(quantityOne, quantityTwo){
    this.#priceOne = 5.99;
    this.#priceTwo = 6.99;
    this.quantityOne = quantityOne;
    this.quanityTwo = quantityTwo;
  }
  sum(){
    return (this.#priceOne * this.quantityOne) + (this.#priceTwo * this.quanityTwo);
  }
  get total(){
    return this.sum();
  }
}

const orderOne = new Menu(1,3);

console.log(orderOne.total)


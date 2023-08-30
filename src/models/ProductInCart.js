export default class ProductInCart {
    constructor(title, quantity, priceTotal, pricePerItem ) {
        // { title: 'Test Item', quantity: 3, total: 18, price: 6 }
        this.title = title
        this.quantity = quantity
        this.priceTotal = priceTotal
        this.pricePerItem = pricePerItem
    }
}

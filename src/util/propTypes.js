import { number, shape, string } from 'prop-types'

const product = shape({
    title: string,
    description: string,
    quantity: number,
    priceTotal: number,
    price: number,
})

export default {
    product,
}

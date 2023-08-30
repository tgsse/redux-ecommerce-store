import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useSelector} from "react-redux";

const Products = (props) => {

    const products = useSelector(state => state.products.items)

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map(p => (
                    <ProductItem
                        product={p}
                    />
                ))}

            </ul>
        </section>
    );
};

export default Products;

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Best Sellers</h2>
            <ul>
                {props.products.map(p => (
                    <ProductItem
                        key={p.title}
                        product={p}
                    />
                ))}

            </ul>
        </section>
    );
};

export default Products;

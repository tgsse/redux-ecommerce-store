import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {priceFormatter} from "../../util/util";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/slices/cartSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, pricePerItem, description } = props.product;

  const onAddToCart = () => {
    dispatch(cartActions.addToCart(props.product))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${priceFormatter.format(pricePerItem)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

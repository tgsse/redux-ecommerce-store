import classes from './CartItem.module.css';
import {priceFormatter} from "../../util/util";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/slices/cartSlice";

const CartItem = (props) => {
    const dispatch = useDispatch()

    const {title, quantity, priceTotal, pricePerItem} = props.product;

    const onAddProduct = () => {
        dispatch(cartActions.addToCart(props.product))
    }
    const onRemoveProduct = () => {
        dispatch(cartActions.removeFromCart(props.product))
    }

    return (
        <li className={classes.item} {...props}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${priceFormatter.format(priceTotal)}{' '}
                    <span className={classes.itemprice}>(${priceFormatter.format(pricePerItem)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={onRemoveProduct}>-</button>
                    <button onClick={onAddProduct}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;

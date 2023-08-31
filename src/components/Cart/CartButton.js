import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/slices/cartSlice";

const CartButton = (props) => {
    const dispatch = useDispatch()

    const itemCount = useSelector(state => state.cart.items.reduce((acc, current) => acc += current.priceTotal, 0))

    const onToggleCart = () => {
        dispatch(cartActions.toggle())
    }

    return (
        <button className={classes.button} onClick={onToggleCart}>
            <span>My Cart</span>
            <span className={classes.badge}>${itemCount}</span>
        </button>
    );
};

export default CartButton;

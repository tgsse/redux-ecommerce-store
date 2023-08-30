import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, priceTotal, pricePerItem } = props.product;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${priceTotal.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${pricePerItem.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

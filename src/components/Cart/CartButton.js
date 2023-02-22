import classes from './CartButton.module.css';

const CartButton = (props) => {  
  return (
    <button onClick={props.onShow} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

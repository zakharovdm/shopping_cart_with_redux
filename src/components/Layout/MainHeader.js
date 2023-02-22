import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const dispatch = useDispatch()
  
  const showCartHandler = () => {
    dispatch(cartActions.toogleCart());
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onShow={showCartHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

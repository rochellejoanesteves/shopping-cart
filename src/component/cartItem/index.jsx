import { useDispatch } from "react-redux";
import Button from "../button";
import { removeFromCart, addToCart } from "../../features/cart/cartSlice";
import "./cartItem.scss";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const removeItem = (product) => {
    dispatch(removeFromCart({ id: product.id }));
  };

  const addItem = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="cartContainer">
      <div className="cartItems">
        <div className="itemInfo">
          <img src={product[0].images[0]} alt={product[0].title} />
          <h2>{product[0].title}</h2>
        </div>

        <div className="itemCount">
          <Button text="-" onClick={() => removeItem(product[0])} />
          <p>{product.length}</p>
          <Button text="+" onClick={() => addItem(product[0])} />
        </div>

        <div className="itemPrice">
          <h2>${product[0].price}</h2>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

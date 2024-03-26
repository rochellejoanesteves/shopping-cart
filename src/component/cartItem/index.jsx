import Button from "../button";
import "./cartItem.scss";

function CartItem({ product }) {
  return (
    <div className="cartContainer">
      <div className="cartItems">
        <div className="itemInfo">
          <img src={product[0].images[0]} alt={product[0].title} />
          <h2>{product[0].title}</h2>
        </div>

        <div className="itemCount">
          <Button text="-" />
          <p>{product.length}</p>
          <Button text="+" />
        </div>

        <div className="itemPrice">
          <h2>${product[0].price}</h2>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

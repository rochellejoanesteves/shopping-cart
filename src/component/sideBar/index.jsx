import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../features/cart/cartSlice";
import Button from "../button";
import CartItem from "../cartItem";
import "./sideBar.scss";

function SideBar() {
  const dispatch = useDispatch();
  const products = useSelector(getCartData);
  const [groupItemInCart, setGroupItemInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const groupItem = products.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    const totalList = Object.entries(groupItem).map(
      ([key, item]) => item.length * item[0].price
    );

    if (totalList.length > 0) {
      const total = totalList.reduce((prev, current) => (prev += current));

      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
    setGroupItemInCart(groupItem);
  }, [products, dispatch]);

  return (
    <div className="sideContainer">
      {Object.entries(groupItemInCart).map(([key, item]) => (
        <CartItem key={key} product={item} />
      ))}
      {Object.entries(groupItemInCart).length > 0 ? (
        <div className="checkout">
          <div className="total">
            <h1>Total:</h1>
            <h1>${totalPrice}</h1>
          </div>
          <Button text="Proceed to Checkout" />
        </div>
      ) : null}
    </div>
  );
}

export default SideBar;

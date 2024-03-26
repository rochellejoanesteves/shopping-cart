import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCartData } from "../../features/cart/cartSlice";
import Button from "../button";
import CartItem from "../cartItem";
import "./sideBar.scss";

function SideBar() {
  const products = useSelector(getCartData);
  const [groupItemInCart, setGroupItemInCart] = useState([])


  useEffect(() => {
    const groupItem = products.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    // const totalList = Object.entries(groupItem).map(
    //   ([key, item]) => item.length * item[0].price
    // );

    // if (totalList.length > 0) {
    //   const total = totalList.reduce((prev, current) => (prev += current));

    //   setTotalPrice(total);
    // } else {
    //   setTotalPrice(0);
    // }
    setGroupItemInCart(groupItem);
  }, [products]);

  console.log(groupItemInCart)

  return <div className="sideContainer">
    {
       Object.entries(groupItemInCart).map(([key, item]) => (
           <CartItem key={key} product={item}/>
        ))
    }
    <Button text="Proceed to Checkout"/>
  </div>;
}

export default SideBar;

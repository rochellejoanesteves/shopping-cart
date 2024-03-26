import "./header.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { itemsCount } from "../../features/cart/cartSlice";

function Header() {
  const productCount = useSelector(itemsCount)

  return (
    <div className="header">
      <div>
        <h1>Online Shopping</h1>
      </div>
      <div>
        <FaShoppingCart className="icon"/>
        <span>{productCount}</span>
      </div>
    </div>
  );
}

export default Header;

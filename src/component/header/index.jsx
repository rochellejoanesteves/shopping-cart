import "./header.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { itemsCount } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const productCount = useSelector(itemsCount);
  const navigate = useNavigate()

  return (
    <div className="header">
      <div  onClick={() => navigate("/")}>
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

import "./header.scss";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div>
        <h1>Online Shopping</h1>
      </div>
      <div>
        <FaShoppingCart className="icon"/>
      </div>
    </div>
  );
}

export default Header;

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../component/button";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../features/cart/cartSlice";
import "./productItem.scss"

function ProductItem() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${params.id}`
  );

  const addProduct = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <div className="productContainer">
      {error && <h1>{error}</h1>}
      {!loading ? (
        <div className="productItem">
            <div className="images">
              <img src={data.images?.[0]} alt={data.title} />
              <div className="productImages">
                {data.images?.map((image, index) => (
                    <img key={index} src={image} alt={image} />
                ))}
              </div>
            </div>
          <div className="itemBody">
            <h1>{data.title}</h1>
            <h2>${data.price}</h2>
            <p>{data.description}</p>

            <div className="sizeButton">
                <h3>Sizes</h3>
                <Button text="S"/>
                <Button text="M"/>
                <Button text="L"/>
            </div>
                <Button text="Add to Cart" onClick={() => addProduct(data)}/>
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default ProductItem;

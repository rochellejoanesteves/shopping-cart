import "./cardItem.scss";

function CardItem({ item }) {
  return (
    <div className="cardContainer">
      <img src={item.images[0]} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h1>${item.price}</h1>
      </div>
    </div>
  );
}

export default CardItem;

function PricingItem(props) {
  return (
    <div
      className="price-item text-center"
      style={{ "--item-bg-color": props.backgroundColor }}
    >
      <span className="price-title">
        <h5>{props.title}</h5>
      </span>
      <div className="price-amount">
        {props.amount}
        <p>/month</p>
      </div>
      <div className="price-body">
        <ul className="all-items">
          <li>{props.item1}</li>
          <li>{props.item2}</li>
          <li>{props.item3}</li>
          <li>{props.item4}</li>
          <li>{props.item5}</li>
        </ul>
      </div>
      <button className="price-btn">BUY NOW</button>
    </div>
  );
}

export default PricingItem;

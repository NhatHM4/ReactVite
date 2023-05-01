const Dish = ({ dish }) => {
  return (
    <div>
      <img src={dish.img} className="menu-item img" />
      <span className="item-price">{dish.price}$</span>
      <h5 className="item-info">{dish.title}</h5>
      <span className="item-text">{dish.desc}</span>
    </div>
  );
};

export default Dish;

const Review = ({ obj }) => {
  return (
    <>
      <img className="img" src={obj.image} />
      <h3 className="form-label">{obj.name}</h3>
      <h3 className="form-label">{obj.job}</h3>
      <span>{obj.text}</span>
    </>
  );
};

export default Review;

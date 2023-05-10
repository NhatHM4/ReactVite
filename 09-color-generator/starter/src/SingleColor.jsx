const SingleColor = ({ color }) => {
  // console.log(color)
  const { hex, weight } = color;
  return (
    <article
      className="color"
      style={{ background: `#${hex}`, height: "100px", width: "100px" }}
    >
      <span>{`#${hex}`}<br/></span>
      <span>{`${weight}`}</span>
    </article>
  );
};

export default SingleColor;

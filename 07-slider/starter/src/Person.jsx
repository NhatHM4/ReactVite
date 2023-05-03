const Person = ({ person }) => {
  return (
    <div className="slick-container">
      <img className="person-img" src={person.image} />
      <h4 className="name">{person.name}</h4>
      <h5 className="title">{person.title}</h5>
      <span className="text">{person.quote}</span>
    </div>
  );
};
export default Person
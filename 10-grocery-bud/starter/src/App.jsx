import { useState,useEffect } from "react";
import Item from "./Item";

const App = () => {
  const [listItem, setListItem] = useState([]);
  const [name ,setName] = useState("")
  const handleChange = (e) => {
    setName(e.target.value)
  };

  useEffect(() => {
    const storedState =localStorage.getItem('listItem');
    if (storedState) {
      setListItem(JSON.parse((storedState)));
    }
  }, []);
  const handleAddItem = ()=>{
    const item = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: name,
      flag: false,
    };
    
    setListItem([...listItem,item])
    localStorage.setItem('listItem', JSON.stringify([...listItem,item]));
    setName("")
  }
  const handleDelete = (id)=>{
    const cloneList = listItem.filter(item => item.id!=id)
    setListItem(cloneList)
    localStorage.setItem('listItem', JSON.stringify([...cloneList]));
    
  }
  return (
    <main className="form">
      <h3>Grocery Bud</h3>
      <input
        type="text"
        className="form-input"
        value={name}
        onChange={(e) => handleChange(e)}
      ></input>
      <button className="btn" onClick={()=>{handleAddItem()}}>
        Add Item
      </button>

      <div className="items">
        {listItem.length !== 0 &&
          listItem.map((item) => {
            return <Item item={item} key={item.id} handleDelete={handleDelete}/>;
          })}
      </div>
    </main>
  );
};

export default App;

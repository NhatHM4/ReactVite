import { useState } from "react";
import menu from "./data";
import Dish from "./Dish";
const App = () => {
  const [menus, setMenus] = useState(menu);
  const handleCategory = (category) =>{
    if (category==='all'){
      setMenus(menu)
    } else {
      const menuClone = menu.filter((item)=>{
        return item.category === category
      })
      setMenus(menuClone)
    }
    
  }

  return (
    <>
      <h1 className="title">OUR MENU</h1>
      <div className="form">
      <button className="btn" onClick={()=>{handleCategory('all')}}>All</button>
        <button className="btn" onClick={()=>{handleCategory('breakfast')}}>breakfast</button>
        <button className="btn" onClick={()=>{handleCategory('lunch')}}>lunch</button>
        <button className="btn" onClick={()=>{handleCategory('shakes')}}>shakes</button>
      </div>
      <div className="section-center">
        {menus.length !== 0 &&
          menus.map((dish) => {
            return <Dish dish={dish} key={dish.id}/>;
          })}
      </div>
    </>
  );
};
export default App;

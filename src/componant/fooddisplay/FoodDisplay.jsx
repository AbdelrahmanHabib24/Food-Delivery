/* eslint-disable react/prop-types */
import "./foodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../statecontext/statecontext";
import FootList from "../foodlist/FootList";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list" id="food-display-list">
        {food_list
          .filter((data) => category === "All" || category === data.category)
          .map((data) => (
            <FootList
              key={data._id}
              id={data._id}
              name={data.name}
              description={data.description}
              price={data.price}
              image={data.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

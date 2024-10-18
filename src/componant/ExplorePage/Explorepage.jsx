/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import "./Explorepage.css";
import { menu_list } from "../../assets/assets";

const ExplorePage = ({category, setCategory}) => {
  return (
    <div className="explore-Menu" id="explore-Menu">
      <h1>Explore Our menu</h1>
      <p className="explore-Menu-text">
        choose from diverse menus featuring adelectable Array of dished crafted
        with the finest ingredients and culinary expertise. Our Mission is to
        satisfy your cravings and elevate your dining experience.
      </p>
      <div className="explore-Menu-list">
        {menu_list.map((data, index) => {
          return (
            <div
            onClick={() => {  
                setCategory(prev =>   
                    prev === data.menu_name ? "All" : data.menu_name  
                );  
            }}
              key={index}
              className="explore-Menu-list-item"
            >
              <img
                className={category === data.menu_name ? "Active" : ""}
                src={data.menu_image}
                alt={data.menu_name}
              />
              <p>{data.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorePage;

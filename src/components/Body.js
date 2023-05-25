import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurants) =>
    restaurants.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      {
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              //  Need to filter the data.
              const data = filterData(searchText, restaurants);
              // Update the  state - restaurants
              setRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
      }

      <div className="restraunt-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

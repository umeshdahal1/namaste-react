import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurants) =>
    restaurants?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  console.log("render")

  // Not Render Component (Early Return)
  if(!allRestaurants) return null;
  if(filteredRestaurants?.length===0) return <h1>No Restaurants Match your Filter!!!</h1>

  return (allRestaurants.length === 0) ? <Shimmer/> : (
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
              const data = filterData(searchText, allRestaurants);
              // Update the  state - restaurants
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      }

      <div className="restraunt-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

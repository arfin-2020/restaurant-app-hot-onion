import { useEffect, useState } from "react";
import "../../App.css";
import UseFetch from "../Hooks/UseFetch";
import FoodItem from "./FoodItem";
import Skeleton from "./Skeleton";
const Foods = () => {
  const [menuTab, setMenuTab] = useState("Breakfast");
  const [loading, setLoading] = useState(false);
  const [foods] = UseFetch([]);
  console.log(foods);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleMenuTabs = type => {
    setMenuTab(type);
  };
  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex items-center justify-center space-x-6">
        <p
          className={
            menuTab === "Breakfast"
              ? "cursor-pointer bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full  transform transition duration-300 hover:scale-105 "
              : "cursor-pointer"
          } 
         
          onClick={() => handleMenuTabs("Breakfast")}
        >
          Breakfast
        </p>
        <p
          className={
            menuTab === "Lunch"
              ? "bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full  transform transition duration-300 hover:scale-105 cursor-pointer"
              : "cursor-pointer "
          } 
          onClick={() => handleMenuTabs("Lunch")}
        >
          Lunch
        </p>
        <p
          className={
            menuTab === "Dinner"
              ? "bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105 cursor-pointer"
              : "cursor-pointer"
          } 
          onClick={() => handleMenuTabs("Dinner")}
        >
          Dinner
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {foods
          .filter(item => menuTab === item.type)
          .map(item =>
            loading ? (
              <Skeleton key={item.id} />
            ) : (
              <FoodItem key={item.id} {...item} />
            )
          )}
      </div>
    </section>
  );
};

export default Foods;

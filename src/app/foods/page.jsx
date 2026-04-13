import FoodPage from "@/components/FoodPage";
import React from "react";

const foodsPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  console.log(foods);

  return (
    <div className="grid grid-cols-3 gap-5 ">
      {foods.map((food) => (
        <div key={food.id}>
          <FoodPage food={food}></FoodPage>
        </div>
      ))}
    </div>
  );
};

export default foodsPage;

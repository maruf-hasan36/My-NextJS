import Image from "next/image";
import React from "react";

const foodDetailsPage = async ({ params }) => {
  const { foodId } = await params;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const foodItems = data.data;
  const { category, dish_name, image_link, origin_and_popularity } = foodItems;

  return (
    <div className="w-3xs border border-amber-400 rounded-3xl p-3 m-3 text-accent justify-evenly space-y-3.5">
      <Image
        src={image_link}
        alt={dish_name}
        height={200}
        width={200}
        quality={100}
      ></Image>
      <h1>Food Name : {dish_name}</h1>
      <h2>Category: {category}</h2>
      <h2>{origin_and_popularity}</h2>
    </div>
  );
};

export default foodDetailsPage;

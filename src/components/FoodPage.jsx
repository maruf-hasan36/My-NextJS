import Image from "next/image";
import React from "react";

const FoodPage = ({ food }) => {
  const { dish_name, image_link, category, rating, price } = food;
  return (
    <div className="w-100  bg-gray-500 shadow-sm rounded-2xl">
      <figure>
        <Image
          className="mx-auto"
          src={image_link}
          alt={dish_name}
          width={200}
          height={200}
          quality={100}
        ></Image>
      </figure>
      <div className=" card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">{rating}</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;

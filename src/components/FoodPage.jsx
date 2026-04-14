import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodPage = ({ food }) => {
  const { id, dish_name, image_link, category, rating, price } = food;
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
        <h2>{category}</h2>
        <div className="card-actions justify-end">
          <Link href={`foods/${id}`}>
            <button className="btn btn-primary">Show details</button>
          </Link>
          <button className="btn btn-ghost">{price}</button>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;

import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const Card = ({ title, descriptions, image }) => (
  <div className="max-w-sm w-full h-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="/#">
      <GatsbyImage
        className="rounded-t-lg w-full h-48 object-cover"
        image={image}
        alt={title}
      />
    </a>
    <div className="p-5">
      <a href="/#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {descriptions}
      </p>
    </div>
  </div>
);

export default Card;

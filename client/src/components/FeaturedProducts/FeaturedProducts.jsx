import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt gráfica de manga cumprida",
      isNew: true,
      oldPrice: 99.99,
      price: 49.99,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Casaco",
      isNew: true,
      oldPrice: 129.99,
      price: 89.99,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Saia",
      isNew: true,
      oldPrice: 149.99,
      price: 99.99,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrob&w=1600",
      title: "Chapéu",
      isNew: true,
      oldPrice: 79.99,
      price: 29.99,
    },
  ];

  return (
    <div>
      <div className="featuredProducts">
        <div className="top">
          <h1>{type} products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            blandit hendrerit tellus, ut dictum libero sodales et. Sed tortor
            orci, blandit non arcu vel, pulvinar tincidunt turpis. Pellentesque
            in faucibus enim, non viverra metus. Praesent augue dolor, sagittis
            vitae orci eget, faucibus placerat nunc. Mauris gravida.
          </p>
        </div>
        <div className="bottom">
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

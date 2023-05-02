import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div>
      <div className="featuredProducts">
        <div className="top">
          <h1>{type} em destaque</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            blandit hendrerit tellus, ut dictum libero sodales et. Sed tortor
            orci, blandit non arcu vel, pulvinar tincidunt turpis. Pellentesque
            in faucibus enim, non viverra metus. Praesent augue dolor, sagittis
            vitae orci eget, faucibus placerat nunc. Mauris gravida.
          </p>
        </div>
        <div className="bottom">
          {loading
            ? "loading"
            : data.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

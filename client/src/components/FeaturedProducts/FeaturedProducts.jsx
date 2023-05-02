import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

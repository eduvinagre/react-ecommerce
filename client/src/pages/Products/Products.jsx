import React from "react";
import "./Products.scss";

const Products = () => {
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categorias</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">1</label>
          </div>
        </div>
        <div className="filterItem"></div>
        <h2>Filtrar por preço</h2>
        <div className="filterItem">
          <h2>Classificar</h2>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Products;

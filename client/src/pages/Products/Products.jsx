import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categorias</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Blusas</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="1">Camisetas</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="1">Casacos</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="1">Calças</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value={5} />
            <label htmlFor="1">Saias</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value={6} />
            <label htmlFor="1">Acessórios</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="7" value={7} />
            <label htmlFor="1">Calçados</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filtrar por preço</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
          <div className="filterItem">
            <h2>Ordenar</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="preço"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Menor Preço</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="preço"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Maior Preço</label>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="homem sentado num banco de frente para o mar"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;

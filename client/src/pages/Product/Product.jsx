import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Título</h1>
        <span className="price">R$ 199.00</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad
          expedita nulla optio tenetur rerum rem consectetur dolore. Voluptas
          consectetur veniam dicta quisquam delectus labore minima molestias,
          alias reprehenderit assumenda!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADICIONAR AO CARRINHO
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            LISTA DE DESEJOS
          </div>
          <div className="item">
            <BalanceIcon />
            COMPARAR
          </div>
        </div>
        <div className="info">
          <span>Vendedor: Polo</span>
          <span>Tipo de Produto: T-Shirt</span>
          <span>Tag: T-Shirt, Feminino, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIÇÃO</span>
          <hr />
          <span>INFORMAÇÃO ADICIONAL</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

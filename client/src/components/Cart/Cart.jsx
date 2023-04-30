import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt gráfica de manga comprida",
      desc: "Blusa de manga comprida",
      isNew: true,
      oldPrice: 99.99,
      price: 49.99,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Casaco",
      desc: "Casco em material sintético",
      isNew: true,
      oldPrice: 129.99,
      price: 89.99,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Saia",
      desc: "Saia colorida",
      isNew: false,
      oldPrice: 149.99,
      price: 99.99,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrob&w=1600",
      title: "Chapéu",
      desc: "Chapéu sertanejo",
      isNew: false,
      oldPrice: 79.99,
      price: 29.99,
    },
  ];

  return (
    <div className="cart">
      <h1>Produtos no carrinho</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>R$ 123.45</span>
      </div>
      <button>PROSSEGUIR PARA CHECKOUT</button>
      <span className="reset">Limpar Carrinho</span>
    </div>
  );
};

export default Cart;

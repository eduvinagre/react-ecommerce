import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categorias</h1>
          <span>Feminino</span>
          <span>Masculino</span>
          <span>Calçados</span>
          <span>Acessórios</span>
          <span>Novidades</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Páginas</span>
          <span>Lojas</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Sobre</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida
            arcu vel bibendum pulvinar. Quisque vel felis in enim vehicula
            tristique. Aenean tempus augue imperdiet dapibus posuere. Nulla ac
            eros a nulla fringilla volutpat.
          </span>
        </div>
        <div className="item">
          <h1>Contato</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida
            arcu vel bibendum pulvinar. Quisque vel felis in enim vehicula
            tristique. Aenean tempus augue imperdiet dapibus posuere. Nulla ac
            eros a nulla fringilla volutpat.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">YAYARTSTORE</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img
            src="/img/cartoes.png"
            alt="cartoes aceitos, american express, visa e mastercard"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

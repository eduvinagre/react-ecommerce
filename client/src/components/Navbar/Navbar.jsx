import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/pt.png" alt="icone bandeira do brasil" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>BRL</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Feminino</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Masculino</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Infantil</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">YayArtStore</Link>
        </div>
        <div className="right">
          <div className="center">
            <Link to="/">Início</Link>
          </div>
          <div className="center">
            <Link to="/">Sobre</Link>
          </div>
          <div className="center">
            <Link to="/">Contato</Link>
          </div>
          <div className="center">
            <Link to="/">Lojas</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

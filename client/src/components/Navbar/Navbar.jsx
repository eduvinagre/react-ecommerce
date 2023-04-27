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
            <Link>Women</Link>
          </div>
        </div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;

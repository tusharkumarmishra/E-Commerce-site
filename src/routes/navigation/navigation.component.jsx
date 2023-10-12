import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h2 className="logo">BigBox-Shop</h2>
          </Link>
          <Link className="navLinks" to="allProds">
            Products
          </Link>
          <Link className="navLinks" to="addProd">
            Add Product
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <img
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png"
              alt=""
            />
            <p className="name">Tushar</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;

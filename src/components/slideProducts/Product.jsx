import React, { useContext } from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaShare, FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

function Product({ item }) {
  const navigate = useNavigate();

  const {
    cartItems,
    addToCart,
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === item.id);

  const handelAddToCat = () => {
    addToCart(item);

    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          Added To Cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };

  // Favorites

  const isInFav = favorites.some((i) => i.id === item.id);

  const handelAddToFav = () => {
    if (isInFav) {
      removeFromFavorites(item.id);
      toast.error(`${item.title} Removed From favorites`);
    } else {
      addToFavorites(item);
      toast.success(`${item.title} added To favorites`);
    }
  };

  return (
    <div className={`product ${isInCart ? "in_cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="status_cart">
          <FaCheck /> In Cart
        </span>

        <div className="img_product">
          <img src={item.images[0]} />
        </div>
        <p className="name_produtc">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfStroke />
        </div>

        <p className="price">
          <span>${item.price}</span>
        </p>
      </Link>

      <div className="icons">
        <span className="btn_addtocart" onClick={handelAddToCat}>
          <FaCartArrowDown />
        </span>
        <span className={`${isInFav ? "in_fav" : ""}`} onClick={handelAddToFav}>
          {" "}
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;

import React, { useContext } from "react";
import { FaRegHeart, FaShare, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  const { cartItems, addToCart , favorites , addToFavorites ,removeFromFavorites} = useContext(CartContext);
    const isInCart = cartItems.some((i) => i.id === product.id);

  const navigate = useNavigate();
  const handelAddToCat = () => {
    addToCart(product);

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
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

  const isInFav = favorites.some((i) => i.id === product.id);

  const handelAddToFav = () => {
    if (isInFav) {
      removeFromFavorites(product.id);
      toast.error(`${product.title} Removed From favorites`);
    } else {
      addToFavorites(product);
      toast.success(`${product.title} added To favorites`);
    }
  };
  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
      </div>
      <p className="price">${product.price}</p>
      <h5>
        Availability <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only {product.stock} Products Left In Stock</span>{" "}
      </h5>
      <button onClick={handelAddToCat} className={`btn ${isInCart ? "in_cart" : ''}`}>
       {isInCart ? " Item In Cart" : " Add To Card"} <TiShoppingCart />
      </button>
      <div className="icons">
        <span className={`${isInFav ? "in_fav" : ""}`} onClick={handelAddToFav}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;

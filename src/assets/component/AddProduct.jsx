import ring from "../images/telephone.png";
import mbox from "../images/messagebox.png";
import socials1 from "../images/instagram.png";
import socials2 from "../images/youtube.png";
import socials3 from "../images/facebook.png";
import socials4 from "../images/twitter.png";
import cartimage from "../images/twitter.png";
import searchicon from "../images/search.png";
import hearticon from "../images/heart.png";
import profileicon from "../images/profile.png";
import arrowt from "../images/icon arrrowt.png";
import face from "../images/fa.png"
import twi from "../images/tw.png"
import instag from "../images/ins.png"
import { useGetPostsQuery } from "../../app/productsApi";

import './AddProduct.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from './slice';


function AddProduct() {
  const cartItems = useSelector((state) => state.todo.cartItems);
  const dispatch = useDispatch();




  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartItemQuantity({ id, quantity }));
    }
  };

  
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * 20, 0); 
  };

  const { data, error, isLoading } = useGetPostsQuery();

  return (
    <div className="desktop-shop-header-3">
      <nav className="nav-bar3">
        <div className="contact-info-3">
          <p>
            <img src={ring} alt="telephone" />
            (225) 555-0118
          </p>
        </div>
        <div className="email-info-3">
          <p>
            <img src={mbox} alt="messagebox" />
            michelle.rivera@example.com
          </p>
        </div>
        <div className="follow-us-3">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="social-media-3">
          <p>
            follow us
            <ul>
              <img src={socials1} alt="instagram" />
              <img src={socials2} alt="youtube" />
              <img src={socials3} alt="facebook" />
              <img src={socials4} alt="twitter" />
            </ul>
          </p>
        </div>
      </nav>

      <div className="section-2">
        <div className="desktop-shop-cards-44">
          <div className="desktop-shop-h34">
            <h3>Bandage</h3>
          </div>
          <div className="desktop-shop-list-3">
            <li>
              <a href="£">Home</a>
            </li>
            <li>
              <a href="£">Shop</a>
            </li>
            <li>
              <a href="£">About</a>
            </li>
            <li>
              <a href="£">Blog</a>
            </li>
            <li>
              <a href="£">Contact</a>
            </li>
            <li>
              <a href="£">Pages</a>
            </li>
          </div>
          <div className="login-3">
            <p>
              <img src={profileicon} alt="profile" />
              <a href="£">Login/ </a>
              <a href="£">Register</a>
            </p>
            <span className="login-icon-3">
              <img src={searchicon} alt="search" />
              <img src={cartimage} alt="cart" />
              <img src={hearticon} alt="heart" />
            </span>
          </div>
        </div>
      </div>

      <div className="Section-3">
        <div className="home-container">
          <h5 className="h4">
            <a href="">Home</a> <img src={arrowt} alt="arrow" />
          </h5>
          <h5 className="h4">
            <a href="">Shop</a> <img src={arrowt} alt="arrow" />
          </h5>
          <h5 className="h7">
            <a href="">Shopping Cart</a><img alt="" />
          </h5>
        </div>

        <div className="cart-container">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="item-details">
                      <img src={item.image} alt={item.text} className="cart-item-image" />
                      <span className="item-title">{item.text}</span>
                      <span className="item-quantity">
                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                          -
                        </button>
                        {item.quantity}
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </span>
                      <button className="remove-item" onClick={() => handleRemoveFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Total Items: {cartItems.length}</p>
                <p>Total Price: ${calculateTotalPrice()}</p>
                <button className="checkout-button">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>

        <div className="BESTSELLER-PRODUCTS-MAIN">
          <div className="BESTSELLER-PRODUCT-2">
            <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading products</p>}
            {data && (
              <div className="product-products-grid-2">
                {data.products.slice(0, 8).map((product) => (
                  <div key={product.id} className="product-product-item-2">
                    <img
                      className="product-section-images-2"
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <h5>{product.title}</h5>
                    <p id="product-product-category-2">{product.category}</p>
                    <div id="product-product-amount">
                      <p id="product-product-price-2">${product.price}</p>
                      <p id="product-discount-2">{product.discountPercentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
 

        <div className="bange-container-2">
          <div className="bange-row-2">
            <h3>Badage</h3>
          </div>

          <div className="bange-icons-2">
            <img src={face} />
            <img src={instag} />
            <img src={twi} />
          </div>
        </div>

       
        <div className="desktop-footer-8">
          <div className="desktop-footer-sub1">
            <h5>Company Info</h5>
            <p>
              <a href="£">About Us</a>
            </p>
            <p>
              <a href="£">Carrier</a>
            </p>
            <p>
              <a href="£">We are hiring</a>
            </p>
            <p>
              <a href="£">Blog</a>
            </p>
          </div>

          <div className="desktop-footer-sub2">
            <h5>Legal</h5>
            <p>
              <a href="£">About Us</a>
            </p>
            <p>
              <a href="£">Carrier</a>
            </p>
            <p>
              <a href="£">We are hiring</a>
            </p>
            <p>
              <a href="£">Blog</a>
            </p>
          </div>
          <div className="desktop-footer-sub3">
            <h5>Features</h5>
            <p>
              <a href="£">Business Marketing</a>
            </p>
            <p>
              <a href="£">User Analytic</a>
            </p>
            <p>
              <a href="£">Live Chat</a>
            </p>
            <p>
              <a href="£">Unlimited Support</a>
            </p>
          </div>

          <div className="desktop-footer-sub4">
            <h5>Resources</h5>
            <p>
              <a href="£">IOS & Android</a>
            </p>
            <p>
              <a href="£">Watch a Demo</a>
            </p>
            <p>
              <a href="£">Customers</a>
            </p>
            <p>
              <a href="£">API</a>
            </p>
          </div>

          <div className="desktop-footer-subfive">
            <h5>Get In Touch</h5>
            <form>
              <input
              type="email"
              placeholder="your Email"
              className="email-btn"/>
              <button>Subscribe</button>
            </form>
            <p>
              <a href="£">Lore imp sum dolor Amit</a>
              </p>
          </div>
        </div>





      </div>
    </div>
  );
}

export default AddProduct;



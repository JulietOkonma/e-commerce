import call from "../images/telephone.png";
import emailcard from "../images/messagebox.png";
import "./item.css";
import instagrames from "../images/instagram.png";
import youtubess from "../images/youtube.png";
import facebookes from "../images/facebook.png";
import twitterss from "../images/twitter.png";
import profiless from "../images/profile.png";
import cartss from "../images/cart.png";
import searchss from "../images/search.png";
import heartss from "../images/heart.png";
import chairpic from "../images/chairpicture.png";
import fa1 from "../images/fa-brands-1.png";
import fa2 from "../images/fa-brands-2.png";
import fa3 from "../images/fa-brands-3.png";
import fa4 from "../images/fa-brands-4.png";
import fa5 from "../images/fa-brands-5.png";
import fa6 from "../images/fa-brands-6.png";
import fa from "../images/fa.png";
import tw from "../images/tw.png";
import ins from "../images/ins.png";
import starss from "../images/icn bx-star1.png"
import star from "../images/icn bxs-star.png"
import eclipse1 from "../images/Ellipse 14.png"
import eclipse2 from "../images/Ellipse 15.png"
import eclipse3 from "../images/Ellipse 16.png"
import eclipse4 from "../images/Ellipse 17.png"
import { selectCartDetails } from "../../app/selector";

import { Link } from "react-router-dom";


import { useState, useEffect } from "react";
import { useGetPostsQuery } from "../../app/productsApi";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./slice";
function Item() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPostsQuery();
  const [product, setProduct] = useState(null);
  const detailsRef = useRef();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  


  useEffect(() => {
    console.log("ID:", id);
    console.log("Data:", data);

    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [detailsRef.current]);

  useEffect(() => {
    if (data) {
      const product = data.products.find((item) => item.id == id);
      setProduct(product);
    }
  }, [data]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, text: product.title, image: product.images[0] }));
   navigate('/AddProduct');
  };


  return (
    <div className="desktop-shop-header-2">
      <nav className="nav-bar2">
        <div className="contact-info-2">
          <p>
            <img src={call} />
            (225) 555-0118
          </p>
        </div>

        <div className="email-info-2">
          <p>
            <img src={emailcard} />
            michelle.rivera@example.com
          </p>
        </div>

        <div className="follow-us-2">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>

        <div className="social-media-2">
          <p>
            follow us
            <ul>
              <img src={instagrames} />
              <img src={youtubess} />
              <img src={facebookes} />
              <img src={twitterss} />
            </ul>
          </p>
        </div>
      </nav>

      <div className="section">
        <div className="desktop-shop-cards-22">
          <div className="desktop-shop-h33">
            <h3>Bandage</h3>
          </div>
          <div className="desktop-shop-list-2">
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

          <div className="login-2">
            <p>
              <img src={profiless} />
              <a href="£">Login/ </a>
              <a href="£">Register</a>
            </p>

            <span className="login-icon-2">
              {" "}
              <img src={searchss} />
              
              <img src={cartss} />
              
            
              <img src={heartss} />
            </span>
          </div>
        </div>

        {product && (
          <div ref={detailsRef}>
            <li className="product-item">
              <div className="product-div">
              <div className="section-image-div">
              <img
                className="section-image-1"
                src={product.images[0]}
                alt={product.title}
              />
              </div>
              <div className="section-other-div">
              <h5>{product.title}</h5>
              <p className="star-img"><img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={starss}/> 10 Reviews
               </p>
              <div id="product-amount">
                <p id="product-price">
                  ${product.price}
                  <span className="discount-percent">
                    {product.discountPercentage}%
                  </span>
                </p>
                <p className="available">Availability Stock: <span className="in-stock">In Stock</span></p>
                <div className="ellipse">
                  <img src={eclipse1}/>
                  <img src={eclipse2}/>
                  <img src={eclipse3}/>
                  <img src={eclipse4}/>
                </div>
                <div>
                  <p>Select Options</p>
                  
                </div>
              </div>
              </div>
              </div>
              <div className="handle-button">
            <button onClick={
              () => handleAddToCart(product)
            }>Add to Cart</button></div>

            </li>
          </div>
        )}

        <div className="desktop-product-description">
          <div className="desktop-product-description-flex">
            <p><a href="£">Description</a></p>
            <p><a href="$">Additional Information</a></p>
            <p><a href="$">Reviews (0)</a></p>
          </div>

          <div className="desktop-product-description-row">
            <div className="desktop-description-text">
              <h3>the quick fox jumps over </h3>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="desktop-description-image">
              <img src={chairpic} />
            </div>
          </div>
        </div>

        <div className="BESTSELLER-PRODUCTS">
          <div className="BESTSELLER-PRODUCT-1">
            <h3>BESTSELLER PRODUCTS</h3>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading products</p>}
            {data && (
              <div className="product-products-grid">
                {data.products.slice(0, 8).map((product) => (
                  <div key={product.id} className="product-product-item">
                    <img
                      className="product-section-images"
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <h5>{product.title}</h5>
                    <p id="product-product-category">{product.category}</p>
                    <div id="product-product-amount">
                      <p id="product-product-price">${product.price}</p>
                      <p id="product-discount">{product.discountPercentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="desktop-footer-6">
          <img src={fa1} />
          <img src={fa2} />
          <img src={fa3} />
          <img src={fa4} />
          <img src={fa5} />
          <img src={fa6} />
        </div>

        <div className="bange-container">
          <div className="bange-row">
            <h3>Badage</h3>
          </div>

          <div className="bange-icons">
            <img src={fa} />
            <img src={ins} />
            <img src={tw} />
          </div>
        </div>

        <div className="desktop-footer-7">
          <div className="desktop-footer-div1">
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

          <div className="desktop-footer-div2">
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
          <div className="desktop-footer-div3">
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

          <div className="desktop-footer-div4">
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

          <div className="desktop-footer-div5">
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
export default Item;

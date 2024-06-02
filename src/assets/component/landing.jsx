import React,{useState} from "react";
import {useDispatch} from "react-redux"
import { addCounter } from "./slice";


import "./landing.css";
import telephone from "../images/telephone.png";
import messagebox from "../images/messagebox.png";
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png";
import profile from "../images/profile.png";
import search from "../images/search.png";
import cart from "../images/cart.png";
import heart from "../images/heart.png"
import colpictures from "../images/col-md-3.png"
import colpictures1 from "../images/col-md-4.png"
import carditems from "../images/card-item.png"
import carditems2 from "../images/card-item-2.png"
import books from "../images/books.png"
import arrow from "../images/arrow.png"
import carbonbooks from "../images/carbon_book.png"
import designer from "../images/designer.png"
import icn1 from "../images/icn bx-star1.png"
import icn2 from "../images/icn bxs-star.png"
import picture1 from "../images/picture1.png"
import picture2 from "../images/picture2.png"
import picture3 from "../images/picture3.png"
import picture4 from "../images/picture4.png"
import picturefive from "../images/picturefive.png"
import picturesix from "../images/picturesix.png"
import picture7 from "../images/picture7.png"
import picture8 from "../images/picture8.png"
import picture9 from "../images/picture9.png"
import background from "../images/background.png"
import { NavLink } from "react-router-dom";


import { useGetPostsQuery } from "../../app/productsApi";

function Landing() {
    const { data, error, isLoading} = 
    useGetPostsQuery();
    const [input,setInput] =useState(' ')
    const dispatch =useDispatch()
    const [visibleProducts,setVisibleProducts] = useState(10)

    const additemHandler = (e) =>{
        e.preventDefault();
        

        dispatchEvent(addCounter(input))
        setInput('')
    }

    const handleViewMore = () => {
        setVisibleProducts((prev) => prev + 10)
    };
    
    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error:
{error.message}
    </div>

    


  return (
    <div className="desktop-shop-header">
      <nav className="nav-bar1">
        <div className="contact-info">
          <p>
            <img src={telephone} />
            (225) 555-0118
          </p>
        </div>

        <div className="email-info">
          <p>
            <img src={messagebox} />
            michelle.rivera@example.com
          </p>
        </div>

    

        <div className="follow-us">
          <p>
            Follow Us and get a chance to win 80% off</p>
        </div>

        <div className="social-media">
        <p>
            follow us
            <ul>
            <img src={instagram}/>
            <img src={youtube}/>
            <img src={facebook}/>
            <img src={twitter}/>
            </ul>
        </p>
      </div>
      </nav>

            <main>
        <div className="desktop-shop-cards-2">
            <div className="desktop-shop-h3"><h3>Bandage</h3></div>
            <div className="desktop-shop-list">
                <li><a href="£">Home</a></li>
                <li><a href="£">Shop</a></li>
                <li><a href="£">About</a></li>
                <li><a href="£">Blog</a></li>
                <li><a href="£">Contact</a></li>
                <li><a href="£">Pages</a></li>
            </div>

            <div className="login">
                <p><img src={profile}/>
                    <a href="£">Login/ </a> 
                    <a href="£">Register</a></p>

                   <span className="login-icon"> <img src={search}/>
                    <img src={cart}/>
                    <img src={heart}/></span>

            </div>
        </div>

        
      
        <div className="desktop-container">
            <div className="col-md-3">
                <img src={colpictures}/>
            </div>
            <div className="col-md-4">
                <div className="card-item-1">
                        <img src={colpictures1}/>
                </div>
                <div className="card-item-sub">
                    <div className="card-item-2">
                        <img src={carditems}/>
                    </div>
                    <div className="card-item-3">
                        <img src={carditems2}/>
                    </div>
                </div>
            </div>

        </div>
        </main>


            
        <div className="container-2">

          <div className="container-2-row">
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between </p>
          </div>
            
            <div className="container-2-column">
            <ul className="product-grid">
          {data &&
            data.products &&
            data.products.slice(0, visibleProducts).map((product) => (
              <NavLink to={`/item/${product.id}`}>
                <li key={product.id} className="product-item">
                <img
                  className="section-images"
                  src={product.images[0]}
                  alt={product.title}
                />
                <h5>{product.title}</h5>
                <p className="product-category">  </p>
                <div id="product-amount">
                  <p id="product-price">${product.price}<span className="discount-percent">{product.discountPercentage}%</span></p>
                  
                </div>
              </li>
              </NavLink>
            ))}
        </ul>
        
        {/* 
            item = 1 => /item/product.id
            item =2 
        */}

        {data && data.products && visibleProducts < data.products.length && (
          <button className="view-more-btn" onClick={handleViewMore}>
            LOAD MORE PRODUCTS
          </button>
     
     )}
     </div>
 
     </div>



     <div className="container-3">

     <div className="container-2-row"style={{ marginTop: '250px' }}>
    
            <h4>Featured Products</h4>
            <h3>THE BEST SERVICES</h3>
            <p>Problems trying to resolve the conflict between </p>
      </div>

     <div className="container-3-col">
            <div>
              <img src={books}/>
              <h3>Easy Wins</h3>
              <p>Get your best looking smile now!</p>
            </div>

            <div>
              <img src={arrow}/>
              <h3>Concrete</h3>
              <p>Defalcate is most focused in<br/> helping you discover your most<br/> beautiful smile</p>
            </div>

            <div>
              <img src={carbonbooks}/>
              <h3>Hack Growth</h3>
              <p>Overcame any hurdle or any<br/> other problem.</p>
            </div>
     </div>


     </div>

     <div className="testimonial">

      <div className="testimonial-row">

          <h3>What they say about us</h3>
          <img src={designer}/>
          <p>
            <img src={icn2}/>
            <img src={icn2}/>
            <img src={icn2}/>
            <img src={icn2}/>
            <img src={icn1}/>
            </p>

          <p className="text1">Slate helps you see how many more days you need to work to <br/>
reach your financial goal.</p>
          <p className="testimonial-Name ">
          Regina Miles
          </p>
      <p className="testimonial-job">Designer</p>
      
        </div>
        <div className="testimonial-column">
        <img src={picture1}/>
        <img src={picture2}/>
        <img src={picture3}/>
        <img src={picture4}/>
        <img src={picturefive}/>
        <img src={picturesix}/>
        <img src={picture7}/>
        <img src={picture8}/>
         <img src={picture9}/>

        </div>
      

     </div>

     

     <div className="cta">
            <div className="cta-row">
      <h6>Designing Better Experience</h6>
      <h2>Problems trying to resolve<br/> 
the conflict between </h2>
     <p>Problems trying to resolve the conflict<br/> between the two major realms of Classical physics: </p>
     <h5>$16.48</h5>
     <button>ADD YOUR CALL TO ACTION</button>
     </div>

     </div>



</div>
    


  ); 
}
export default Landing;

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

function Landing() {
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
            <img src={instagram}/>
            <img src={youtube}/>
            <img src={facebook}/>
            <img src={twitter}/>
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


            <div>
                
            </div>
    </div>



  );
}
export default Landing;

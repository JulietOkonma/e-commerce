import call from "../images/telephone.png"
import emailcard from "../images/messagebox.png"
import "./item.css" 
import instagrames from "../images/instagram.png"
import youtubess from "../images/youtube.png"
import facebookes from "../images/facebook.png"
import twitterss from "../images/twitter.png"
import profiless from "../images/profile.png"
import cartss from "../images/cart.png"
import searchss from "../images/search.png"
import heartss from "../images/heart.png"
function Item(){
    return(
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
          <p>
            Follow Us and get a chance to win 80% off</p>
        </div>

        <div className="social-media-2">
        <p>
            follow us
            <ul>
            <img src={instagrames}/>
            <img src={youtubess}/>
            <img src={facebookes}/>
            <img src={twitterss}/>
            </ul>
        </p>
      </div>
      </nav>


       <div>
       <div className="desktop-shop-cards-22">
            <div className="desktop-shop-h33"><h3>Bandage</h3></div>
            <div className="desktop-shop-list-2">
                <li><a href="£">Home</a></li>
                <li><a href="£">Shop</a></li>
                <li><a href="£">About</a></li>
                <li><a href="£">Blog</a></li>
                <li><a href="£">Contact</a></li>
                <li><a href="£">Pages</a></li>
            </div>

            <div className="login-2">
                <p><img src={profiless}/>
                    <a href="£">Login/ </a> 
                    <a href="£">Register</a></p>

                   <span className="login-icon-2"> <img src={searchss}/>
                    <img src={cartss}/>
                    <img src={heartss}/></span>

            </div>
        </div>

        



        </div> 

        </div>

    )
        
    
}
export default Item;
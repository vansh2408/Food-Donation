import { Outlet } from "react-router-dom";
import coverImage from "../assets/coverimage.jpeg";
import Header from "./Header";
import './RootLayout.css'

const RootLayout = () => {
    return (
        <main>
            
            <Header/>

            <section>
              <Outlet/>
            </section>

            <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About us</span>The basic concept of this project  Food Waste Management is to collect the excess/leftover  food from donors such as hotels, restaurants, marriage halls , etc and distribute to  the  needy people .
     </p>
        
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <p><span> Contact</span> </p>
            
          </div>
          <div>
        
            <p> (+91) 8307611216</p>
            
          </div>
          <div>
            <p><a href="#"> Fooddonate@gmail.com</a></p>
          </div>
          
          <div className="sociallist">
            <ul className="social flex gap-1">
            <li><a href="https://www.facebook.com/"><img src="https://i.ibb.co/x7P24fL/facebook.png"></img></a></li>
            <li><a href="https://twitter.com/"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></img></a></li>
            <li><a href="https://www.instagram.com/"><img src="https://i.ibb.co/ySwtH4B/instagram.png"></img></a></li>
            {/* <li><a href="https://web.whatsapp.com/"><i className="fa fa-whatsapp"></i></a></li> */}
           </ul>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2> Food<span> Donate</span></h2>
          <p className="menu flex gap-1">
            <a href="#"> Home</a> |
            <a href="about.html"> About</a> |
            <a href="profile.php"> Profile</a> |
            <a href="contact.html"> Contact</a>
          </p>
          <p className="name"> Food Donate © 2023</p>
        </div>
      </footer>

        </main>
    );
};

export default RootLayout;

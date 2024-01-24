import React from "react";
import './footer.css';

const Footer=()=>{
    return (
        <div className="footer">
           <div classNmae="Sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                    <h4>For Buisness</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/employer">
                        <p>Collaborate</p>
                    </a>
                    <a href="/employer">
                        <p>Indivisual</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Explore</h4>
                    <a href="/resource">
                        <p>Healthy</p>
                    </a>
                    <a href="/resource">
                        <p>Fast Food</p>
                    </a>
                    <a href="/resource">
                        <p>Desserts</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Cusines</h4>
                    <a href="/employer">
                        <p>Chineese</p>
                    </a>
                    <a href="/employer">
                        <p>Thai</p>
                    </a>
                    <a href="/employer">
                        <p>Mexican</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="socialmedia">
                    <p></p>
                </div>
            </div>
           </div>
           <hr></hr>
           <div className="sb_footer-below">
        
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} CodeInn. All right reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
                <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                <a href="/account"><div><p>Create Account</p></div></a>
                <a href="/security"><div><p>Give Feedback</p></div></a>
                <a href="/cookie"><div><p>Cookie Decleration</p></div></a>
            </div>
           </div>
        </div>
    )
}
export default Footer;
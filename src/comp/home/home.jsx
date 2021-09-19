import React,{useState, useEffect} from 'react'
import '../home/home.css'
import Logo from '../img/logo.gif'
import {Link} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Bg from '../img/road.jpg'

import Flip from 'react-reveal/Flip';

import {CopyToClipboard} from 'react-copy-to-clipboard'
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css';
import ScrollAnimation from 'react-animate-on-scroll'

const Home=()=> 
{
    const [inputval,setinputval]=useState("https://themeforest.net/")
    
    useEffect(() => {
        return () => {
            Aos.init();
        }
    }, [])

    return (
        <div>
            <div className="backh">
            <br />
	<h3 align="center">
            <img className="logo" src={Logo} alt="logo here"/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<font face="cinzel" size="4">
            <Link to ="/">
			    <a className="li" href="#">HOME</a>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to ="/aboutus">
			    <a className="li" href="#">About Us</a>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/livechat">
			    <a className="li" href="#">Live Chat </a>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;

            <Link to ="/contactus">
			    <a className="li" href="#">CONTACT US</a>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;
		</font>
	</h3>
	<br /><br /><br /><br /><br />
	<h1 align="center">
		<font face="Lato" color="gold" size="7">
        <a href="#" class="animated">Forest Deaprtment</a>
		</font>
	</h1>
    <br/>
	<h3 align="center">
		<font face="arial" color="white" size="4">
        Register Yourself Now
		</font>
	</h3>
	<br />
	<h3 align="center">
	<button className="btn">
		<font face="Lato" color="white">Sign In</font>
	</button>&nbsp;&nbsp;&nbsp;&nbsp;
	<button className="btn">
		<font face="Lato" color="#fff">Sign Up</font>
	</button>
	</h3>
        </div>
{/* ///////////// */}

<div class="container">
	{/* <!-- code here --> */}
	<div class="text-box">
		<h1 className="dec_text">OUR BLOGS</h1>
		<h1 className="dec_text">OUR BLOGS</h1>
	</div>
		<p className="p">Our Other Website<span>:)</span></p>
        <input value="themeforest"/>
        <CopyToClipboard text={inputval}>
            <button>Copy to clip board</button>
        </CopyToClipboard>
</div>


<div className="loaded">

<div class="container">
    <div class="row">

        <div class="col-md-4 Services-tab item">
            <div class="folded-corner service_tab_1">
                <div class="text"> <i class="fa fa-image fa-5x fa-icon-image"></i>
                    <p class="item-title">
                        <h3> Plan</h3>
                    </p>
                    <p> This is an amazing set of animated accordions based completely on CSS. They come oriented both vertically and horizontally in order to fit properly in your project. In order to see the slides, </p>
                </div>
            </div>
        </div>
        <div class="col-md-4 Services-tab item">
            <div class="folded-corner service_tab_1">
                <div class="text"> <i class="fa fa-lightbulb fa-5x fa-icon-image"></i>
                    <p class="item-title">
                        <h3> Design</h3>
                    </p>
                    <p> This is an amazing set of animated accordions based completely on CSS. They come oriented both vertically and horizontally in order to fit properly in your project. In order to see the slides, </p>
                </div>
            </div>
        </div>
        
    </div>
    <div class="row">
        <div class="col-md-4 Services-tab item">
            <div class="folded-corner service_tab_1">
                <div class="text"> <i class="fa fa-image fa-5x fa-icon-image"></i>
                    <p class="item-title">
                        <h3> Plan</h3>
                    </p>
                    <p> This is an amazing set of animated accordions based completely on CSS. They come oriented both vertically and horizontally in order to fit properly in your project. In order to see the slides, </p>
                </div>
            </div>
        </div>
        <div class="col-md-4 Services-tab item">
            <div class="folded-corner service_tab_1">
                <div class="text"> <i class="fa fa-lightbulb fa-5x fa-icon-image"></i>
                    <p class="item-title">
                        <h3> Design</h3>
                    </p>
                    <p> This is an amazing set of animated accordions based completely on CSS. They come oriented both vertically and horizontally in order to fit properly in your project. In order to see the slides, </p>
                </div>
            </div>
        </div>
     </div>
</div>																				                            


</div>



<footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visibl', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                    <button class="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                    <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                    <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="#" className="fab fa-facebook"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                    <a href="#" className="fab fa-pinterest"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i className="icon_heart"></i> in <a href="#">CakeCounter</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}
export default Home;

import React from 'react'
import '../about/about.css'
import Logo from '../img/logo.gif'
import {Link} from 'react-router-dom'
import Maps from '../map'
import Flip from 'react-reveal/Flip';
import Loc from '../loc/loc'

export default function about() {
    return (
        <div>
            <div className="back">
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
            <Link to ="/livechat">
			    <a className="li" href="#">Live Chat </a>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to ="/contactus">
			    <a className="li" href="#">CONTACT US</a>
            </Link>
		</font>
	</h3>
	<br /><br /><br /><br /><br />
	<h1 align="center">
		<font face="Lato" color="gold" size="7">
        <a href="#" class="animated">About Us</a>
		</font>
	</h1>
    <br/>
	<h3 align="center">
		<font face="arial" color="white" size="4">
			All thing You may know

		</font>
	</h3>
            
     </div>

     <br />
        <div className="aboutpara">
            <p>Now We offer a competitive salary and value the hard work of our employees. As a family-owned and managed company, we believe our employees should be generously rewarded for their dedication to providing quality care. That is why we offer the following benefits and rewards. Competitive salary and value the hard work of our employees. As a family-owned and managed company, we believe our employees should be generously rewarded for their dedication to providing quality care. That is why we offer the following benefits and rewards. </p>
           <br/> <p>At Forest Care, we are proud to create positive working environments in each of our care homes by encouraging employee participation and humour in the workplace, this is reflected by our many long-serving employees.
            At Forest Care, we are proud to create positive working environments in each of our care homes by encouraging employee participation and humour in the workplace, this is reflected by our many long-serving employees.
            At Forest Care, we are proud to create positive working environments in each of our care homes by encouraging employee participation and humour in the workplace, this is reflected by our many long-serving employees.
            <br/><br/>se are proud to create positive working environments in each of our care homes by encouraging employee participation and humour in the workplace, this is reflected by our many long-serving employees.
            Forest Care, we are proud to create positive working environments in each of our care homes by encouraging employee participation and humour in the workplace, this is reflected by our many long-serving employees.
            At Forest Care, we are proud to create positive working environments in each of our care homes by encouraging employee participation and humour in the workplace, this is reflected by our many long-serving employees.

            </p>
        
        </div>
        <Loc/>
        <br /><br /><br /><br />
        <h1 style={{textAlign:"center"}}>Google Map</h1>



        
        <br/>
        <Maps/>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />

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
</div>

    </div>
    )
}

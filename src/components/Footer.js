import React from "react";
import {Link} from 'react-router-dom';

function Footer(){

    const handleClick = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100); 
      };

    return(
        <div className="footer mb-0">
            <div className="container ">
                <div className="row d-flex row-register-footer justify-content-center">
                    <Link className="btn-register justify-self-center col-auto"
                     to="/support" onClick={handleClick}>ማህበሩ ይደግፉ</Link>
    
                </div>
                <div className="row footer-content">
                    <div className="col-4 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link onClick={handleClick} to="/">Home</Link></li>
                            <li><Link onClick={handleClick} to="/about">About us</Link></li>
                            <li><Link onClick={handleClick} to="/contactus">Contact us</Link></li>
                            <li><Link onClick={handleClick} to="/support">Support us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>አድራሻችን</h5>
                        <address>
                            አንጦጦ ቅዱስ ራጉኤል ወ ኤልያስ ቤተክርስትያን<br/>
                            ወደ ፍተሻ  በሚወስደው መንገድ ትንሽ ዝቅ ብሎ<br />
                            አዲስ አበባ፣ ኢትዮጲያ<br/><br/>
                            <i className="fa fa-phone fa-lg"></i>: +251 911 00 49 03<br />
                            <i className="fa fa-phone fa-lg"></i>: +251 953 90 50 50<br />
                            <i className="fa fa-envelope fa-lg"></i>: 
                                <a  href="mailto:abyssiniacomputer19@gmail.com">selihomc@gmail.com</a> 
                        </address>
                    </div>
                    <div className="col-12 col-sm-4">
                        <h5>የማህበሩ አካውንት </h5>
                        <div>
                            <p>የኢትዮጲያ ንግድ ባንክ:- 1000275107518</p>
                            <p>አቢሲንያ ባንክ:- 77984852</p>
                            <p>አዋሽ ባንክ:- 01303572131300</p>
                        </div>
                        <div className="text-center">
                            <i className="btn btn-social-icon btn-facebook m-1"><a /*href=""*/ className="fa fa-facebook fa-lg"></a></i>
                            <i className="btn btn-social-icon btn-twitter m-1"><a /*href=""*/ className="fa fa-twitter fa-lg"></a></i>
                            <i className="btn btn-social-icon btn-linkedin m-1"><a /*href=""*/ className="fa fa-linkedin fa-lg"></a></i>
                            <i className="btn btn-social-icon btn-google m-1"><a /*href=""*/ className="fa fa-youtube fa-lg"></a></i>
                            <i className="btn btn-social-icon"><a href="mailto:selihomc@gmail.com" className="fa fa-envelope fa-lg"></a></i>
                        </div>
                    </div>
                </div>
                <div className="row copy-right justify-content-center">
                    <div className="col-auto">
                        <p style={{fontSize: 'large'}}>© Copyright 2023 Selihom Mentally ill People Support Association</p>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Footer;
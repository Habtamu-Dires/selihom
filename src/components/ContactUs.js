import React from "react";
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';


//map
const AnyReactComponent = ({ text }) => <div> {text}</div>;

function SimpleMap(){
    const defaultProps = {
      center: {
        lat: 9.08733,
        lng: 38.74475
      },
      zoom: 12
    };
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={9.08733}
            lng={38.74475}
            text="ሰሊሆም "
          />
        </GoogleMapReact>
      </div>
    );
  }


function ContactUs(){
        return(
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link className="nav_link" to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>ያግኙን</h3>
                    <hr />
                </div>
            </div>
            <div className="row" style={{borderBottom: "1px ridge"}}>
                <div className="col-12">
                <h3>የምንገኝበት አድራሻ</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>አድራሻችን</h5>
                        <address>
                        አንጦጦ ቅዱስ ራጉኤል ወ ኤልያስ ቤተክርስትያን<br/>
                        ወደ ፍተሻ  በሚወስደው መንገድ ትንሽ ዝቅ ብሎ<br />
                        አዲስ አበባ፣ ኢትዮጲያ<br/><br/>
                        <i className="fa fa-phone fa-lg"></i>: +251 911 00 49 03<br />
                        <i className="fa fa-phone fa-lg"></i>: +251 953 90 50 50<br />
                        <i className="fa fa-envelope"></i>: 
                        <a href="mailto:abyssiniacomputer19@gmail.com">selihomc@gmail.com</a>
                        </address>
                        <div className="mt-5">
                            <p>"ደግ ልቦች ከውብ ፈቶች ይብልጣሉ"</p>
                        </div>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>ኑ! ማህበሩን ጎብኙልን: መገኛችን </h5>
                    <div className='container' >
                        <SimpleMap />
                    </div>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1 mb-5">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+251911004903"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:selihomc@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default ContactUs;
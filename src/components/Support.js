import React from "react";
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function Support(){
    return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link className="nav_link" to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>SupportUs</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h4>"ደግ ልቦች ከውብ ፈቶች ይብልጣሉ"</h4>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                   <div className="col-12 col-md-8">
                        <div className="me-md-5">
                            <p className="home-comp-title">የገቢ ማሰባሰቢያ መንገዶች</p>        
                            <p>
                            ማህበሩ የራሱ የሆነ ቋሚ ቦታም የለውም በኪራይቤት ነው ያለው 
                            ማህበሩ የራሱ መተዳደሪ የለውም የሚተዳደረውም የማህበሩ በጎ ፈቃደኞች ጫማዎችን በመጥረግ መኪና በማጠብ በተለያዩ ክብረ በአላት ቆዳ በማሰባሰብ ገቢ ለማግኘት እየሰራ ያለ ማህበር ነው በተጨማሪም ወደ ማእከሉ የሚመጡ በጎ ፈቃደኞች በሚያደርጉት የገንዘብ የማቴርያል ድጋፍ እየተንቀሳቀሰ ያለ ማህበር ነው፡፡
                            </p> 
                        </div>
                    </div>
                    <div className="col-12 col-md-4 home-box">
                    <p className="home-comp-title">የማህበሩ አካውንት</p>
                        <div className="">
                            <p>የኢትዮጲያ ንግድ:- ባንክ 1000275107518</p>
                            <p>አቢሲንያ ባንክ:- 77984852</p>
                            <p>አዋሽ ባንክ:- 01303572131300</p>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <p className="home-comp-title">ማብበሩን በማቴርያል ድጋፍ ማድረግ ለሚፈልጉ</p>
                        <div className="row">
                            <div className="col-4">
                                <p>በምግብ ግብአት አቅርቦት</p>
                                <p>- ጤፍ </p>
                                <p>- በርበሬ  </p>
                                <p>- ዘይት </p>
                                <p>- መኮረኒ </p>
                                <p>- ፓስታ </p>
                                <p>- ሩዝ </p>
                                <p>- የልጆች ምግብ </p>
                                <p>- ወተቶች </p>
                                <p>- ሽሮ </p>
                                <p>- ምግቡንም አብስሎ አዘጋጅቶ በማምጣት እናም የተለያዩ የምግብ ግብአቶችን በማምጣት </p>
                            </div>
                            <div className="col-4">
                                <p>በህክምና </p>
                                <p>- መድሀኒቶች </p>
                                <p>- የህክምና ቁሳቁሶች </p>
                                <p>- ማስክ </p>
                                <p>- ዊልቸር </p>
                                <p>- ስትሬቸር </p>
                            </div>
                            <div className="col-4">
                                <p>የንጽህና መጠበቂያ </p>
                                <p>- ዳይፐር </p>
                                <p>- ዋይፕስ </p>
                                <p>- ሞዴስ </p>
                                <p>- ኦሞ </p>
                                <p>- ሳሙና </p>
                                <p>- ቫዝሊን </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="home-comp-title">በተጨማሪም ማህበሩን</p>
                        <p>- በእውቀታችሁ </p>
                        <p>- በጉልበራችሁ </p>
                        <p>- በሙያችሁ ድጋፍ ብታደርጉልን</p>
                    </div>  
                </div>
            </div>
    );
}

export default Support;
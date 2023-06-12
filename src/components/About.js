import React from "react";
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(){
    return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link className="nav_link" to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>ሰሊሆም የአዕምሮ ህሙማን መርጃ ማህብር</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                   <div className="col-12 col-md-8">
                        <div className="me-md-5">
                            <h2 className="homp-comp-title">የማህበሩ አነሳስ</h2>        
                            <p>
                                የማህበሩ አመሰራረት የማህበሩ መስራች ወጣት ሚኪያስ ለገሠ ወላጅ አባቱ በአዕምሮ ህመም ምክንያትያት የኖርበት ከነበረበት ቤት አካባቢ ጠፍቶ ጎዳና ላይ ወድቆ ከብዙ እንግልት ድካም በኃላም ቢያገኙትም በዚሁ ህመም የተነሳ በኤሌትሪክ አደጋ ህይወቱን አጣ ይህን አይቶ ያደገው አቶ ሚኪያስ ለገሠ ወላጅ አባቱን ያሳጣውን ህመም ለመታገል ለሌሎች ለመድረስ በማሰብ ተነሳስቶ በአቅራቢያው ካሉ ጓደኞቹን በማስተባበር በሽንቁሩ ቅዱስ ሚካኤል ቤተክርስትያን ቤት በመከራየት አንድ ጎዳና ላይ የወደቀ የአዕምሮ ህመምተኛ በማንሳት ስራውን ጀመረ ከዛም በርካታ ሰዎችን በማንዳት በመርዳት ሌሎች ሰዎችን በማስተባበር በየቤቱ እየዞሩ ሽሮ በርበሬዎችን ጤፍ በመሰብሰብ ጫማዎችን በመጥረግ መኪና በማጠብ በሚገኝ ገቢ ከጎዳና የተነሱትን ሰዎች ማገዝ መንከባከብ ጀመረ ለ 3 አመት ያህል በዚያ ከቆዩ በኋላ ቦታው ከከተማም ራቅ ያለ በመሆኑም ለህክምና ክትትል ለማድረግም በጣም አዳጋች በመሆኑ እናም ቤቶቹም ጠባብ በመሆናቸው የተነሳ በርካታ ሰዎች ለመድረስ ስላልተቻለ ካለበት ቦታ በመቀየር በ እንጦጦ ቅዱስ እራጉኤል ቤተክርስትያን አካባቢ 2000 ካሬ ቦታ በመከራየት ለበርካታ ሰዎች ድጋፍ ማድረግ ለውጥ ማምጣት የቻለ ማህበር ነው ማህበሩ ከተመሰረተ ጀምሮ በርካታ በዚህ ህመም የተነሳ ታመው ያሉ ህሙማንን በሚደረግላቸው ድጋፍ እንክብካቤ ህክምና ለውጥ ሲያመጡ የተሻለ የጤና ሁኔታ ላይ ሲደርሱ ቤተሰቦቻቸውን በማፈላለግ የማገናኘት ስራዎችን ሰርቷል በማእከሉ ከተመሰረተ ጀምሮ በርካታ ሰዎች ወደ ማእከሉ ገብተው ድጋፍ እንክብካቤ እያደረገ የተሸላቸውንም ሰዎች የተለያዩ ስልጠናዎች በመስጠት ወደማህመረሰቡ እንዲቀለቀሉ ተደርጓል ከተሸላቸው ሰዎች ውስጥም በማእከሉ ስራ እድል ተመቻችቶላቸው እዛው እየሰሩ የሚገኙም አሉ አሁን ላይ በማእከሉ ውስጥ 200 ሰዎች ይገኛሉ ከነዛም ውስጥ 85 ፐርሰንት የሚሆኑት የተረጋጉ የተሸለ ጠጤና ሁኔታ ላይ ይገኛሉ ፡፡
                            </p> 
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={"img/photo0.jpg"} alt="img" height={"80%"} width="100%"></img>
                    </div>
                    <div className="col-12 row">
                    <p className="home-comp-title">በማህበሩ ያሉ የአባላት ቁጥር እና የአዕምሮ ህሙማን በፐርሰንት</p>
                    <div className="col-md-3 col-12 home-box">
                        <p className="home-comp-subtitle">በማህበሩ ያሉ የአጋር እና የክብር አባላት ቁጥር</p>
                        <div className="home-list-p">
                            <p>1. በማህበሩ ያሉ አባላት ቁጥር 50</p>
                            <p>2. በማህበሩ ያሉ የክብር አባላት ቁጥር 25</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 home-box">
                        <p className="home-comp-subtitle">ማእከሉ ያሉ ወጣት የአዕምሮ ህሙማን በፐርሰንት 80%</p>
                        <div className="home-list-p">
                            <p>1. በማእከሉ ካሉ ወጣት የአዕምሮ ህሙማን ወንዶች 50%</p>
                            <p>2. በማእከሉ ካሉ ወጣት የአዕምሮ ህሙማን ወንዶች 30%</p>
                        </div>                        
                    </div>
                    <div className="col-md-3 home-box">
                        <p className="home-comp-subtitle">በማእከሉ ውስጥ ያሉ አዛውንቶች በፐርሰንት 20%</p>
                        <div className="home-list-p">
                            <p>1. በማእከሉ ያሉ ወንድ አዛውንቶች በፐርሰንት 9%</p>
                            <p>2. በማእከሉ ያሉ ሴት አዛውንቶች በፐርሰንት 11 %</p>
                        </div>                        
                    </div>
                    <div className="col-md-3 col-12 home-box">
                        <p className="home-comp-subtitle">በማእከሉ ውስጥ ያሉ የአዕምሮ ህመም ያለባቸው  ህጻናት በፐርሰንት 7%</p>
                        <div className="home-list-p">
                            <p>1. በማእከሉ ውስጥ ያሉ የአዕምሮ ህመም ያለባቸው  ወንድ ህጻናት በፐርሰንት 3 %</p>
                            <p>2. በማእከሉ ውስጥ ያሉ የአዕምሮ ህመም ያለባቸው  ሴት  ህጻናት በፐርሰንት 4 %</p>
                        </div>                        
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-12 img-build-container">
                        <div className="img-building">
                            <div>
                                <img className="img-build-column" src="img/photo4.jpg"/>
                            </div>
                            <div>
                                <img className="img-build-column" src="img/photo6.jpg"/>
                            </div>
                            <div>
                                <img className="img-build-column" src="img/photo5.jpg"/>
                            </div>
                            <div>
                                <img className="img-build-column" src="img/photo1.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default About;
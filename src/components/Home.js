import React, { useState } from "react";
import Carousal from "./Carousel";
import {
    Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,
  } from 'reactstrap';
import { CAROUSEL_ITEM } from "../data/carousel_items";
import { Image_List } from "../data/ImageList";


function Home(){
   
    const images = Image_List;
    const ImageList = images.map(image =>{
        return(
            <div key={image.id}>
                <img className="img-column" src={image.image} />
            </div>
        )
    });

    return(
        <>
        <div className="d-flex justify-content-center">
            <Carousal />
        </div>
        <div className="d-flex justify-content-center my-5">
           <div className="home-components row">
                <div className="col-md-8 col-12">
                    <div className="me-md-5">
                        <p className="home-comp-title">ሰሊሆም የአዕምሮ ህሙማን መርጃ ማህበር የሚሰራቸው ስራዎች</p>
                        <p>
                        በየጎዳና የወደቁ የአዕምሮ ህሙማን ወገኖቻችንን ከጎዳና በማንሳት መጀመሪያ ገላቸው በማጠብ ልብሳቸውን በመቀየር ህክምና ካትትል እንዲያደርጉ በማድረግ ምግባቸውን መኝታቸውን በማመቻቸት ተገቢውን ድጋፍ ፍቅር በመሰጠት ጤናቸውን ወሰተሸለ ደረጃ እንዲደርስ ማስቻል በክትትሉም ለውጥ ያመጡ የዳኑ ሰዎችን የተለያዩ ስልጠና እንዲያገኙ በማድረግ ወደ ማህበረሰቡ እንዲቀላቀሉ መገዝ ህይወታቸው የተሻለ የተሰካ እንዲሆን እገዛ ድጋፍ ማድረግ፡፡ 
                        ጧሪ ቀባሪ የሌላቸው አዛውንቶችን የሀገር ባለውለታዎችን ከወደቁበት በማንሳት ቀሪ ዘመናቸውን በተረጋጋ ሁኔታ ያለ ስጋት ይኖሩ ዘንድ ህክምና ክትትላቸውን እያደረጉ እንክብካቤ ፍቅርን በመስጠት ቀሪ ዘመናቸውን በነጻነት እንዲኖሩ ባስቻል፡፡
                        የአዕምሮ ህመም የገጠማቸውን ቤተሰብ ተንከባካቢ የሌላቸውን ህጻናት በመቀበል እንክብካቤ ፍቅር በመስጠት የህክምና ክትትል እንዲያደርጉ በማድረግ የተሸለ የጤና ሁኔታ ላይ እንዲደርሱ ማስቻል፡፡
                        </p>
                        <p className="home-comp-title">ማህብሩ  ያከናወናቸው ዋና ዋና ተግባራት</p>
                        <p>በየጎዳና የወደቁ የአዕምሮ ህሙማን ወገኖቻችንን ከጎዳና በማንሳት መጀመሪያ ገላቸው በማጠብ ልብሳቸውን በመቀየር ህክምና ካትትል እንዲያደርጉ በማድረግ ምግባቸውን መኝታቸውን በማመቻቸት ተገቢውን ድጋፍ ፍቅር በመሰጠት ጤናቸውን ወሰተሸለ ደረጃ እንዲደርስ ማስቻል በክትትሉም ለውጥ ያመጡ የዳኑ ሰዎችን የተለያዩ ስልጠና እንዲያገኙ በማድረግ ወደ ማህበረሰቡ እንዲቀላቀሉ መገዝ ህይወታቸው የተሻለ የተሰካ እንዲሆን እገዛ ድጋፍ ማድረግ፡፡ 
                        ጧሪ ቀባሪ የሌላቸው አዛውንቶችን</p>
                    </div>
                </div>
                <div className="col-md-4 col-12 home-box">
                    <p className="home-comp-title">ህሙማኑን ለመርዳት፥</p>
                    <div className="home-box-text">
                        <p>-ኑ! ማህበሩን ጎብኙልን</p>
                        <p>-ኑ! ለህሙማን ፍቅር እና እንክብካቢ እንስጣቸው</p>
                        <p>-ኑ! ልብሳቸውን እና ገላቸውን እንጠብ</p>
                        <p>-ኑ! ፍቅር በመስጠት ከገበት የጢና መጉደል እንታደጋቸው  </p>
                        <p>-ኑ! ከህሙማን ጋር በመመገብ ለነሱ ያለንን ወገናዊ ፍቅር እንግለፅላቸው</p>
                    </div>
                    <p className="home-comp-title">የማህበሩ አካውንት</p>
                    <div className="">
                        <p>የኢትዮጲያ ንግድ ባንክ:- 1000275107518</p>
                        <p>አቢሲንያ ባንክ:- 77984852</p>
                        <p>አዋሽ ባንክ:- 01303572131300</p>
                    </div>
                </div>
                <div className="col-12 image-container">
                    <div className="img-list">
                        {ImageList}
                    </div>
                </div>
                <div className="mt-5 col-md-8 col-12">
                    <div className="me-md-5">
                        <p className="home-comp-title">የማህበሩ መቋቋም ጠቀሜታዎች </p>
                        <p>- ህሙማን በተረጋጋ ቦታ እንዲቆዩ ይረዳል</p>
                        <p>- ህክምናውን በሰዓት እዲያገኙ ይረዳል</p>
                        <p>- ስልጠና የሚያገኙበትን ሁኔታ ምቹ ያረገዋል...</p>

                        <p className="home-comp-title">የገቢ ማሰባሰቢያ መንገዶች</p>
                        <p>ማህበሩ የራሱ የሆነ ቋሚ ቦታም የለውም በኪራይቤት ነው ያለው 
                            ማህበሩ የራሱ መተዳደሪ የለውም የሚተዳደረውም የማህበሩ በጎ ፈቃደኞች ጫማዎችን በመጥረግ መኪና በማጠብ በተለያዩ ክብረ በአላት ቆዳ በማሰባሰብ ገቢ ለማግኘት እየሰራ ያለ ማህበር ነው በተጨማሪም ወደ ማእከሉ የሚመጡ በጎ ፈቃደኞች በሚያደርጉት የገንዘብ የማቴርያል ድጋፍ እየተንቀሳቀሰ ያለ ማህበር ነው፡፡
                        </p>
                    </div>
                </div>
                <div className="mt-5 col-md-4 col-12 home-box">
                    <p className="home-comp-title">ማብበሩን በማቴርያል ድጋፍ ማድረግ ለሚፈልጉ </p>
                    <div className="home-box-text">
                        <p>- በምግብ ግብአት አቅርቦት</p>
                        <p>- በህክምና ቁሳቁሶች እና መድሀኒቶች አቅርቦት</p>
                        <p>- በንጽህና መጠበቂያ አቅርቦት</p>
                        <p>- በተለያዩ አልባሳት  </p>
                        <p>በተጨማሪም ማህበሩን </p>
                        <div className="offset-1">
                            <p>- በእውቀታችሁ </p>
                            <p>- በጉልበራችሁ   </p>
                            <p>- በሙያችሁ ድጋፍ ብታደርጉልን::</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 col-12 row">
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
                <div className="col-12 row">
                    <p className="home-comp-title">ሊሰራ የታሰበው ህንፃ ዴዛይን</p>
                    <div className="col-12 img-build-container">
                        <div className="img-building">
                            <div>
                                <img className="img-build-column" src="img/building1.jpg"/>
                            </div>
                            <div>
                                <img className="img-build-column" src="img/building2.jpg"/>
                            </div>
                            <div>
                                <img className="img-build-column" src="img/building3.jpg"/>
                            </div>
                            <div>
                                <img className="img-build-column" src="img/building4.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>                
           </div>
        </div>
        </>
    );
}

export default Home;
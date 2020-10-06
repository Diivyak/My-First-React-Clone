import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123"
            title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SX522_.jpg"
            rating={5}
          />
          <Product
            id="1234"
            title="Acer Nitro 7 9th Gen Core i7 15.6-inch Gaming Laptop"
            price={500.99}
            image="data:image/webp;base64,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"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="Samsung 108 cm (43 Inches)"
            price={459.99}
            image="https://m.media-amazon.com/images/I/81PlpqW+qaL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="123467"
            title="Sony Alpha ILCE5100L 24.3MP Mirrorless Camera"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/619ZuVsjCkL._SL1064_.jpg"
            rating={5}
          />
          <Product
            id="1234768"
            title="Echo Dot (3rd Gen) with Amazon Smart Plug"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51b-nuMUdLL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12342345"
            title="Apple iPhone 11 (64GB) - White"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

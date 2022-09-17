import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt="home_banner"
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id={123555}
          title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor,Black"
          price={112.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91K9SyGiyzL._AC_SX679_.jpg"
        />
        <Product
          id={123556}
          title="Remington D3190 Damage Protection Hair Dryer with Ceramic + Ionic"
          price={17.84}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81wmOCTcTwL._SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={123715}
          title="Penn Championship Tennis Balls - Extra Duty Felt Pressurized Tennis Balls"
          price={11.08}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71iJpHMLKBL._AC_SX679_.jpg"
        />
        <Product
          id={452555}
          title="Sleepingo Camping Sleeping Pad - Mat, (Large), Ultralight 14.5 OZ"
          price={39.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91R%2B30DqKbL._AC_SX679_.jpg"
        />
        <Product
          id={485755}
          title="Lenovo Flex 5 14'' 2-in-1 Laptop, 14.0'' FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor"
          price={245.55}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={415879}
          title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity"
          price={549.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

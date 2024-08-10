import React from 'react';
import NavBar from './components/navBar';
import Footer from './components/footer';
import bgImg from './assets/bg-pic.jpg';
import examplePic from './assets/example-shop-pic.jpg';
import bgImg2 from './assets/1.jpg';

const HomePage = () => {
  return (
    <>
    <NavBar/>

    <div className='img-container'>
      <img src={bgImg} alt='background-img'/>
    </div>

    <div>
      <p className='heading-classyfashion'>.Classy Fashion.</p>
      <div className='card-container'>
        <div className='card'>
          <img src={examplePic} alt='example-shop-pic' className='pic'/>
          <p>product name</p>
          <p>Text about the product</p>
          <div className='price-button-container'>
            <p className='price'>$19.99</p>
            <button><i className="bi bi-cart-plus"></i></button>
          </div>
        </div>
        <div className='card'>
          <img src={examplePic} alt='example-shop-pic' className='pic'/>
          <p>product name</p>
          <p>Text about the product</p>
          <div className='price-button-container'>
            <p className='price'>$19.99</p>
            <button><i className="bi bi-cart-plus"></i></button>
          </div>
        </div>
        <div className='card'>
          <img src={examplePic} alt='example-shop-pic' className='pic'/>
          <p>product name</p>
          <p>Text about the product</p>
          <div className='price-button-container'>
            <p className='price'>$19.99</p>
            <button><i className="bi bi-cart-plus"></i></button>
          </div>
        </div>
        <div className='card'>
          <img src={examplePic} alt='example-shop-pic' className='pic'/>
          <p>product name</p>
          <p>Text about the product</p>
          <div className='price-button-container'>
            <p className='price'>$19.99</p>
            <button><i className="bi bi-cart-plus"></i></button>
          </div>
        </div>
      </div>

      <div>
        <img src={bgImg2} alt='bg-pic-2' className='bg-pic-2'/>
      </div>

      <div>
      <p className='heading-classyfashion'>.Unique Dresses.</p>
        <div className='card-container'>
          <div className='card'>
            <img src={examplePic} alt='example-shop-pic' className='pic'/>
            <p>product name</p>
            <p>Text about the product</p>
            <div className='price-button-container'>
              <p className='price'>$19.99</p>
              <button><i className="bi bi-cart-plus"></i></button>
            </div>
          </div>
          <div className='card'>
            <img src={examplePic} alt='example-shop-pic' className='pic'/>
            <p>product name</p>
            <p>Text about the product</p>
            <div className='price-button-container'>
              <p className='price'>$19.99</p>
              <button><i className="bi bi-cart-plus"></i></button>
            </div>
          </div>
          <div className='card'>
            <img src={examplePic} alt='example-shop-pic' className='pic'/>
            <p>product name</p>
            <p>Text about the product</p>
            <div className='price-button-container'>
              <p className='price'>$19.99</p>
              <button><i className="bi bi-cart-plus"></i></button>
            </div>
          </div>
          <div className='card'>
            <img src={examplePic} alt='example-shop-pic' className='pic'/>
            <p>product name</p>
            <p>Text about the product</p>
            <div className='price-button-container'>
              <p className='price'>$19.99</p>
              <button><i className="bi bi-cart-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default HomePage;
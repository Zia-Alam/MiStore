import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.js';
import Slider_2 from './components/Slider_2.js';
import Offers from './components/Offers.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import data from './data/data.json'
import Heading from './components/Heading.js'
import StarProducts from './components/StarProducts.js'
import AccessoriesMenu from './components/AccessoriesMenu.js'
import Accessories from './components/Accessories.js'
import Products from './components/Products.js'
import Videos from './components/Videos.js'
import Footer from './components/Footer.js'
import MainFooter from './components/MainFooter.js'


function App() {
  return (
    <Router className="App">
      <PreNavbar />
      <Navbar miphones={data.miPhones} redmiphones={data.redmiPhones} tv={data.tv} laptop={data.laptop} lifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts products={data.starProduct} />
      <Heading text="COOL ACCESSORIES" />
      <AccessoriesMenu />



      <Routes>
        <Route
          exact path='/music'
          element={<Accessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}
        />

        <Route
          exact path='/smartDevice'
          element={<Accessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}
        />

        <Route
          exact path='/home'
          element={<Accessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}
        />

        <Route
          exact path='/lifeStyle'
          element={<Accessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}
        />

        <Route
          exact path='/mobileAccessories'
          element={<Accessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}
        />

      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <Products productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={data.videos}/>
      <Heading text=" IN THE PRESS" />
      <Slider_2 end={data.banner.end}/>
      <Footer />
      <MainFooter data={data.footer}/>

      <div className='last'>
        <div>
      Copyright © 2010 - 2021 Xiaomi. All Rights Reserved Made By Zia Alam
      </div>
      </div>

     
    </Router>
  );
}

export default App;

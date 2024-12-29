import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductRewviews from "./components/ProductRewviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOption from "./components/NavOption";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOption miPhones={data.miPhones} reddMiPhone={data.redmiPhones} tv={data.tv} laptop={data.laptop}
      fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />

      <HotAccessoriesMenu />
<Routes>
      <Route
        path="/music"
        element={
          <HotAccessories
            music={data.hotAccessories.music}
            musicCover={data.hotAccessoriesCover.music}
          />
        }
      />

      <Route
        path="/smartDevice"
        element={
          <HotAccessories
            SmartDevice={data.hotAccessories.smartDevice}
            SmartDevicesCover={data.hotAccessoriesCover.smartDevice}
          />
        }
      />

      <Route
        path="/home"
        element={
          <HotAccessories
            home={data.hotAccessories.home}
            homeCover={data.hotAccessoriesCover.home}
          />
        }
      />

      <Route
        path="/Lifestyle"
        element={
          <HotAccessories
            lifestyle={data.hotAccessories.lifeStyle}
            lifestyleCover={data.hotAccessoriesCover.lifeStyle}
          />
        }
      />

      <Route
        path="/mobileAccessories"
        element={
          <HotAccessories
            mobileAccess={data.hotAccessories.mobileAccessories}
            mobileAccessCover={data.hotAccessoriesCover.mobileAccessories}
          />
        }
      />
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductRewviews productReviews={data.productReviews}/>


      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;

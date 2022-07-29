
import Navbar from './Navbar';
import PreNavigationBar from './PreNavigationBar';
import { BrowserRouter as Router,Route} from "react-router-dom"
import Slider from './Slider.js'
import data from '../data/data.json'
import Offers from './Offers.js'
import Heading from './Heading.js'
import StarProducts from './StarProducts.js'
import HotAccessoriesMenu from './HotAccessoriesMenu.js'
import HotAccessories from "./HotAccessories.js"
import ProductReviews from "./ProductReviews.js"
import Videos from "./Videos.js"
import Banner from "./Baneer.js"
import Footer from "./Footer.js"
import NavOptios from "./NavOptios.js"
// import { Switch } from 'react-router-dom';

function Homepage() {
  return (
    <Router>
      <PreNavigationBar/> 
      <Navbar/>
  
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories} />
   
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="BEST PRODUCTS"/>
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
     
       <Route exact path="/music">
         <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
         </Route>
 
       <Route exact path="/smartDevice">
         <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>
         </Route>
        
       <Route exact path="/home">
       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>
       </Route>

       <Route exact path="/lifestyle">
         <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>
         </Route>

       <Route exact path="/mobileAccessories">
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
        </Route>

     
       
       <Heading text="PRODUCT REVIEWS"/>

       <ProductReviews productReviews={data.productReviews} />

       <Heading text="VIDEOS"/>
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS"/>
       <Banner banner={data.banner} />
       {/* <Footer footer={data.footer} /> */}
   </Router>
  );
}

export default Homepage;

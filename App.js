import React from 'react';
import ReactDOM from 'react-dom/client';


/**
 * Heading component
 *  - Logo
 *  - Nav Bar
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *    - Restaurant Card
 * Footer
 *  - Copyrights
 *  - Links
 *  - Address   
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://marketplace.canva.com/EAE7AbTaQUs/1/0/1600w/canva-good-food-nature-food-logo-design-for-healthy-food-business-IFvRyzRdJhI.jpg" alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/26/ce748daa-125f-40c5-b794-8637340d4d70_1218208.jpg" alt="restaurant-logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>45 mins | ₹400 for two</h4>
            <h4>4.5 ⭐</h4>
        </div>
    );
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                <RestaurantCard resName = "Meghana Foods"  cuisine="Biryani, North Indian, South Indian"/>
                <RestaurantCard resName = "KFC Foods"  cuisine="Burger , Fast Food" />
               
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
import React from 'react';
import { NavLink } from 'react-router-dom';
import {GoHome, GoTrophy, GoPaperAirplane, GoGift} from "react-icons/go";
// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav className="App-nav">
        <NavLink to="/"><i><GoHome /></i>Home</NavLink>
        <NavLink to="/LogPage"><i><GoTrophy /></i>Studio News</NavLink>
        <NavLink to="/GalleryPage"><i><GoPaperAirplane /></i>Gallery</NavLink> 
        <NavLink to="/Order"><i><GoGift /></i>Order</NavLink>
    </nav>
  );
}

export default Navigation;

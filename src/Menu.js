import React, { Component } from "react";
import "./Menu.css";
import {NavLink} from 'react-router-dom';
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
           <header>
           <nav>
             <NavLink to="/brands">Brands</NavLink>
             <NavLink to="/ajustable">Ajustable</NavLink>
             <NavLink to="/accessories">Accessories</NavLink>
           </nav>
           <nav>
             <NavLink to="/financing">Financing</NavLink>
             <NavLink to="/blog">Our Blog</NavLink>
             <NavLink to="/about">About Us</NavLink>
           </nav>
         </header>
      </div>
    );
  }
}
 
export default Menu;

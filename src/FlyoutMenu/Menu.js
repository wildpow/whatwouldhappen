import React, { PureComponent } from "react";
import { StyledLink, Nav, Wrapper, Image }  from './MenuStyles';
import Topper from '../Topper/Topper';
import image from '../logo.png';

class Menu extends PureComponent {
  render() {
    var visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show";
    }
    return (
      <Wrapper
        onMouseUp={this.props.handleMouseDown} 
        className={visibility}>
        <Topper/>
      <Nav>
        <StyledLink to="/" exact>Home</StyledLink>
        <StyledLink to="/brands">Brands</StyledLink>
        <StyledLink to="/adjustable">Adjustable</StyledLink>
        <StyledLink to="/accessories">Accessories</StyledLink>
        <StyledLink to="/financing">Financing</StyledLink>
        <StyledLink to="/blog">Our Blog</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <Image src={image}/>
      </Nav>
      
      </Wrapper>
    );
  }
}
export default Menu;

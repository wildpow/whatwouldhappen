import React, { Component } from 'react';
import MenuButton from './FlyoutMenu/MenuButton';
import Menu from './FlyoutMenu/Menu';
import styled from 'styled-components';
import {NavLink, Route} from 'react-router-dom';

const P = styled.p`
  text-algin: center;
  font-size: 1.3rem;
`
const HomeComponent = () => {
  return (
    <div><h1>HomeComponent</h1></div>
  )
}

const BrandsComponent = () => {
  return (
    <div><h1>BrandsComponent</h1></div>
  )
}
const AjustableComponent = () => {
  return (
    <div><h1>AjustableComponent</h1></div>
  )
}
const AccessoriesCompoent = () => {
  return (
    <div><h1>AccessoriesCompoent</h1></div>
  )
}
const FinancingComponent = () => {
  return (
    <div><h1>FinancingComponent</h1></div>
  )
}
const BlogComponent = () => {
  return (
    <div><h1>BlogComponent</h1></div>
  )
}
const AboutComponent = () => {
  return (
    <div><h1>AboutComponent</h1></div>
  )
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
   
    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    
  }
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }
  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }
  
  render() {
    return (
     
      <div>
      <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Welcome to the test of the side out menu only works min-width of 768px</h2>
        <P>
          I got it to work with styled components but I left the orginal styles in the src folder. What I really want to happen
          is to have the button stay on the menu when it slides and to change with the css below(using styled-components) and to have the menu only side away if the user clicks on the button which should tranform to an X when clicked.
        </P>
        <code>
          .change.bar1 transform: rotate(-45deg) translate(-12px, 12px) ;
          .change .bar2 opacity: 0;
          .change .bar3 
            transform: rotate(45deg) translate(-8px, -8px) ;
          </code>
      <header>
        <nav>
          <NavLink to="/brands">Brands</NavLink>
          <NavLink to="/adjustable">Ajustable</NavLink>
          <NavLink to="/accessories">Accessories</NavLink>
        </nav>
        <nav>
          <NavLink to="/financing">Financing</NavLink>
          <NavLink to="/blog">Our Blog</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </nav>
      </header>
          <div>
          <Route path="/" component={HomeComponent} exact/>
          <Route path="/brands" component={BrandsComponent} />
          <Route path="/adjustable" component={AjustableComponent} />
          <Route path="/Accessories" component={AccessoriesCompoent} />
          <Route path="/financing" component={FinancingComponent} exact/>
          <Route path="/blog" component={BlogComponent} />
          <Route path="/about" component={AboutComponent} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu'
import './App.css';
import {NavLink, Route} from 'react-router-dom';

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
        <p>Can you spot the item that doesn't belong?</p>
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
          <div>
          <Route path="/" component={HomeComponent} exact/>
          <Route path="/brands" component={BrandsComponent} />
          <Route path="/ajustable" component={AjustableComponent} />
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

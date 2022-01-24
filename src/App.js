import React, { Component } from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/MenuComponents";
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
  return (
    <div>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
    </div>
  );
}
}

export default App;

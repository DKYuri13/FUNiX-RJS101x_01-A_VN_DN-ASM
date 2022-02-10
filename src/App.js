import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./components/StaffListComponent";
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      staffs: STAFFS
    };
  }

  render() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container text-center">
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <List staffs={this.state.staffs} />
    </div>
  );
}
}

export default App;

import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
    <div>
      <Navbar dark expand="md">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto logo" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                      <NavLink className="nav-link" to='/list'><span className="fa fa-home fa-lg"></span> Nhân Viên</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to='/departments'><span className="fa fa-list fa-lg"></span> Phòng Ban</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to='/sheet'><span className="fa fa-list fa-lg"></span> Bảng lương</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/StaffListComponent";
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS, DEPARTMENTS, ROLE } from './shared/staffs';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <Menu STAFFS={this.state.STAFFS} />
    </div>
  );
}

export default App;

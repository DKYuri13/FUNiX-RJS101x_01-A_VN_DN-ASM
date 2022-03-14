import React, { Component } from "react";
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import StaffDetail from './StaffDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import List from "./StaffListComponent";
import Sheet from "./SalarySheetComponent";
import Department from "./DepartmentComponent";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/departments";


class Main extends Component {

  constructor(props) {
    super(props);

    this.state ={
      staffs: STAFFS,
      departments: DEPARTMENTS
    };
  }

  render() {

    const StaffWithId = ({match}) => {
      const params = useParams(match);
      return(
          <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(params.staffId,10))[0]} />
      );
    };
    
  return (
    <div>
        <Header />
          <Routes>
              <Route path="/" element={<Navigate to="/list" />} />
              <Route exact path='/list' element={<List staffs={this.state.staffs} />} />
              <Route path='/list/:staffId' element={<StaffWithId />} />
              <Route path='/sheet' element={<Sheet staffs={this.state.staffs} />} />
              <Route path='/department' element={<Department departments={this.state.departments} />} />
          </Routes>
        <Footer />
    </div>
  );
}
}

export default Main;

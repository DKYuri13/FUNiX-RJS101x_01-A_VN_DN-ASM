import React, { Component } from "react";
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import StaffDetail from './StaffDetailComponent';
import DepartmentDetail from "./DepartmentDetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import List from "./StaffListComponent";
import Sheet from "./SalarySheetComponent";
import Departments from "./DepartmentsComponent";
import { connect } from 'react-redux';
import withRouter from "../redux/wrapper";
import { postStaff, fetchDepartments, fetchSalary, fetchStaffs } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapDispatchToProps = dispatch => ({
  
  postStaff: (staff) => dispatch(postStaff(staff)),
  fetchStaffs: () => dispatch(fetchStaffs()),
  fetchDepartments: () => dispatch(fetchDepartments()),
  fetchSalary: () => dispatch(fetchSalary())
});

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary,
  };
}

class Main extends Component {
  
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalary();
}
  render() {
    const StaffWithId = ({match}) => {
      const params = useParams(match);
      return(
          <StaffDetail staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(params.id,10))[0]} 
          department={this.props.departments.departments}/>
      );
    };

    const DepartmentWithId = ({match}) => {
      const params = useParams(match);
      return(
          <DepartmentDetail department={this.props.departments.departments.filter((department) => department.id === params.id)} 
          staffs={this.props.staffs.staffs}/>
      );
    };
    
  return (
    <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.router.location.key} classNames="page" timeout={300}>
              <Routes location={this.props.router.location}>
                  <Route path="/" element={<Navigate to="/list" />} />
                  <Route exact path='/list' element={<List staffsLoading={this.props.staffs.isLoading} postStaff={this.props.postStaff} staffs={this.props.staffs.staffs} departments={this.props.departments.departments}/>} />
                  <Route path='/list/:id' element={<StaffWithId />} />
                  <Route path='/departments/:id' element={<DepartmentWithId />} />
                  <Route path='/sheet' element={<Sheet staffs={this.props.staffs.staffs} />} />
                  <Route path='/departments' element={<Departments departments={this.props.departments.departments} staffs={this.props.staffs.staffs} />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        <Footer />   
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
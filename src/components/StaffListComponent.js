import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat'; 

class List extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({selectedStaff: staff});
    }

    renderStaff(staff) {
        if (staff != null)
            return(
                <Card>
                    <CardBody>
                        <CardTitle><h4>Họ và tên: {staff.name}</h4></CardTitle>
                        <CardText>
                            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                            <p>Phòng ban: {staff.department.name}</p>
                            <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                            <p>Số ngày đã làm thêm: {staff.overTime}</p>
                        </CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const list = this.props.staffs.map((staff)=>{
            return (
                <div key={staff.id} className="col-12 col-md-4 mt-2">
                    <Card key={staff.id}
                        onClick={() => this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row text-center'>
                    {list}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-4 mt-2">
                    {this.renderStaff(this.state.selectedStaff)}
                  </div>
                </div>
            </div>
        );
    }
}
export default List;
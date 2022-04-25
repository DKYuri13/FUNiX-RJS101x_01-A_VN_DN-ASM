import React from "react";
import { CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

function RenderStaff({staff, department}) {
    const departmentId=String(staff.departmentId);
    const departmentName = department.filter((val) => {
            if (departmentId === "") {
                return val;
            } else if (val.id.toLowerCase().includes(departmentId.toLowerCase())) {
                return val;
            }
        }).map((val)=>{
            return(val.name)
        })

        return(
            <div className="row">
                <div className="col-12 col-lg-4 m-1">
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                </div>
                <div className="col-12 col-lg-7 mt-3">
                    <CardTitle>Họ và tên: {staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban: {departmentName}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                </div>
            </div>
        )
};
const StaffDetail = (props) => {
    if (props.staff != null)
        return(
            <div className="container">
                <div className="row mt-1">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/list">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>                
                </div>
                <div className="row">
                        <RenderStaff staff={props.staff} department = {props.department} />
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
}
export default StaffDetail;
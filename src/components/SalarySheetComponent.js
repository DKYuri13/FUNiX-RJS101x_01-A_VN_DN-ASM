import React from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderSheetItem ({staff}) {
    const salary = Math.round(staff.salaryScale * 3000000 + staff.overTime / 3 * 200000);
    return(
        <Card>
            <CardTitle><h4>{staff.name}</h4></CardTitle>
            <CardText>Mã nhân viên: {staff.id}</CardText>
            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
            <CardText>Lương: {salary}</CardText>
        </Card>
    )

}
const Sheet = (props) => {
    const Sheet = props.staffs.map((staff) => {
        return(
            <div key={staff.id} className="col-lg-3 col-md-5 m-1">
                <RenderSheetItem staff={staff} />
            </div>
        )
    })
    return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>Bảng lương</BreadcrumbItem>
                    </Breadcrumb>   
                </div>
                <div className="row">
                    {Sheet}
                </div>
            </div>
    )
}
export default Sheet;
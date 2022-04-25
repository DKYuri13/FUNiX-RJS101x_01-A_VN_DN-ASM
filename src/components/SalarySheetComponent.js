import React from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderSheetItem ({salary}) {
    const salaryTotal = Math.round(salary.salaryScale * 3000000 + salary.overTime / 3 * 200000);
    return(
        <Card>
            <CardTitle><h4>{salary.name}</h4></CardTitle>
            <CardText>Mã nhân viên: {salary.id}</CardText>
            <CardText>Hệ số lương: {salary.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
            <CardText>Lương: {salaryTotal}</CardText>
        </Card>
    )

}
const Sheet = (props) => {
    const Sheet = props.staffs.map((salary) => {
        return(
            <div key={salary.id} className="col-lg-3 col-md-5 m-1">
                <RenderSheetItem salary={salary} />
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
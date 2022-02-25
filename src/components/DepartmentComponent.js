import React from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';


function RenderDepartmentItem ({department}) {
        
        return (
                <Card>
                    <CardTitle><h4>{department.name}</h4></CardTitle>
                    <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
                </Card>
            );
        };
const Department = (props) => {
        const department = props.departments.map((department) => {
            return (
                <div key={department.id} className="col-12 col-lg-3 col-md-5 m-1 p-0">
                    <RenderDepartmentItem department={department} />
                </div>
                );
            });

        return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>Phòng Ban</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {department}
            </div>
        </div>
        );
}

export default Department;
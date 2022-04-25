import React from "react";
import { Card, CardImg, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDepartment({staffs, department}) {
    const departmentId=department.id;
    const Staffs = staffs.filter((val) => {
            if (departmentId === "") {
                return val;
            } else if (String(val.departmentId).toLowerCase().includes(departmentId.toLowerCase())) {
                return val;
            }
        }).map((val)=>{
            return(
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <Card>
                        <Link to={`/list/${val.id}`} >
                            <CardImg width="100%" height="185px" src={val.image} alt={val.name} />
                            <CardText className='text-center'>{val.name}</CardText>
                        </Link>
                    </Card>
                </div>
            )
        })
    return (
            <div className="row">
                {Staffs}
            </div>
    )
};
const DepartmentDetail = (props) => {
    if (props.department != null && props.staffs != null)
        return(
            <div className="container">
                <div className="row mt-1">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/departments">Phòng Ban</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.department[0].name}</BreadcrumbItem>
                    </Breadcrumb>                
                </div>
                <div>
                    <RenderDepartment staffs={props.staffs} department={props.department[0]} />
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
}
export default DepartmentDetail;
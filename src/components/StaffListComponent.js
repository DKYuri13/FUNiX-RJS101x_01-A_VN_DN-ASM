import React from 'react';
import { Card, CardImg, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'; 

function RenderListItem ({staff}) {
    return(
        <Card>
            <Link to={`/list/${staff.id}`} >
                <CardImg width="100%" height="185px" src={staff.image} alt={staff.name} />
                <CardText className='text-center'>{staff.name}</CardText>
            </Link>
        </Card>
    );
}

    const List = (props) => {
        const list = props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6">
                    <RenderListItem staff={staff} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>Nhân Viên</BreadcrumbItem>
                    </Breadcrumb>   
                </div>
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }
    
export default List;
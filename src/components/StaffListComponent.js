import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onDishSelect(staff) {
        this.setState({ selectedStaff: staff});
    }

    renderStaff(staff) {
        if (staff != null)
            return(
                <Card>
                    <CardImg top src={staff.name} alt={staff.name} />
                    <CardBody>
                      <CardTitle>{staff.name}</CardTitle>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.staffs.map((staff)=>{
            return (
                <div key={staff.id} className="col-12 col-md-5 m-1">
                    <Card key={staff.id}
                        onClick={() => this.onStaffSelect(staff)}>
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                        <CardImgOverlay>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderStaff(this.state.selectedStaff)}
                  </div>
                </div>
            </div>
        );
    }
}
export default Menu;
import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    render() {
        const staffList = this.props.STAFFS.map((staff)=>{
            return (
                <div>

                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    <Media list>
                        {staffList}
                    </Media>
                </div>
            </div>
        );
    }
}
export default Menu;
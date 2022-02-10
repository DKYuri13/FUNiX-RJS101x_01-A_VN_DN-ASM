import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { STAFFS } from '../shared/staffs';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = STAFFS
    }

    render() {
        const staffList = this.state.STAFFS.map((staff) => {
            return (
                <div key={staff.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={staff.name} />
                        </Media>
                    </Media>
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
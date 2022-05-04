import React, { useState } from 'react';
import { Card, CardImg, CardText, Breadcrumb, BreadcrumbItem, Col, Button, Modal, ModalBody, ModalHeader, Row, Label, FormFeedback} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../style.css';

function RenderListItem ({staff}) {
    return(
        <Card>
            <Link to={`/list/${staff.id}`} >
                <CardImg width="100%" height="185px" src={staff.image} alt={staff.name} />
                <CardText className='text-center'>{staff.name}</CardText>
            </Link>
        </Card>
    );
};

    const List = (props) => {

        const today = new Date();

        const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        const [startDate, setStartDate] = useState(new Date());

        const [doB, setDoB] = useState(new Date());

        const [show, setShow] = useState(false);

        const [searchTerm, setSearchTerm] = useState('');

        const handleShow = () => {
            setShow(!show);
        };

        const reg = /^\d+$/;

        const handleSubmit = (values) => {   
            const doBformat = doB.getFullYear() + '-' + (doB.getMonth() + 1) + '-' + doB.getDate();
            
            if (values.name === undefined || values.name === "" || values.name.length < 3) {
                alert('Tên phải dài hơn 3 ký tự');
                return;
            }
            else if(doBformat>=currentDate) {
                alert('Ngày sinh không tồn tại');
                return;
            }
            else if (values.annualLeave === undefined || values.annualLeave === "" || !reg.test(values.annualLeave)) {
                alert('Số ngày nghỉ phải là số');
                return;
            }
            else if (values.overTime === undefined || values.overTime === "" || !reg.test(values.overTime)) {
                alert('Số ngày đã làm thêm phải là số');
                return;
            }

            const staffId = props.staffs.length;

            const departmentName = String(values.department);
            const departmentId = props.departments.filter((val) => {
                if (departmentName === "") {
                    return val;
                } else if (val.name.toLowerCase().includes(departmentName.toLowerCase())) {
                    return val;
                }
            }).map((val)=>{
                val.numberOfStaff++;
                return(val.id)
            })
            const newStaff = {
                id: staffId,
                name: values.name, 
                featured: false, 
                doB: doB,
                departmentId: departmentId,
                salaryScale: parseInt(values.salaryScale, 10),
                startDate: startDate,
                image:'/assets/images/alberto.png',
                annualLeave: parseInt(values.annualLeave, 10),
                overTime: parseInt(values.overTime, 10),
            };
            setDoB(new Date());
            setStartDate(new Date());
            console.log(newStaff);
            props.postStaff(newStaff);
            handleShow();
            // event.preventDefault();
        }

        const list = props.staffs.filter((val) => {
                if (searchTerm === "") {
                    return val;
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((val) => {
                console.log(props)
            return (
                <div className="col-lg-2 col-md-4 col-sm-6">
                <TransitionGroup>
                    <CSSTransition key={val.id} classNames="list" timeout={300} appear>
                            <RenderListItem staff={val} />
                    </CSSTransition>
                </TransitionGroup>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem>Nhân Viên</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='col-lg-2 col-md-5 mt-2'>
                    <div className='col-lg-2 col-md-5 mt-2'>
                        <Button onClick={handleShow}>+</Button>
                    </div>
                    <div className="row">                   
                        <Modal isOpen={show}>
                            <ModalHeader toggle={handleShow}>Thêm nhân viên</ModalHeader>
                                <ModalBody>
                                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                                            <Row className="form-group">
                                                    <Label htmlFor="name" md={4}>Tên</Label>
                                                    <Col md={8}>
                                                        <Control.text model=".name" id="name" name="name"
                                                            className="form-Control"/>
                                                        <FormFeedback></FormFeedback>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                                    <Col md={8}>
                                                        <DatePicker id="doB" selected={doB} onChange={date1=> setDoB(date1)}/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                                    <Col md={8}>
                                                        <DatePicker id="startDate" selected={startDate} onChange={date2=>setStartDate(date2)}/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Label htmlFor="department" md={4}>Phòng Ban</Label>
                                                    <Col md={8}>
                                                        <Control.select model=".department" id="department" name="department"
                                                            className="form-control" defaultValue="Sale">
                                                            <option>Sale</option>
                                                            <option>HR</option>
                                                            <option>Marketing</option>
                                                            <option>IT</option>
                                                            <option>Finance</option>
                                                        </Control.select>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                                    <Col md={8}>
                                                        <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                                            className="form-control"/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                                    <Col md={8}>
                                                        <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                                            className="form-control"/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                                    <Col md={8}>
                                                        <Control.text model=".overTime" id="overTime" name="overTime"
                                                            className="form-control"/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Col md={{size: 10, offset: 2}}>
                                                        <Button type="submit" color="primary">Thêm</Button>
                                                    </Col>
                                                </Row>
                                            </LocalForm>
                                </ModalBody>
                        </Modal>
                    </div>
                </div>
                <div className="col-lg-8 col-md-5 mt-2">
                    <LocalForm>
                            <Col className="form-group">
                                    <Col md={6}>
                                        <Control.text model="name" className="form-control" onChange={event => {setSearchTerm(event.target.value)}} />
                                    </Col>
                            </Col>
                    </LocalForm>
                </div>   
                </div>
                        <div className="row">
                            {list}
                        </div>
            </div>
        );
    };
    
export default List;
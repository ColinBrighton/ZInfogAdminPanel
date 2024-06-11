import React, { useState } from 'react'
import { TopOption } from '@modules/Home/Partials/style'
import { Container } from '@theme/Styled'
import { Col, Form } from 'antd'
import { FILTER,SEARCH } from '@assets/images'
import { CustomRow } from '@components/others'
import { IoSearch,IoClose } from "react-icons/io5";
import { Button, CustomDatePicker, CustomInput, CustomSelect } from '@components/form'
import { reports, status } from '@assets/commonData/PatientReport'

const HomeFilter = ({ setFilterQuery }) => {

    const [filterShown, setFilterShown] = useState(false)

    const [form] = Form.useForm();

    const doctorName = reports.map((item) => ({
        label: item?.doctorName,
        value: item?.doctorName,
    }))

    const onFinish = values => {

        // form.resetFields();
        console.log(values, 'ONFINISh');
    }
    return (
        <TopOption>
            <Container>
                <div className="container">
                    <h1>Patient Reports</h1>
                    <div className="filterHolder">
                        <button type="button" className="filterbtn" onClick={() => setFilterShown(!filterShown)}>
                            Apply&nbsp;Filter
                            <img src={FILTER} alt="filtericon" />
                        </button>

                        <div className="searchHolder">
                            <input type="text" onChange={(e) => setFilterQuery(e.target.value)} className='search' placeholder='Search by Doctor Name/ Patient Name/ Test Name...' />
                            <img src={SEARCH} alt="searchicon" className='icon' />
                        </div>
                    </div>
                </div>
            </Container>

            {
                filterShown && (
                    <div className="filterWrapper">
                        <Form onFinish={onFinish}
                            labelCol={{
                                span: 10,
                            }}
                            autoComplete='off'
                            wrapperCol={{
                                span: 14,
                            }}
                            form={form}
                        >
                            <div style={{
                                padding: '10px'
                            }}>
                                <CustomRow space={[24, 24]}>

                                    <Col span={24} md={12} lg={8}>
                                        <CustomDatePicker
                                            name={'start_date'}
                                            label={'From Date'}
                                            placeholder={'From Date'} />
                                    </Col>

                                    <Col span={24} md={12} lg={8}>
                                        <CustomDatePicker
                                            name={'end_date'}
                                            label={'To Date'}
                                            placeholder={'To Date'} />
                                    </Col>

                                    <Col span={24} md={12} lg={8}>
                                        <CustomSelect
                                            name={'doctor_id'}
                                            label={'Refer by'}
                                            placeholder={'Refer by'}
                                            options={doctorName} />
                                    </Col>

                                    <Col span={24} md={12} lg={8}>
                                        <CustomInput
                                            name="patient_name"
                                            label={'Patient Name'}
                                            placeholder={'Patient Name'} />
                                    </Col>

                                    <Col span={24} md={12} lg={8}>
                                        <CustomInput
                                            name="hospital_id"
                                            label={'Hospital ID'}
                                            placeholder={'Hospital ID'} />
                                    </Col>

                                    <Col span={24} md={12} lg={8}>
                                        <CustomSelect
                                            name={'status'}
                                            label={'Status'}
                                            placeholder={'Status'}
                                            options={status} />
                                    </Col>
                                    <Col span={24} md={12} lg={8}>
                                        <CustomInput
                                            name="bill_number"
                                            label={'Bill No'}
                                            placeholder={'Bill No'} />
                                    </Col>
                                </CustomRow>
                            </div>

                            <div className="filterfooter">
                                <Container>
                                    <div className="btnwrapper">
                                   <h4> Please provide search criteria and hit search button.</h4>

                                   <div className="btnHolder">
                                    <Button.Secondary htmlType={'submit'} text={'Search'} icon={<IoSearch size={22}/>}/>
                                    <Button.Yellow htmlType={'reset'} text={'Clear'} icon={<IoClose size={22}/>}/>
                                   </div>
                                    </div>  
                                </Container>
                            </div>
                        </Form>
                    </div>
                )
            }
        </TopOption>
    )
}

export default HomeFilter

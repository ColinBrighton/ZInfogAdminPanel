import React from 'react'
import { ReportTable, StatusTag } from '@modules/Home/Partials/style'
import { DOWNLOAD, MESSAGE } from '@assets/images'

const TableView = ({ data }) => {
    return (
        <div style={{
            width: '100%',
            overflow:'auto',
            paddingBottom:'20px',
        }}>
            <ReportTable>
                <thead>
                    <tr>
                        <th>Order&nbsp;No</th>
                        <th>Date</th>
                        <th>Patient&nbsp;Name</th>
                        <th>Hospital&nbsp;ID</th>
                        <th>Test&nbsp;Name</th>
                        <th>Doctor&nbsp;Name</th>
                        <th>ETA</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.orderNo}</td>
                                <td>{item.date}</td>
                                <td>{item.patientName}</td>
                                <td>{item.hospitalId}</td>
                                <td>{item.testName}</td>
                                <td>{item.doctorName}</td>
                                <td>{item.eta}</td>
                                <td><StatusTag status={item.tag}>{item.status}</StatusTag></td>
                                <td>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '25px',
                                    }}>
                                        <img src={DOWNLOAD} alt="uploadicon" />
                                        <img src={MESSAGE} alt="messageicon" />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </ReportTable>
        </div>
    )
}

export default TableView

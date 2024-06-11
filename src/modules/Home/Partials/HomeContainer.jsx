import React, { useState } from 'react'
import TableView from '@modules/Home/Partials/TableView'
import { reports } from '@assets/commonData/PatientReport'
import HomeFilter from '@modules/Home/Partials/HomeFilter'
import { HomeWrapper } from '@modules/Home/Partials/style'

const HomeContainer = () => {
    const [dataSource, setDataSource] = useState(reports)
    const [filterQuery, setFilterQuery] = useState('')

    const filteredData = dataSource.filter((report) => {
        return (
            String(report?.doctorName).toLowerCase().includes(filterQuery.toLowerCase()) ||
            String(report?.doctorName).includes(filterQuery.toUpperCase()) ||
            String(report?.orderNo).toLowerCase().includes(filterQuery.toLowerCase()) ||
            String(report?.orderNo).includes(filterQuery.toUpperCase()) ||
            String(report?.date).toLowerCase().includes(filterQuery.toLowerCase()) ||
            String(report?.date).includes(filterQuery.toUpperCase()) ||
            String(report?.patientName).toLowerCase().includes(filterQuery.toLowerCase()) ||
            String(report?.patientName).includes(filterQuery.toUpperCase()) ||
            String(report?.testName).toLowerCase().includes(filterQuery.toLowerCase()) ||
            String(report?.testName).includes(filterQuery.toUpperCase())
        )
    })
    return (
        <div style={{
            width: '100%',
            height:'100%',
        }}>
            <HomeFilter setFilterQuery={setFilterQuery} />
            <HomeWrapper>
                <TableView data={filteredData} />
            </HomeWrapper>
        </div>
    )
}

export default HomeContainer

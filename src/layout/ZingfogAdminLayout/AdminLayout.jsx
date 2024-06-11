import React from 'react'
import Header from '@layout/ZingfogAdminLayout/Partials/Header'
import Footer from '@layout/ZingfogAdminLayout/Partials/Footer'
import { BodySection } from '@layout/ZingfogAdminLayout/Partials/Style'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '@modules/Auth/authSlice'

const AdminLayout = ({ children }) => {

    const auth = useSelector(selectCurrentUser);
    console.log(auth,'kkkk');
    return (
        <div>
            <Header />
            <BodySection>
                {children}
            </BodySection>
            <Footer />
        </div>
    )
}

export default AdminLayout

import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { adminAuthenticated, userAuthenticated } from '@router/config/routes'
import { Flex } from '@components/others'
import styled from 'styled-components'
import { userRolesConfig } from '@router/config/roles'
import AdminLayout from '@layout/ZingfogAdminLayout/AdminLayout'

const PageFlex = styled.div`
`
const AuthPage = ({ isAuthenticated }) => {

    const role = userRolesConfig.ADMIN;
    const [authRoutePages, setAuthRoutePages] = useState([]);
  
    useEffect(() => {
      if (role === userRolesConfig.ADMIN) {
        setAuthRoutePages(adminAuthenticated);
      } else if (role === userRolesConfig.USER) {
        setAuthRoutePages(userAuthenticated);
      }
    }, [role]);
  

    return (
        <PageFlex>
            {isAuthenticated && (
                <AdminLayout>
                    <Routes>
                        {authRoutePages.map(({ routePath, Component }) => {
                            return (
                                <Route
                                    key={routePath}
                                    path={routePath}
                                    element={<Component />}
                                ></Route>
                            )
                        })}
                    </Routes>
                </AdminLayout>
            )}
        </PageFlex>
    )
}

export default AuthPage

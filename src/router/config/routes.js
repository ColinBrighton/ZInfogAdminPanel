import { NetWorkError } from "@router/components/NetWorkError"
import PageNotFound from "@router/components/PageNotFound"
import UserSignin from "@modules/Auth/Partials/UserSignin"
import { Example } from "@modules/Example"
import { Profile } from "@modules/Profile"
import Home from "@modules/Home/Home"

export const anonymous = [
    {       
        routePath: '*',   // ----------- Page Not Fonund
        Component: PageNotFound,
    },
    {       
        routePath: 'networkerror',  // ----------- Network Error
        Component: NetWorkError,
    },
    {
        routePath: '/signin',  // ----------- Signin Page
        Component: UserSignin,
    },
]

export const adminAuthenticated = [
    {       
        routePath: '*',   // ----------- Page Not Fonund
        Component: PageNotFound,
    },
    {       
        routePath: 'networkerror',  // ----------- Network Error
        Component: NetWorkError,
    },
    {
        routePath:'/',  // ----------- Dashboard
        Component:Home, 
    }
]

export const userAuthenticated = [
    {      
        routePath: '*',   // ----------- Page Not Fonund
        Component: PageNotFound,
    },
    {      
        routePath: 'networkerror',  // ----------- Network Error
        Component: NetWorkError,
    },
    {
        routePath:'',   // ----------- Dashboard
        Component:Profile,
    }
]
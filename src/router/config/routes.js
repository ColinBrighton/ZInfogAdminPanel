import { NetWorkError } from "@router/components/NetWorkError"
import PageNotFound from "@router/components/PageNotFound"
import UserSignin from "@modules/Auth/Partials/UserSignin"
import { Example } from "@modules/Example"
import { Profile } from "@modules/Profile"

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
    // {
    //     routePath: '/register',
    //     Component: RegisterMenu,
    // },
    // {
    //     routePath: '/password',
    //     Component: PasswordForm,
    // },
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
        routePath:'',  // ----------- Dashboard
        Component:Example, 
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
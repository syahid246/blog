import { Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import Error404 from '../../pages/Error/404'
import FancyRoute from './fancy'

const routes = [
    {
        title: 'Home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        title: 'Halaman Tidak Ditemukan',
        path: '*',
        component: Error404
    },
]

function Routing()
{
    return (
        <Switch>
            {routes.map((route, i) => 
                <FancyRoute key={i} {...route}/>
            )}
        </Switch>
    )
}

export default Routing

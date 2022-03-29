import { Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import FancyRoute from './fancy'

const routes = [
    {
        title: 'Home',
        path: '/',
        exact: true,
        component: Home
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

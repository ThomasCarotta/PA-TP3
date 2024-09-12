
import Header from '../templates/Header';
import Home from '../pages/Home.JS';
import Rocket from '../pages/Rocket';
import RocketInfo from '../pages/RocketInfo';
import Error404 from '../pages/Error404'

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
    '/': Home,
    '/rocket/:id': Rocket, 
    '/info/:id': RocketInfo,
};


const router = async () => {
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');

    header.innerHTML= await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

};

export default router;
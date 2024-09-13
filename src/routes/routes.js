import Home from '../pages/Home.js';
import RocketInfo from '../pages/RocketInfo';

const routes = {
    '/': Home,
    '/info/:id': RocketInfo,
};

export default routes;
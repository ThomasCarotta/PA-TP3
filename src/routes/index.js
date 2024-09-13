import Header from '../templates/Header';
import Error404 from '../pages/error404.js';
import getHash from '../utils/getHash';
import routes from './routes';

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    header.innerHTML = await Header();

    const route = getHash();

    const rutasCoinciden = Object.keys(routes).find(r => {
        const ruta = route.split('/');
        const idRuta = r.split('/');

        return ruta.length === idRuta.length &&
            idRuta.every((part, i) => part === ruta[i] || part.startsWith(':'));
    });

    content.innerHTML = await (routes[rutasCoinciden] || Error404)();
};


export default router;
import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Home = async () => {
    const Rockets = await getData();

    const view =  `
        <div class="Rockets">
        ${Rockets.map(rocket => `
            <article class="Rocket-item">
                <a href="#/info/${rocket.id}">   
                    <img src="${rocket.links.patch.small}" alt="${rocket.name}">
                    <h2>${rocket.name}</h2>
                </a>
            </article>
        `).join('')}
        </div>
    `
    return view;
}

export default Home;


import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Rocket =  async () => {

    const id = getHash();
    const rocket = await getData(id);
    console.log(Rocket);
    const view = `
        <div class="Rockets-inner">
            <article class="Rocket-card">
                <img src="${rocket.links.patch.small}" alt="${rocket.name}">
                <h2>${rocket.name}</h2>
            </article>
        </div>

    `
    return view
};
export default Rocket;
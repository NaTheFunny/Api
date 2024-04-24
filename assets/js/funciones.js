import { drinks } from './drinks.js';

export const getDrinkById = (id="15423")=> {
    return drinks.find( function(drink){
        return drink.id === id;
    });
};


export const createcard = (data) => {
    const card = `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card">
        <img src="${data.strDrinkThumb}" class=" card-img-top" alt="${data.strDrink}">
        <div class="card-body">
            <h5 class="card-title">${data.strDrink}</h5>
        </div>
    </div>
</div>
    `;
    return card;
};


export const rendercards = (data, containerid) => {
    const container = document.getElementById(containerid);
        data.forEach(item => {
            container.innerHTML += createcard(item)
        });
    };
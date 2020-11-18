// https://restcountries.eu/rest/v2/all
//promise

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('hello there')
//     }, 100)

// });
//start
window.addEventListener('load', () => {
    const API = "https://restcountries.eu/rest/v2/all";
    const inner = document.getElementById('container');

    const error = document.getElementById('error');

    fetch(API)
        .then((res) => {
            if (true) {
                return res.json();
            } else {
                error.style.display = "block"
            }
        })
        .then((data) => {
            //content code for apis
            data.forEach(elem => {
                const cards = document.querySelector('.card')
                const content = document.querySelector('.content')
                const { name, alpha3Code, capital, region, population, nativeName, languages, currencies } = elem;

                const nameApi = document.createElement('h3')
                const imageApi = document.createElement('img')
                const nativeApi = document.createElement('P')
                const capitalApi = document.createElement('P')
                const regionApi = document.createElement('P')
                const populationApi = document.createElement('P')
                const langApi = document.createElement('P')
                const currencyApi = document.createElement('P')

                //set content
                imageApi.setAttribute('src', `https://restcountries.eu/data/${alpha3Code.toLowerCase()}.svg`)
                nameApi.textContent = name;
                nativeApi.textContent = nativeName;
                capitalApi.textContent = capital;
                regionApi.textContent = region;
                populationApi.textContent = population;
                langApi.textContent = languages[0].name;
                currencyApi.textContent = currencies[0].name;

                //set attruitte
                console.log(elem)

                content.appendChild(imageApi);
                content.appendChild(nameApi)
                content.appendChild(nativeApi);
                content.appendChild(capitalApi);
                content.appendChild(regionApi);
                content.appendChild(populationApi);
                content.appendChild(langApi);
                content.appendChild(currencyApi);

                cards.appendChild(content);
                // inner.appendChild(cards);


            });
        }).catch((err) => console.log(err))
});
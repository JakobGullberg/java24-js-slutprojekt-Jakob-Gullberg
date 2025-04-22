const url = `https://restcountries.com/v3.1/lang/spanish`;

// const fetchPromise = fetch(url);

// console.log(1, fetchPromise);

// const jsonPromise = fetchPromise.then (response =>{
//     console.log(2, "fetchPromise resolved",response);

//     return response.json();

// });

// console.log(3,"jsonPromise", jsonPromise);

// jsonPromise.then( countries => {
//     console.log(4, "jsonPromise resolved",countries);


// })


fetch(url)
.then(response => response.json() )
.then(displayCountries);

function displayCountries(countries){
    //console.log(countries);
    const containerDiv = document.querySelector('#countryContainer');


    countries.forEach( country =>{
        console.log(country.flags.png);
        console.log(country.flags.alt);
        console.log(country.name.common);


        const cardDiv = document.createElement('div');
        const nameH3 = document.createElement('h3');
        const img = document.createElement('img');


        nameH3.innerText = country.name.common;
        img.src = country.flags.png;
        img.alt = country.flags.alt;

    })

}


const  loadCountries =() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}


const displayCountries = countries => {
    // for(const country of countries){
    //      console.log(country);
    //   }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        
        <h3>Name : ${country.name.common}</h3>
        <h4>Official : ${country.name.official}</h4>
        <h5>Tld : ${country.tld}</h5>
        <p>Capital : ${country.capital ? country.capital[0] : 'No Capital'}</p>
        
        `;

        countriesContainer.appendChild(countryDiv)
    })

    }


loadCountries();
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

        <button onClick="loadCountryDetail('${country.cca2}')">Details</button>
        
        `;

        countriesContainer.appendChild(countryDiv)
    })

    }

loadCountryDetail = (code) => {
        // https://restcountries.com/v3.1/alpha/{code}
   
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail' , code)
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML  = `
      <h2>Name :  ${country.name.common}</h2>
      <h5>official : ${country.name.official}</h5>
      <h5>Native Name : ${country.name.official.nativeName}</h5>
      <img src="${country.flags.png}">
    `
}
loadCountries();
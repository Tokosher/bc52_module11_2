// https://random-data-api.com/documentation
const BASE_URL = 'https://random-data-api.com/api/v2/banks';
// fetch(BASE_URL)
// .then(response => {
//     if (!response.ok) {
//         throw new Error(response.status)
//     }
//     return response.json();
// })
// .then(data => {
//     console.log(data)
// })

// async await
// city country
// full_address

// const button = document.querySelector('button');
// const countryTextArea = document.querySelector('#country')
// const cityTextArea = document.querySelector('#city')
// const addressTextArea = document.querySelector('#address')
//
// button.addEventListener('click', async () => {
//     const placeData = await getRandomAddress();
//     console.log('ADDRESS DATA RECEIVED');
//     console.log(placeData)
//     createAddressMarkup(placeData);
// })
//
// function createAddressMarkup ({ city, country, full_address: fullAddress }) {
//     countryTextArea.innerText = 'Country: ' + country;
//     cityTextArea.innerText = 'City: ' + city;
//     addressTextArea.innerText = 'Detailed address: ' + fullAddress;
// }
//
// async function getRandomAddress () {
//     const response = await fetch(BASE_URL);
//     return response.json();
// }

// account to donate
const button = document.querySelector('button');
const ibanArea = document.querySelector('#iban');

button.addEventListener('click', async () => {
    const bankAccountData = await getRandomData();
    createIbanMarkup(bankAccountData);
})

function createIbanMarkup ({ iban }) {
    ibanArea.textContent = 'IBAN account: ' + iban;
}

async function getRandomData () {
    const response = await fetch(BASE_URL);
    return response.json();
}

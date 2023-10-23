import { loadHeaderFooter } from './utils';


loadHeaderFooter()
    .then(() => {
        const mainNav = document.getElementById('navbar')
        const hamburger = document.getElementById('ham_button');

        hamburger.addEventListener('click', () => { mainNav.classList.toggle('responsive') }, false);
        hamburger.addEventListener('click', () => {
            if (hamburger.innerHTML == 'X') { hamburger.innerHTML = '&#9776;'; }
            else { hamburger.innerHTML = 'X'; };
        });
    });


async function fetchApi() {
    const response = await fetch('https://api.igdb.com/v4/games/',
        {method: 'POST',
        headers: {
            'Client-ID': '3beu509b9kd4301cxzk9v44qv6mq4m',
            'Authorization': 'Bearer 6r02d1zncqx6hsh0v47bciyxenp7z5',
            'Content-Type': 'application/json'
            },
        body: "fields *; limit 10;"
        });
        console.log(response.json());
        console.log(response);
        return response;
        // .then(response => {
        //     console.log(response);
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     return response.json();
        // })
        // .then((data) => {
        //     console.log(data);
        // })
        // .catch(err => {
        //     console.error(err);
        // });
}


fetchApi();

const btnTaalNederlands = document.querySelector('.taalNederlands');
const btnTaalEngels = document.querySelector('.taalEngels');

let currentLanguage = 'nl';

if (btnTaalNederlands) {
    btnTaalNederlands.addEventListener('click', () => {
        window.location.href = '/Pagina/Home-EN.html';
    });
}

if (btnTaalEngels) {
    btnTaalEngels.addEventListener('click', () => {
        window.location.href = '/Pagina/Home.html';
    });
}
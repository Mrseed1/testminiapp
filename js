// Инициализация Telegram WebApp API
const tg = window.Telegram.WebApp;

// Получаем элементы DOM
const coinCountElement = document.getElementById('coin-count');
const clickButton = document.getElementById('click-button');

// Начальное количество монет
let coins = parseInt(localStorage.getItem('coins')) || 0;

// Обновляем счетчик монет
function updateCoinCount() {
    coinCountElement.textContent = coins.toLocaleString();
    localStorage.setItem('coins', coins);
}

// Обработчик нажатия кнопки
clickButton.addEventListener('click', () => {
    coins++;
    updateCoinCount();
});

// Инициализация при загрузке
updateCoinCount();

// Уведомляем Telegram, что приложение готово
tg.ready();

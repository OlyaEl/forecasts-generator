/*Полина, понимаю и трезво оцениваю, что это "провал" в том смысле, что код не работает. Но для меня это своего рода прогресс, так кая мне удалось немного понять логику написания, которая мне так не давалась.
Очень прошу тебя записать по возможности скрин-каст, с разбором ошибок этого "творения"*/

const forecasts = ["Ты поймешь JS!",
    "Тебя ожидают хорошие выходные.",
    "Летом тебя ждёт путешествие мечты!",
    "Сегодня ты выспишься.",
    "Сегодня у тебя удачный день!"
]
const createForecast = document.querySelector('.forecast-btn');
const forecastContainer = document.querySelector('.forecasts');
const mainForecast = document.querySelector('h1');
const probability = document.querySelector('current-forecast').document.querySelector('p');

createForecast.addEventListener('click', sendForecast);

function sendForecast() {
    const forecastText = forecasts[Math.floor(Math.random() * forecasts.length)];

    const newForecast = document.createElement('div');
    newForecast.classList.add('.text');
    newForecast.textContent = forecastText;
    mainForecast.textContent = forecastText;
    const probabilityContent = getPercent(0, 100);


    if (sendForecast == 'click') {
        forecastContainer.prepend(mainForecast);
        probability.textContent = "Вероятность: " + probabilityContent + "%";
    }

}

sendForecast()

function getPercent(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
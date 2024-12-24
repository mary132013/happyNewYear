// script.js
let currentBackground = 0; // Индекс текущего фона
const backgrounds = [
    'images/photo_2024-12-24_18-27-11.jpg',
    'images/photo_2024-12-24_18-27-16.jpg',
    'images/photo_2024-12-24_18-27-20.jpg'
];

document.getElementById('changeBackground').addEventListener('click', function() {
    currentBackground = (currentBackground + 1) % backgrounds.length; // Увеличиваем индекс фона
    document.body.style.backgroundImage = url('${backgrounds[currentBackground]}'); // Меняем фон
});

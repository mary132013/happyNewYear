
    function delayLoad() {
        let countdown = 10; // Начальное значение для обратного отсчета
        const textElement = document.getElementById('text');
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown < 0) {
                clearInterval(countdownInterval);
                startMessage();  
            }
        }, 1000); 
        document.querySelector('.loader').style.display = 'block';
    }

    function startMessage() {
        const textElement = document.getElementById('text');
        textElement.style.display = 'block';
        const message = "Я решила, что давно (полгода точно) не проводила тестов (читай: 'издевалась')";
        let index = 0;

        function type() {
            if (index < message.length) {
                textElement.innerHTML += message.charAt(index);   
                index++;  
                setTimeout(type, 100); 
            } else {   
                setTimeout(() => {   
                    changeBackground();  
                    const newMessage = 'Так вот, пожалуй, пора тебя помучить';    
                    index = 0;   
                    textElement.innerHTML = '';    
                    typeNewMessage(newMessage);   
                }, 1000);   
            }  
        }
        type(); 
        document.querySelector('.loader').style.display = 'none'; 
    }

    function changeBackground() {
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_18-27-16.jpg')";
    }

    function typeNewMessage(message) {
        const textElement = document.getElementById('text');
        let index = 0;

        function type() {
            if (index < message.length) {
                textElement.innerHTML += message.charAt(index);
                index++;
                setTimeout(type, 100); 
            } else {
                setTimeout(() => {  
                    changeBackground1();    
                    const thirdMessage = "Начнем?";  
                    index = 0;   
                    textElement.innerHTML = '';  
                    typeThirdMessage(thirdMessage);  
                }, 5000);  
            }
        }
        type(); 
    }

    function changeBackground1() {
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_18-27-20.jpg')";
    } 
function changeBackground2() {
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_18-27-32.jpg')";
    }

    function typeThirdMessage(message) {
        const textElement = document.getElementById('text');
        let index = 0;

        function type() {
            if (index < message.length) {  
                textElement.innerHTML += message.charAt(index);   
                index++; 
                setTimeout(type, 100); 
            } else { 
                setTimeout(() => {                      
                    changeBackground2(); 
                    const fourthMessage = "Это был не вопрос";  
                    index = 0;  
                    textElement.innerHTML = '';  
                    typeFourthMessage(fourthMessage);  
                }, 5000);   
            } 
        }    
        type(); 
    }

    function typeFourthMessage(message) {
        const textElement = document.getElementById('text');
        let index = 0;

        function type() {   
            if (index < message.length) {       
                textElement.innerHTML += message.charAt(index);   
                index++;    
                setTimeout(type, 100);    
            } else {  
                setTimeout(() => {   
                    displayQuestion();   
                }, 5000);   
            } 
        }  
        type();  
    }

    function displayQuestion() {
        const textElement = document.getElementById('text');   
        textElement.innerHTML = '';   
        const question = "Когда дебютировала моя любимая группа?";     
        let index = 0;

        function type() { 
            if (index < question.length) { 
                textElement.innerHTML += question.charAt(index);   
                index++;  
                setTimeout(type, 100);   
            } else {  
                setTimeout(() => {  
                    showOptions();   
                }, 1000);  
            }  
        }  
        type();   
    }

function showOptions() {
    const optionsDiv = document.createElement('div'); 
    optionsDiv.style.marginTop = '20px';
    const options = ["12 июня 2011", "11 июня 2014", "14 июня 2012", "13 июня 2013"];
    
    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result'; // Добавляем класс для стилизации
           
             // Создаем контейнер для результата с фоном
            const textContainer = document.createElement('div');
            textContainer.className = 'text-background'; // Добавляем класс для фона
            textContainer.appendChild(resultDiv); // Добавляем результат в контейнер
            
            document.body.appendChild(textContainer); // Добавляем контейнер на страницу
            if (option === "13 июня 2013") {
                // Меняем фон
                document.body.style.backgroundImage = "url('images/photo_2024-12-24_18-27-37.jpg')";
resultDiv.style.color = 'white'; // Цвет для "не угадала"
                // Выводим текст "молодец" по буквам
                const text = "молодец";
                let index = 0;

                const interval = setInterval(() => {
                    if (index < text.length) {
                        resultDiv.style.color = 'white'; // Цвет для "не угадала"
                        resultDiv.textContent += text[index];
                        index++;
                    } else {
                        clearInterval(interval);
                        resultDiv.style.opacity = 1; // Плавное появление текста
                        // Запускаем функцию для вывода следующего текста
                        setTimeout(() => {
                             resultDiv.textContent='';
                            displayDebutSongMessage();
                        }, 1000); // Задержка перед выводом следующего текста
                    }
                }, 500); // Измените скорость вывода текста здесь (500 мс)
            } else {                
                document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-45-44.jpg')";
                resultDiv.textContent = "не угадала";
                resultDiv.style.color = 'white'; // Цвет для "не угадала"
                resultDiv.style.opacity = 1; // Плавное появление текста
            }
        };
        optionsDiv.appendChild(optionDiv);
    });

    // Добавляем опции на страницу
    const textElement = document.getElementById('text');
    textElement.appendChild(optionsDiv);
}
function displayDebutSongMessage() {
     const textElement = document.getElementById('text');   
     textElement.innerHTML = '';   
    //const messageDiv = document.createElement('div');
    //messageDiv.className = 'debut-message'; // Класс для стилизации сообщения
    //document.body.appendChild(messageDiv);
    
    const message = "Была мысль спросить про дебютную песню... но это не интересно (кто-то всё равно полезет в интернет)";
    let index = 0;

    const interval = setInterval(() => {
        if (index < message.length) {
            //messageDiv.textContent += message[index];
            textElement.innerHTML += message[index];
            index++;
        } else {
            clearInterval(interval);
            // Через 5 секунд выводим следующее сообщение
            setTimeout(() => {
                displayNextQuestion();
            }, 5000); // Задержка 5 секунд
        }
    }, 100); // Скорость вывода текста (100 мс)
}

function displayNextQuestion() {
    const textElement = document.getElementById('text');   
    textElement.innerHTML = "Ладненько, дальше";

    // Через 3 секунды выводим следующий вопрос
    setTimeout(() => {
        textElement.innerHTML = "Кто самый младший? (нет, на этот раз вариантов не будет)";

        // Создаем текстовое поле
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Введите ваш ответ...';
        document.body.appendChild(inputField);
        
        // Кнопка для отправки ответа
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Отправить';
        submitButton.onclick = () => {
            const userAnswer = inputField.value.trim().toLowerCase(); // Получаем ответ и приводим к нижнему регистру
            
            // Проверяем ответ
            if (userAnswer === "чонгук") {
                document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-02.jpg')";
                textElement.innerHTML = "Дааа, Я!";
                inputField.style.display = 'none'; // Скрываем текстовое поле
                submitButton.style.display = 'none'; // Скрываем кнопку
                displayNextQuestionWithLetters(); // Запускаем следующую функцию
            } else {
                document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-45-47.jpg')";
                textElement.innerHTML = "Как это ты меня не угадала?";
            }
        };
        document.body.appendChild(submitButton);
        
    }, 3000); // Задержка 3 секунды перед выводом вопроса и текстового поля
}

function displayNextQuestionWithLetters() {
    const textElement = document.getElementById('text');
    const questionText = "Кого называют Worldwide handsome?";
    let index = 0;

    // Функция для вывода текста по буквам
    const displayLetters = () => {
        if (index < questionText.length) {
            textElement.innerHTML += questionText[index]; // Добавляем букву к тексту
            index++;
            setTimeout(displayLetters, 200); // Задержка между буквами
        } else {
            // После завершения показа текста, создаем новое текстовое поле
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.placeholder = 'Введите ваш ответ...';
            document.body.appendChild(inputField);
            
            // Кнопка для отправки ответа на новый вопрос
            const submitButton = document.createElement('button');
            submitButton.textContent = 'Отправить';
            submitButton.onclick = () => {
                const video = document.getElementById('myVideo');
                const userAnswer = inputField.value.trim().toLowerCase(); // Получаем ответ и приводим к нижнему регистру
                
                // Здесь можно добавить логику проверки нового ответа
                if (userAnswer === "джин") { // Предположим, правильный ответ "вайт"
                   textElement.innerHTML += 'Есссс!';
                    video.play();
                }if (userAnswer === "сокджин") { // Предположим, правильный ответ "вайт"
                    textElement.innerHTML += 'Есссс!';
                    video.play();
                }}if (userAnswer === "ким сокджин") { // Предположим, правильный ответ "вайт"
                    textElement.innerHTML += 'Есссс!';
                    video.play();
                } else {
                   textElement.innerHTML += 'Как тааак??';
                }
            };
            document.body.appendChild(submitButton);
        }
    };

    displayLetters(); // Запускаем вывод букв
}
// Запускаем функцию обратного отсчета при загрузке страницы
window.onload = delayLoad;

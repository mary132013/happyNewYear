
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
                setTimeout(displayNextQuestionWithLetters, 2000);
            } else {
                document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-45-47.jpg')";
                textElement.innerHTML = "Как это ты меня не угадала?";                
                inputField.style.display = 'none'; // Скрываем текстовое поле
                submitButton.style.display = 'none'; // Скрываем кнопку
                setTimeout(displayNextQuestionWithLetters, 2000);
            }
        };
        document.body.appendChild(submitButton);
        
    }, 3000); // Задержка 3 секунды перед выводом вопроса и текстового поля
}

function displayNextQuestionWithLetters() {
    const textElement = document.getElementById('text');    
    textElement.innerHTML = '';   
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
            document.body.appendChild(submitButton);

            // Обработчик клика для кнопки
            submitButton.onclick = () => {
                const userAnswer = inputField.value.trim().toLowerCase(); // Получаем ответ и приводим к нижнему регистру
                
                // Скрываем кнопку и поле ввода перед проверкой ответа
                inputField.style.display = 'none';
                submitButton.style.display = 'none';

                // Проверяем ответ через 2 секунды
                setTimeout(() => {
                    if (userAnswer === "джин" || userAnswer === "сокджин" || userAnswer === "ким сокджин") { 
                        textElement.innerHTML = 'Есссс!';
                        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-45-37.jpg')";
                        displayAmbidextrousQuestion(); // Переход к следующему вопросу
                    } else {
                        textElement.innerHTML = 'В смысле не я??\n야야야야!!!';                    
                        document.body.style.backgroundImage = "url('images/photo_2024-12-25_01-38-27.jpg')";                    
                        displayAmbidextrousQuestion(); // Переход к следующему вопросу
                    }
                }, 2000); // Задержка в 2 секунды перед проверкой ответа
            };
        }
    };

    displayLetters();
}

function displayAmbidextrousQuestion() {
    const textElement = document.getElementById('text');    
    textElement.innerHTML = '';   
    const questionText = "Как ты думаешь, кто из них амбидекстер?";
    let index = 0;

    // Функция для вывода текста по буквам
    const displayLetters = () => {
        if (index < questionText.length) {
            textElement.innerHTML += questionText[index]; // Добавляем букву к тексту
            index++;
            setTimeout(displayLetters, 200); // Задержка между буквами
        } else {
            // После завершения показа текста, выводим варианты ответов
            const answers = ["Джин", "Чимин", "Тэхен", "Юнги"];
            answers.forEach(answer => {
                const answerButton = document.createElement('button');
                answerButton.textContent = answer;
                answerButton.onclick = () => checkAmbidextrousAnswer(answer, answers);
                document.body.appendChild(answerButton);
            });
        }
    };

    displayLetters();
}

function checkAmbidextrousAnswer(answer, answers) {
    const textElement = document.getElementById('text');    
    // Скрываем все кнопки перед проверкой ответа
    answers.forEach(answer => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.style.display = 'none'); // Скрываем все кнопки
    });

    if (answer === "Тэхен") {
        textElement.innerHTML = 'Правильно!';
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-22.jpg')";
    } else {
        textElement.innerHTML = 'Не туда нажала что ли?';
    }

    // Запускаем следующий вопрос через 2 секунды
    setTimeout(() => {
        displayHopeWorldQuestion(); // Запускаем следующий вопрос
    }, 2000);
}

function displayHopeWorldQuestion() {
    const textElement = document.getElementById('text');    
    textElement.innerHTML = '';   
    const questionText = "Какой участник выпустил микстейп под названием Hope World? (Внимательно читай вопрос)";
    let index = 0;

    // Функция для вывода текста по буквам
    const displayLetters = () => {
        if (index < questionText.length) {
            textElement.innerHTML += questionText[index]; // Добавляем букву к тексту
            index++;
            setTimeout(displayLetters, 200); // Задержка между буквами
        } else {
            // После завершения показа текста, выводим варианты ответов
            const answers = ["Намджун", "Хосок", "Юнги"];
            answers.forEach(answer => {
                const answerButton = document.createElement('button');
                answerButton.textContent = answer;
                answerButton.onclick = () => checkHopeWorldAnswer(answer, answers);
                document.body.appendChild(answerButton);
            });
        }
    };

    displayLetters();
}

function checkHopeWorldAnswer(answer, answers) {
    const textElement = document.getElementById('text');    
    // Скрываем все кнопки перед проверкой ответа
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.style.display = 'none'); // Скрываем все кнопки

    if (answer === "Хосок") {
        textElement.innerHTML = 'Угадала))\n I`m your hope, you`re my hope, i`m jhope!';
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-20.jpg')";
        
        // Запускаем следующий вопрос через 2 секунды
        setTimeout(() => {
            displayLeaderQuestion(); // Запускаем следующий вопрос о лидере группы
        }, 2000);
    } else {
        textElement.innerHTML = 'Да я это, я!';        
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-20.jpg')";
        
        // Запускаем следующий вопрос через 2 секунды
        setTimeout(() => {
            displayLeaderQuestion(); // Запускаем следующий вопрос о лидере группы
        }, 2000);
    }
}

function displayLeaderQuestion() {
    const textElement = document.getElementById('text');    
    textElement.innerHTML = '';   
    const questionText = "Кто лидер в группе?";
    let index = 0;

    // Функция для вывода текста по буквам
    const displayLetters = () => {
        if (index < questionText.length) {
            textElement.innerHTML += questionText[index]; // Добавляем букву к тексту
            index++;
            setTimeout(displayLetters, 200); // Задержка между буквами
        } else {
            // После завершения показа текста, выводим варианты ответов
            const answers = ["Джин", "Чимин", "Юнги", "Намджун"];
            answers.forEach(answer => {
                const answerButton = document.createElement('button');
                answerButton.textContent = answer;
                answerButton.onclick = () => checkLeaderAnswer(answer);
                document.body.appendChild(answerButton);
            });
        }
    };

    displayLetters();
}

function checkLeaderAnswer(answer) {
    const textElement = document.getElementById('text');    
    // Скрываем все кнопки перед проверкой ответа
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.style.display = 'none'); // Скрываем все кнопки

    if (answer === "Намджун") {
        textElement.innerHTML = 'Love yourself: Speak yourself!';
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-17.jpg')";
        
        // Запускаем следующий вопрос о псевдониме Юнги через 2 секунды
        setTimeout(() => {
            displayYungiAliasQuestion(); // Запускаем следующий вопрос
        }, 2000);
    } else {
        textElement.innerHTML = 'Не правда...';        
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-17.jpg')";
        
        // Запускаем следующий вопрос о псевдониме Юнги через 2 секунды
        setTimeout(() => {
            displayYungiAliasQuestion(); // Запускаем следующий вопрос
        }, 2000);
    }
}


function displayYungiAliasQuestion() {
    const textElement = document.getElementById('text');    
    textElement.innerHTML = '';   
    const questionText = "Какой второй псевдоним у Юнги?";
    let index = 0;

    // Функция для вывода текста по буквам
    const displayLetters = () => {
        if (index < questionText.length) {
            textElement.innerHTML += questionText[index]; // Добавляем букву к тексту
            index++;
            setTimeout(displayLetters, 200); // Задержка между буквами
        } else {
            // После завершения показа текста, выводим варианты ответов
            const answers = ["AgustD", "ShadowD", "CipherD"];
            answers.forEach(answer => {
                const answerButton = document.createElement('button');
                answerButton.textContent = answer;
                answerButton.onclick = () => checkYungiAliasAnswer(answer);
                document.body.appendChild(answerButton);
            });
        }
    };

    displayLetters();
}

function checkYungiAliasAnswer(answer) {
    const textElement = document.getElementById('text');    
    const buttons = document.querySelectorAll('button');
    
    // Скрываем все кнопки перед проверкой ответа
    buttons.forEach(button => button.style.display = 'none');

    if (answer === "AgustD") {
        textElement.innerHTML = '다 괜찮아질 거야!';
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-25.jpg')";
        
        // Запускаем следующий вопрос через 2 секунды
        setTimeout(() => {
            displayGuessWhoQuestion(); // Запускаем следующий вопрос
        }, 2000);
    } else {
        textElement.innerHTML = 'Прочитай Suga наоборот.. гений..';        
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-25.jpg')";
        
        // Запускаем следующий вопрос через 2 секунды
        setTimeout(() => {
            displayGuessWhoQuestion(); // Запускаем следующий вопрос
        }, 2000);
    }
}

function displayGuessWhoQuestion() {
    const textElement = document.getElementById('text');   
    
    document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-07.jpg')";
    textElement.innerHTML = 'Угадай кто на фото';
    
    // Создаем текстовое поле для ввода ответа
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Введите имя...';
    document.body.appendChild(inputField);

    // Создаем кнопку для проверки ответа
    const checkButton = document.createElement('button');
    checkButton.textContent = 'Проверить';
    checkButton.onclick = () => checkGuessWhoAnswer(inputField.value, inputField, checkButton);
    document.body.appendChild(checkButton);
}

function checkGuessWhoAnswer(guess, inputField, checkButton) {
    const textElement = document.getElementById('text');    
    if (guess.toLowerCase() === "чимин") {
        textElement.innerHTML = 'Да, это наш дорогой Чимин!';        
        document.body.style.backgroundImage = "url('images/photo_2024-12-24_23-46-12.jpg')";
        
        // Скрываем поле ввода и кнопку
        inputField.style.display = 'none';
        checkButton.style.display = 'none';

        // Запускаем функцию для последнего вопроса через 2 секунды
        setTimeout(displayFinalQuestion, 2000);
    } else {
        textElement.innerHTML = 'Неа';
    }
}

function displayFinalQuestion() {
    const textElement = document.getElementById('text');   
    textElement.innerHTML = ''; // Очищаем текст перед выводом

    const finalQuestionText = "А теперь последний вопрос";
    let index = 0;

    // Функция для вывода текста по буквам
    const displayLetters = () => {
        if (index < finalQuestionText.length) {
            textElement.innerHTML += finalQuestionText[index]; // Добавляем букву к тексту
            index++;
            setTimeout(displayLetters, 200); // Задержка между буквами
        } else {
            // После завершения показа текста, выводим следующий текст через 2 секунды
            setTimeout(() => {
                textElement.innerHTML = "Что я хочу тебе сейчас сказать?";
                displayFinalAnswers(); // Запускаем вывод вариантов ответов
            }, 2000);
        }
    };

    displayLetters();
}

function displayFinalAnswers() {
    const answers = ["i red you", "i blue you", "i purple you"];
    answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkFinalAnswer(answer);
        document.body.appendChild(answerButton);
    });
}

function checkFinalAnswer(answer) {
    const textElement = document.getElementById('text');    
    if (answer === "i purple you") {
                        document.body.style.backgroundImage = "url('images/photo_2024-12-25_01-38-13.jpg')";  
        createSnowflakes(); // Запускаем функцию для создания снежинок
    } else {
          document.body.style.backgroundImage = "url('images/photo_2024-12-25_01-38-13.jpg')";  
        createSnowflakes(); // Запускаем функцию для создания снежинок
    }
}

function createSnowflakes() {
    const snowflakeCount = 50; // Количество снежинок
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.position = 'absolute';
    snowflake.style.top = '0';
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; // Позиция по горизонтали
    snowflake.style.opacity = Math.random(); // Прозрачность
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Размер снежинки
    snowflake.textContent = '❄️'; // Добавляем символ снежинки

    document.body.appendChild(snowflake);

    // Анимация падения снежинки
    fallSnowflake(snowflake);
}

function fallSnowflake(snowflake) {
    const fallDuration = Math.random() * 3 + 2; // Длительность падения
    snowflake.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(' + window.innerHeight + 'px)' }
    ], {
        duration: fallDuration * 1000,
        easing: 'linear',
        fill: 'forwards'
    });

    // Удаляем снежинку после завершения анимации
    setTimeout(() => {
        snowflake.remove();
    }, fallDuration * 1000);
}

// Удаляем вызов setInterval, чтобы снежинки не создавались автоматически

// Запускаем функцию обратного отсчета при загрузке страницы
window.onload = delayLoad;

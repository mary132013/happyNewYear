
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
                    }
                }, 500); // Измените скорость вывода текста здесь (500 мс)
            } else {                
                document.body.style.backgroundImage = "url('images/photo_2024-12-24_18-27-37.jpg')";
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


// Запускаем функцию обратного отсчета при загрузке страницы
window.onload = delayLoad;

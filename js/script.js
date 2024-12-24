
    function delayLoad() {
        let countdown = 10; // Начальное значение для обратного отсчета
        const textElement = document.getElementById('text');
        const countdownInterval = setInterval(() => {
            textElement.innerHTML = countdown; 
            countdown--;
            if (countdown < 0) {
                clearInterval(countdownInterval);
                textElement.style.display = 'none'; 
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
            optionDiv.onclick = () => alert(Вы выбрали: ${option}); // Исправлено использование шаблонной строки
            optionsDiv.appendChild(optionDiv);
        });

        // Добавляем опции на страницу
        const textElement = document.getElementById('text');
        textElement.appendChild(optionsDiv);
    }

    // Запускаем функцию обратного отсчета при загрузке страницы
    window.onload = delayLoad;

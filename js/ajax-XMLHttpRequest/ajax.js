// Создаем объект XMLHttpRequest
let ajax = new XMLHttpRequest();

/* Инициализируем его
*  Первый параметр method - Http метод, обычно GET или POST
*  Второй URL, куда будет отправлен запрос, строка или объект URL
*
*/
ajax.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// Сам запрос. Может содержать параметр body с телом запроса
ajax.send();

// Отмена запроса
ajax.abort();

/* Установка типа ожидаемого ответа, может быть
 "" (по умолчанию) – строка,
 "text" – строка,
 "arraybuffer" – ArrayBuffer (для бинарных данных, смотрите в ArrayBuffer, бинарные массивы),
 "blob" – Blob (для бинарных данных, смотрите в Blob),
 "document" – XML-документ (может использовать XPath и другие XML-методы),
 "json" – JSON (парсится автоматически). */
ajax.responseType = 'json';

// Таймаут - время, которые мы готовы ждать ответ
ajax.timeout = 1000;

// Происходит, когда получен какой-то ответ с сервера
ajax.onload = function() {
    console.log(ajax.response); // вывод ответа с сервера
    console.log(ajax.status); // статус запроса
}

// Когда запрос не может быть выполнен, нет соединения или невалидный URL
ajax.onerror = function() {
    console.log('Error connect');
}

// Сообщение о прогрессе ответа
ajax.onprogress = function(event) {
    // event.loaded - количество загруженных байт
    // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
    // event.total - количество байт всего (только если lengthComputable равно true)
    console.log(`Загружено ${event.loaded} из ${event.total}`);
}

// Выполняется, если запрос не отвечает по заданному таймауту
ajax.ontimeout = function () {
    console.log('Запрос не отработал по таймауту');
}

// Состояние запроса, которое меняется по мере выполнения запроса (морально устарело)
ajax.onreadystatechange = function() {
    switch (ajax.readyState) {
        case 0 : //исходное состояние
            console.log(0);
            break;
        case 1 : // вызван метод open
            console.log(1);
            break;
        case 2 : // получены заголовки ответа
            console.log(2);
            break;
        case 3 : // ответ в процессе передачи (данные частично получены)
            console.log(3);
            break;
        case 4 : // запрос завершён
            console.log(4);
            break;
    }
}

// Http заголовки

// Установка своих http заголовков запроса
ajax.setRequestHeader('Content-Type', 'application/json') // его нельзя отменить или перезаписать

// Получение заголовка ответа (кроме Set-Cookie и Set-Cookie2)
ajax.getResponseHeader('Content-Type');

// Получение всех заголовков ответа (кроме Set-Cookie и Set-Cookie2)
ajax.getAllResponseHeaders();


// Post запросы и FormData

// Заполняем FormData данными из формы
let formData = new FormData(document.forms.person);

// Добавляем еще одно поле
formData.append('middle', 'Иванович');

// Отправляем данные
let sendForm = new XMLHttpRequest();
sendForm.open('POST', 'https://jsonplaceholder.typicode.com/todos/1');
sendForm.send(formData);
sendForm.onload = function() {
    console.log(sendForm.response);
}

// Прогресс отправки

// Для отслеживания отправки файла на сервер есть объект upload

xhr.upload.onprogress = function(event) {
    alert(`Отправлено ${event.loaded} из ${event.total} байт`);
};

xhr.upload.onload = function() {
    alert(`Данные успешно отправлены.`);
};

xhr.upload.onerror = function() {
    alert(`Произошла ошибка во время отправки: ${xhr.status}`);
};



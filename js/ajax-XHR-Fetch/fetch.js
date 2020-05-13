// Использование fetch

// Первый параметр - URL
// Второй параметр - опции (методы, заголовки и т.д)
let promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

// Получение результата происходит в 2 этапа
// Первый получает только заголовки ответа с сервера
// Второй, получение информации с помощью дополнительного вызова
// response.text() – читает ответ и возвращает как обычный текст,
//     response.json() – декодирует ответ в формате JSON,
//     response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
// response.blob() – возвращает объект как Blob (бинарные данные с типом),
// response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
// помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям. Мы рассмотрим и такой пример несколько позже.
promise.then(data => data.json()).then(response => {
    console.log(response)
})

// POST запросы

let user = {
    name: 'John',
    surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);

/* заменит на странице элемента с id 'hello' содержимое на то что в 
файле db.json->profile->name*/

// var xhh = new XMLHttpRequest();
// xhh.onreadystatechange = function () {
//   if (xhh.readyState === 4 && xhh.status === 200) {
//     hello.innerHTML = JSON.parse(xhh.responseText).name;
//   }
// };
// xhh.open('GET', 'http://localhost:3000/profile', true);
// xhh.send();

/*сохранит в файле db.json ->comments данные переменной req*/

// xhh = new XMLHttpRequest();
// xhh.onreadystatechange = function () {
//   if (xhh.readyState === 4 && xhh.status === 200) вроде 201 нужно {
//     console.log(xhh.responseText);
//   }
// };
// var req = {
//   "id": 7,
//   "body": "some comV2",
//   "postId": 9
// };
// xhh.open('POST', 'http://localhost:3000/comments', true);
// xhh.setRequestHeader('Content-Type', 'application/json');
// xhh.send(JSON.stringify(req));

/* АНАЛОГ 1-го метода упрощенный заменит на странице элемента с id 'hello' содержимое на то что в
файле db.json->profile->name*/
// fetch('http://localhost:3000/profile')
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (json) {
//     hello.innerHTML = json.lastName;
//   });

/*АНАЛОГ 2-го метода сохранит в файле db.json ->comments данные переменной req*/
// var req = {
//   id: 80,
//   body: 'some com dfdsfsfsdfsfsfdsfsfsf',
//   postId: 89,
// };
// fetch('http://localhost:3000/comments', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(req),
// }).then(function (resp) {
//   console.log(resp.status);
// });

/* При нажатии на button поменяется содержимое эемента с id 'hello' и выведется сообщение в консоль*/
// function doSomething() {
//   $.get(
//     'http://localhost:3000/profile',
//     function (data) {
//       $('#hello').html(data.name);
//     },
//     'json',
//   ).done(function () {
//     console.log('shjbdfjskhfhskjfhsfkshf');
//   });
// }
// var obj = document.getElementById('input-send-button');
// obj.addEventListener('click', doSomething, false);

/*АНАЛОГ 2-го метода сохранит в файле db.json ->comments данные указанного json*/
// var obj = document.getElementById('input-send-button');
// obj.onclick = function () {
//   $.post(
//     'http://localhost:3000/comments',
//     {
//       id: 100,
//       body: 'some com 100',
//       postId: 100,
//     },
//     function (data) {
//       console.log('a ma mamam');
//     },
//     'json',
//   );
// };
$('#input-send-button').click(function () {
  $.ajax({
    url: 'https://formspree.io/mikiteek@gmail.com',
    method: 'POST',
    data: {
      name: $('#name').value,
      email: $('#email').value,
      subject: $('#subject').value,
      message: $('#message').value,
    },
    dataType: 'json',
  });
});

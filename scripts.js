const requestURL = 'https://jsonplaceholder.typicode.com/users';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const users = request.response;
  showUsers(users);         // .sort(sortUsersName)
}

function showUsers(jsonObj) {
  for (let i = 0; i < jsonObj.length; i++) {
    const tableBodyContent = document.createElement('tr');

    render(jsonObj[i], 'name', tableBodyContent);
    render(jsonObj[i], 'username', tableBodyContent);
    render(jsonObj[i], 'email', tableBodyContent);
    render(jsonObj[i], 'website', tableBodyContent);

    document.querySelector('tbody').appendChild(tableBodyContent);
  }
}

function render(obj, prop, table) {
  const td = document.createElement('td');
  td.textContent = obj[prop];
  table.appendChild(td);
}







function sortTableContent(a, b) {
  const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
  if (nameA < nameB) {  //сортируем строки по возрастанию
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0; // Никакой сортировки
}

document.getElementsByClassName("name").addEventListener("click", myFunction);

function myFunction() {
  request.onload = function() {
    document.querySelector('tbody').innerHTML = "";
    const sortUsers = request.response;
    showUsers(sortUsers.sort(sortTableContent));         // .sort(sortUsersName)
  };
}

// const btnSort = document.getElementsByClassName('name').addEventListener("click", () => {
//   request.onload = function() {
//     document.querySelector('tbody').innerHTML = "";
//     const sortUsers = request.response;
//     showUsers(sortUsers.sort(sortTableContent));         // .sort(sortUsersName)
//   }
// }, false);

// function sorter() {
//   request.onload = function() {
//     document.querySelector('tbody').innerHTML = "";
//     const sortUsers = request.response;
//     showUsers(sortUsers.sort(sortTableContent));         // .sort(sortUsersName)
//   }
// }







// elem.onclick = function() {
//   alert( 'Спасибо' );
// };

// window.elem.addEventListener('click', function (e) {
//   e.preventDefault();
//   showUsers(users.sort(sortUsersName)); 
// }, false);

// window.elem.addEventListener('click', function (e) {
//   e.preventDefault();
//   alert( 'Спасибо' );
// }, false);


function sortUsersName(a, b) {
  const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
  if (nameA < nameB) {  //сортируем строки по возрастанию
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0; // Никакой сортировки
};

// document.querySelector('#elem').onclick = function() {
//   alert( 'Спасибо' );
// };

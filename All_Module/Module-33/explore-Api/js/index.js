function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers2(data));
}
function displayUsers2(data) {
  const ul = document.getElementById("users-list");
  const ul2 = document.getElementById('userList2');
  for (let user of data) {
    console.log(user.name);
    console.log(user.email);
    const li = document.createElement('li');
    const li2 = document.createElement('li');
    li.innerText = user.name;
    li2.innerText = user.email;
    ul.appendChild(li);
    ul2.appendChild(li2);
  }
}

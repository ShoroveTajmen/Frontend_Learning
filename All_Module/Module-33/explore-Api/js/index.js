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

function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

function PatchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function postAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}


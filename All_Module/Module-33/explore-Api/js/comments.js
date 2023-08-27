function commentData() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
}

function displayComment(data) {
  const divContainer = document.getElementById("div-container");
  for (valuue of data) {
    const cmntDiv = document.createElement("div");
    cmntDiv.innerHTML = `
        <h3>name: ${valuue.name}</h3>
        
        `;
    divContainer.appendChild(cmntDiv);
  }
}
commentData();

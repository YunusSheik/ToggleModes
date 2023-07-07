fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    let info = data
      .map(
        (post) => `<div id=${post.userId}>
    <h1 class="light-h1">${post.id}</h1>
    <h1 class="light-h1">${post.title}</h1>
    <p class="light-p">${post.body}</p>
    </div>`
      )
      .join("");
    document.getElementById("all-posts").innerHTML = info;
  });
document.getElementById("toggle-button").addEventListener("click", () => {
  if (
    document.getElementsByTagName("link")[0].getAttribute("href") ==
    "styles.css"
  ) {
    document
      .getElementsByTagName("link")[0]
      .setAttribute("href", "darkCss.css");
  } else {
    document.getElementsByTagName("link")[0].setAttribute("href", "styles.css");
  }
});

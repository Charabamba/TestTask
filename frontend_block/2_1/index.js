let viewChanger = document.querySelector(".view-change");
let addButton = document.querySelector(".show-more");

viewChanger.addEventListener("click", () => {
  document
    .querySelectorAll(".catalog-item")
    .forEach(elem => elem.classList.toggle("list"));
  viewChanger.innerHTML === "Плитка"
    ? (viewChanger.innerHTML = "Список")
    : (viewChanger.innerHTML = "Плитка");
});

addButton.addEventListener("click", async () => {
  let url = "ajax.php";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  const data = await res.json();
  document.querySelector(".elements-container").innerHTML += data.html;
  if (document.querySelector(".catalog-item").classList.contains("list")) {
    document
      .querySelectorAll(".catalog-item")
      .forEach(item => item.classList.add("list"));
  }
});

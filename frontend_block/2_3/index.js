function setPlusIcon() {
  document.querySelectorAll("li ul").forEach(item => {
    item.parentNode.classList.add("expandable");
    item.classList.add("hidden");
  });
  document
    .querySelectorAll("a")
    .forEach(a => a.addEventListener("click", aClick));
}

function aClick(e) {
  a = e.target.parentNode;

  if (a.classList.contains("expandable") || a.classList.contains("expanded")) {
    e.preventDefault();
    a.classList.toggle("expandable");
    a.classList.toggle("expanded");
  }
}

setPlusIcon();

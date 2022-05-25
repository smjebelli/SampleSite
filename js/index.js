const elems = document.getElementsByClassName("collapsible");

for (let index = 0; index < elems.length; index++) {
  const element = elems[index];
  element.addEventListener("click", function () {
    element.classList.toggle("collapsible--expanded");
  });
}

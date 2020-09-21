const span = document.querySelector("#counter");
const button = document.querySelector("#button");

let counter = 0;

button.addEventListener("click", () => {
  const currentCount = parseFloat(span.textContent);

  span.textContent = currentCount + 1;
});

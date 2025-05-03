let range = document.querySelector(".range");
let data = document.querySelector(".range-data");

console.log(range.value);

const updateRange = () => {
  data.innerText = range.value;
  range.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) ${0}%, hsl(335, 100%, 65%) ${
    range.value / 10
  }%, hsl(229, 57%, 11%) ${range.value / 10}%)`;

  console.log(range.value / 10);
};

range.addEventListener("input", updateRange);

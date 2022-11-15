//location of a character in a string.
let Name = "sulyman";
let math = 3;
console.log(Name.charAt(math.floor(math.random() * Name)));

//user input
alert("boiling");
alert("name");

confirm("ok === false \ncancel === true");
let myBoolean = confirm("ok === false \ncancel === true");
console.log(myBoolean);
let fristName = prompt("enter the name");

const dateEl = document.querySelector("#dateBox");

const getAllDate = () => {
  const d = new Date();
  const date = d.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateEl.textContent = `${date} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};
setInterval(getAllDate, 1000);

const y = (e, f) => {
  return e * f;
};

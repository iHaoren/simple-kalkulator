let inputBox = document.getElementById("inputBox");
let btn = document.querySelectorAll("button");

let string = "";

btn.forEach((element) => {
  element.addEventListener("click", (b) => {
    let btnText = b.target.innerText;

    if (btnText == "=") {
      string = eval(string).toString();
      inputBox.value = string;
    } else if (btnText == "AC") {
      string = "";
      inputBox.value = string;
    } else if (btnText == "DEL") {
      string = string.slice(0, -1);
      inputBox.value = string;
    } else if (b.target.id == "plusMin") {
      string = (-eval(string)).toString();
      inputBox.value = string;
    } else {
      string += btnText;
      inputBox.value = string;
    }
  });
});
var i = 0;
var text = "Røyken Videregående Skole";
var speed = 50;


var interval = setInterval(function changeBtn() {
    if (i < text.length) {
        document.getElementById("test").innerHTML += text.charAt(i);
        i++;
      } else if (i >= text.length) {
          i = 0;
          clearInterval(changeBtn);
          document.getElementById("test").innerHTML = "";
      }
}, speed);

firstFart.addEventListener("input",
function () {
    fart = 500 / firstFart.value
}
)
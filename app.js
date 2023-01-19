const number = document.querySelector(".number");
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        number.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("subtract")) {
        number.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("resetBtn")) {
        number.innerHTML = 0;
        setColor();
    }
});

function setColor() {
    if (number.innerHTML > 0) {
        number.style.color = "green";
    } else if (number.innerHTML < 0) {
        number.style.color = "red";
    } else if (number.innerHTML == 0) {
        number.style.color = "black";
    }
}

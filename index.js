let meniu = document.querySelector(".meniu");
let icon = document.querySelector(".fa-bars");

icon.addEventListener("click", () => {
    meniu.classList.toggle("visible");
} )

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


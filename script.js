const startButton = document.getElementById("startButton");

const message = document.querySelector(".message");

const lines = document.querySelectorAll(".line");


// Hide message initially
message.style.display = "none";


// Start the fairytale
startButton.addEventListener("click", () => {

    // Hide intro
    document.querySelector(".intro").style.display = "none";

    // Show message
    message.style.display = "flex";

    // Scroll to message
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Reveal lines one by one
    lines.forEach((line, index) => {

        setTimeout(() => {

            line.classList.add("show");

        }, index * 2200);

    });

});
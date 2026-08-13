document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("birthdayMusic");
    const shouldPlay = sessionStorage.getItem("startBirthdayMusic");

    if (shouldPlay === "yes" && music) {
        sessionStorage.removeItem("startBirthdayMusic");
        music.play().catch(err => {
            console.log("Audio play error:", err);
        });
    }
});
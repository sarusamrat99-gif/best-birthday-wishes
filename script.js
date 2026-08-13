document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("birthdayMusic");
    const shouldPlay = sessionStorage.getItem("startBirthdayMusic");

    if (music && shouldPlay === "yes") {
        sessionStorage.removeItem("startBirthdayMusic");

        // Attempt 1: Play immediately on page load
        const playPromise = music.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Browser blocked immediate autoplay. Tapping screen will play audio.");
                
                // Attempt 2: Play on the very first touch/click anywhere on the page
                const unlockAudio = () => {
                    music.play().catch(e => console.log("Audio play error:", e));
                    document.removeEventListener("click", unlockAudio);
                    document.removeEventListener("touchstart", unlockAudio);
                };

                document.addEventListener("click", unlockAudio);
                document.addEventListener("touchstart", unlockAudio);
            });
        }
    }
});

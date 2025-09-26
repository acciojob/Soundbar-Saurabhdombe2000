//your JS code here. If required.
 const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5", "sound6"];

    // Create audio elements dynamically
    const audios = {};
    sounds.forEach(name => {
      audios[name] = new Audio(`./sounds/${name}.mp3`);
    });

    // Select buttons
    const buttons = document.querySelectorAll(".btn");
    const stopBtn = document.querySelector(".stop");

    // Add event listeners
    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        stopAll();
        audios[sounds[index]].play();
      });
    });

    stopBtn.addEventListener("click", stopAll);

    function stopAll() {
      sounds.forEach(name => {
        audios[name].pause();
        audios[name].currentTime = 0; // Reset to start
      });
    }
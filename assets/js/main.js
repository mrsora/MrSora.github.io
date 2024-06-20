const txt = "Hello There! :wave:";
const speed = 75;
const emoji = document.getElementById("intro_hand_wave");
const intro_typewriter = document.getElementById("intro_typewriter")

let i = 0;
function typeWriter() {
    if (i < txt.length) {
        // intro_typewriter.innerHTML = intro_typewriter.innerHTML.slice(0, -1);
        intro_typewriter.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            intro_typewriter.innerHTML = "Hello There!";
            emoji.innerHTML = "👋";
        }, 100)

        console.log("Done!")

        return;
    }
}

function waveOnLoad() {
    emoji.classList.add("waving");
    setTimeout(() => {
        emoji.classList.remove("waving");
    }, 5000)
}

// setTimeout(() => {
//     document.getElementById("down_arrow").classList.add("hidden");
// }, 15000)

setTimeout(typeWriter, 1000);
setTimeout(waveOnLoad, 1000);
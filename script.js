const video = document.querySelector("video")
const progressRange = document.querySelector(".progress-range")
const progressBar = document.querySelector(".progress-bar")
const playBtn = document.getElementById("play-btn")
const volumeIcon = document.getElementById("volume-icon")
const volumeRange = document.querySelector(".volume-range")
const volumeBar = document.querySelector(".volume-bar")
const currentTime = document.querySelector(".time-elapsed")
const duration = document.querySelector(".time-duration")
const fullscreenBtn = document.querySelector(".fullscreen")

// Play & Pause ----------------------------------- //
showPlayIcon = () => {
    playBtn.classList.replace("fa-pause", "fa-play")
    playBtn.setAttribute("title", "Play")
}

togglePlay = () => {
    if(video.paused) {
        video.play()
        playBtn.classList.replace("fa-play", "fa-pause")
        playBtn.setAttribute("title", "Pause")
    } else {
        video.pause()
        showPlayIcon()
    }
}

// on video end, show play button
video.addEventListener("ended", showPlayIcon)


// Progress Bar ---------------------------------- //
// calculate display time format
displayTime = time => {
    const minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    seconds = seconds > 9 ? seconds : `0${seconds}`
    return `${minutes}:${seconds}`
}

// update progress bar as the video plays
updateProgress = () => {
    progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`
    currentTime.textContent = `${displayTime(video.currentTime)} /`
    duration.textContent = `${displayTime(video.duration)}`
}


// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //




// event listeners
playBtn.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)
video.addEventListener("timeupdate", updateProgress)
video.addEventListener("canplay", updateProgress)
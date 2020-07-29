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


// click to seek within the video
setProgress = (e) => {
    const newTime = e.offsetX / progressRange.offsetWidth
    progressBar.style.width = `${newTime * 100}%`
    video.currentTime = newTime * video.duration
    console.log(newTime)
}

// Volume Controls --------------------------- //
// volume bar
changeVolume = (e) => {
    let volume = e.offsetX / volumeRange.offsetWidth
    // rounding volume up or down
    if (volume < 0.1) {
        volume = 0
    }
    if (volume > 0.9) {
        volume = 1
    }

    volumeBar.style.width = `${volume * 100}%`
    video.volume = volume
    console.log(volume)

    // change icon depending to volume 
    volumeIcon.className = ""
    if (volume > 0.7) {
        volumeIcon.classList.add("fas", "fa-volume-up")
    } else if (volume < 0.7 && volume > 0) {
        volumeIcon.classList.add("fas", "fa-volume-down")
    } else if (volume === 0) {
        volumeIcon.classList.add("fas", "fa-volume-off")
    }
}


// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //




// event listeners
playBtn.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)
video.addEventListener("timeupdate", updateProgress)
video.addEventListener("canplay", updateProgress)
progressRange.addEventListener("click", setProgress)
volumeRange.addEventListener("click", changeVolume)
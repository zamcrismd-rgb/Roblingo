const homeScreen = document.getElementById("homeScreen");
const lesson1Screen = document.getElementById("lesson1Screen");
const lesson2Screen = document.getElementById("lesson2Screen");

const lesson1Btn = document.getElementById("lesson1Btn");
const lesson2Btn = document.getElementById("lesson2Btn");
const lesson2Text = document.getElementById("lesson2Text");

const backBtn1 = document.getElementById("backBtn1");
const backBtn2 = document.getElementById("backBtn2");

const waterCasualBtn = document.getElementById("waterCasualBtn");
const waterPoliteBtn = document.getElementById("waterPoliteBtn");
const bottleCasualBtn = document.getElementById("bottleCasualBtn");
const bottlePoliteBtn = document.getElementById("bottlePoliteBtn");

const micBtn1 = document.getElementById("micBtn1");
const micBtn2 = document.getElementById("micBtn2");

const completeBtn1 = document.getElementById("completeBtn1");
const completeBtn2 = document.getElementById("completeBtn2");

const recordingStatus1 = document.getElementById("recordingStatus1");
const recordingStatus2 = document.getElementById("recordingStatus2");

const recordingPlayerWrap1 = document.getElementById("recordingPlayerWrap1");
const recordingPlayerWrap2 = document.getElementById("recordingPlayerWrap2");

const successOverlay = document.getElementById("successOverlay");
const successTitle = document.getElementById("successTitle");
const successText = document.getElementById("successText");
const streakCount = document.getElementById("streakCount");

let currentRecorder = null;
let currentStream = null;
let currentAudioChunks = [];
let isRecording = false;
let activeMicButton = null;
let activeStatus = null;
let activeWrap = null;

function showScreen(screenToShow) {
    [homeScreen, lesson1Screen, lesson2Screen].forEach((screen) => {
        screen.classList.remove("active");
    });
    screenToShow.classList.add("active");
}

function updateStreakUI() {
    const streak = Number(localStorage.getItem("roblingo_streak")) || 0;
    streakCount.textContent = streak;
}

function animateUnlock(button) {
    button.classList.remove("just-unlocked");
    void button.offsetWidth;
    button.classList.add("just-unlocked");
}

function updateLessonLocks() {
    const lesson1Complete = localStorage.getItem("roblingo_lesson_1_complete") === "true";
    const lesson2AlreadyUnlocked = !lesson2Btn.disabled;

    if (lesson1Complete) {
        lesson2Btn.disabled = false;
        lesson2Btn.classList.remove("locked");
        lesson2Btn.classList.add("unlocked");
        lesson2Text.textContent = "bottle / Bottle";

        if (!lesson2AlreadyUnlocked) {
            animateUnlock(lesson2Btn);
        }
    } else {
        lesson2Btn.disabled = true;
        lesson2Btn.classList.add("locked");
        lesson2Btn.classList.remove("unlocked");
        lesson2Text.textContent = "Locked";
    }
}

function stopCurrentStream() {
    if (currentStream) {
        currentStream.getTracks().forEach((track) => track.stop());
        currentStream = null;
    }
}

function saveLessonCompletion(lessonNumber) {
    const today = new Date();
    const todayKey = today.toDateString();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toDateString();

    const lastCompleted = localStorage.getItem("roblingo_last_completed");
    let streak = Number(localStorage.getItem("roblingo_streak")) || 0;

    if (lastCompleted === todayKey) {
        // already counted today
    } else if (lastCompleted === yesterdayKey) {
        streak += 1;
    } else {
        streak = 1;
    }

    localStorage.setItem("roblingo_last_completed", todayKey);
    localStorage.setItem("roblingo_streak", String(streak));
    localStorage.setItem(`roblingo_lesson_${lessonNumber}_complete`, "true");

    updateStreakUI();
    updateLessonLocks();
}

function showSuccess(title, text, nextScreen = homeScreen) {
    successTitle.textContent = title;
    successText.textContent = text;
    successOverlay.classList.add("show");

    setTimeout(() => {
        successOverlay.classList.remove("show");
        showScreen(nextScreen);
    }, 1500);
}

function markButtonPlaying(button, audio) {
    button.classList.add("playing");

    const clear = () => {
        button.classList.remove("playing");
        audio.removeEventListener("ended", clear);
        audio.removeEventListener("pause", clear);
    };

    audio.addEventListener("ended", clear);
    audio.addEventListener("pause", clear);
}

function playAudio(path, statusEl, label, button) {
    const audio = new Audio(path);

    audio.onloadeddata = () => {
        statusEl.textContent = `Playing ${label}...`;
    };

    audio.onerror = () => {
        statusEl.textContent = `Could not load ${path}`;
        console.error("Could not load:", path);
    };

    audio.onended = () => {
        statusEl.textContent = `${label} finished.`;
    };

    audio.play().then(() => {
        if (button) {
            markButtonPlaying(button, audio);
        }
    }).catch((error) => {
        statusEl.textContent = `Could not play ${path}`;
        console.error("Could not play:", path, error);
    });
}

function showCheckingThenResult(statusEl) {
    statusEl.textContent = "Checking pronunciation...";

    setTimeout(() => {
        statusEl.textContent = "Good pronunciation 👍";
    }, 1500);
}

async function handleRecording(micButton, statusEl, wrapEl) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        statusEl.textContent = "Microphone is not supported on this browser.";
        return;
    }

    if (!isRecording) {
        try {
            wrapEl.innerHTML = "";

            currentStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            currentRecorder = new MediaRecorder(currentStream);
            currentAudioChunks = [];

            activeMicButton = micButton;
            activeStatus = statusEl;
            activeWrap = wrapEl;

            currentRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    currentAudioChunks.push(event.data);
                }
            };

            currentRecorder.onstop = () => {
                isRecording = false;
                activeMicButton.classList.remove("recording");
                activeMicButton.textContent = "🎤 Tap to Speak";

                const audioBlob = new Blob(currentAudioChunks, { type: "audio/mp4" });
                const audioUrl = URL.createObjectURL(audioBlob);

                const player = document.createElement("audio");
                player.controls = true;
                player.src = audioUrl;

                activeWrap.innerHTML = "";
                activeWrap.appendChild(player);

                stopCurrentStream();
                showCheckingThenResult(activeStatus);
            };

            currentRecorder.start();
            isRecording = true;
            micButton.classList.add("recording");
            micButton.textContent = "■ Stop Recording";
            statusEl.textContent = "Recording...";
        } catch (error) {
            statusEl.textContent = "Microphone permission denied.";
            console.error("Mic error:", error);
            stopCurrentStream();
        }
    } else {
        currentRecorder.stop();
    }
}

lesson1Btn.addEventListener("click", () => showScreen(lesson1Screen));

lesson2Btn.addEventListener("click", () => {
    if (!lesson2Btn.disabled) {
        showScreen(lesson2Screen);
    }
});

backBtn1.addEventListener("click", () => showScreen(homeScreen));
backBtn2.addEventListener("click", () => showScreen(homeScreen));

waterCasualBtn.addEventListener("click", () => {
    playAudio("./audio/water-casual.m4a", recordingStatus1, "casual audio", waterCasualBtn);
});

waterPoliteBtn.addEventListener("click", () => {
    playAudio("./audio/water-polite.m4a", recordingStatus1, "polite audio", waterPoliteBtn);
});

bottleCasualBtn.addEventListener("click", () => {
    playAudio("./audio/bottle-casual.m4a", recordingStatus2, "casual audio", bottleCasualBtn);
});

bottlePoliteBtn.addEventListener("click", () => {
    playAudio("./audio/bottle-polite.m4a", recordingStatus2, "polite audio", bottlePoliteBtn);
});

micBtn1.addEventListener("click", () => {
    handleRecording(micBtn1, recordingStatus1, recordingPlayerWrap1);
});

micBtn2.addEventListener("click", () => {
    handleRecording(micBtn2, recordingStatus2, recordingPlayerWrap2);
});

completeBtn1.addEventListener("click", () => {
    saveLessonCompletion(1);
    showSuccess("Nice one", "Lesson 1 complete");
});

completeBtn2.addEventListener("click", () => {
    saveLessonCompletion(2);
    showSuccess("Brilliant", "Lesson 2 complete");
});

if (!localStorage.getItem("roblingo_version")) {
    localStorage.setItem("roblingo_version", "1");
}

updateStreakUI();
updateLessonLocks();
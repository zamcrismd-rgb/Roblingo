const splashScreen = document.getElementById("splashScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const appScreen = document.getElementById("appScreen");
const lessonScreen = document.getElementById("lessonScreen");
const startBtn = document.getElementById("startBtn");

const homePage = document.getElementById("homePage");
const lessonsPage = document.getElementById("lessonsPage");
const shopPage = document.getElementById("shopPage");
const updatesPage = document.getElementById("updatesPage");
const lessonList = document.getElementById("lessonList");

const navButtons = document.querySelectorAll(".nav-btn");

const backBtn = document.getElementById("backBtn");
const casualBtn = document.getElementById("casualBtn");
const politeBtn = document.getElementById("politeBtn");
const micBtn = document.getElementById("micBtn");
const completeBtn = document.getElementById("completeBtn");

const lessonTag = document.getElementById("lessonTag");
const mainWord = document.getElementById("mainWord");
const lessonSubtext = document.getElementById("lessonSubtext");
const casualNote = document.getElementById("casualNote");
const politeNote = document.getElementById("politeNote");

const recordingStatus = document.getElementById("recordingStatus");
const recordingPlayerWrap = document.getElementById("recordingPlayerWrap");

const successOverlay = document.getElementById("successOverlay");
const successTitle = document.getElementById("successTitle");
const successText = document.getElementById("successText");
const successParrot = document.getElementById("successParrot");

const streakCount = document.getElementById("streakCount");
const xpText = document.getElementById("xpText");
const xpTopText = document.getElementById("xpTopText");
const xpFill = document.getElementById("xpFill");
const gemsDisplay = document.getElementById("gemsDisplay");
const freezeCountDisplay = document.getElementById("freezeCountDisplay");
const buyFreezeBtn = document.getElementById("buyFreezeBtn");
const parrotMascot = document.getElementById("parrotMascot");

const XP_PER_LESSON = 10;
const GEMS_PER_LESSON = 5;
const XP_BAR_MAX = 100;
const FREEZE_COST = 50;

const lessons = [
  { id: 1, title: "Lesson 1", word: "Water", casual: "water", polite: "Water", casualAudio: "./audio/water-casual.m4a", politeAudio: "./audio/water-polite.m4a", soon: false, singlePronunciation: false },
  { id: 2, title: "Lesson 2", word: "Bottle", casual: "bottle", polite: "Bottle", casualAudio: "./audio/bottle-casual.m4a", politeAudio: "./audio/bottle-polite.m4a", soon: false, singlePronunciation: false },
  { id: 3, title: "Lesson 3", word: "Better", casual: "better", polite: "Better", casualAudio: "./audio/better-casual.m4a", politeAudio: "./audio/better-polite.m4a", soon: false, singlePronunciation: false },
  { id: 4, title: "Lesson 4", word: "City", casual: "city", polite: "City", casualAudio: "./audio/city-causal.m4a", politeAudio: "./audio/city-polite.m4a", soon: false, singlePronunciation: false },
  { id: 5, title: "Lesson 5", word: "Letter", casual: "letter", polite: "Letter", casualAudio: "./audio/letter-causal.m4a", politeAudio: "./audio/letter-polite.m4a", soon: false, singlePronunciation: false },
  { id: 6, title: "Lesson 6", word: "Party", casual: "party", polite: "Party", casualAudio: "./audio/party-casual.m4a", politeAudio: "./audio/party-polite.m4a", soon: false, singlePronunciation: false },
  { id: 7, title: "Lesson 7", word: "Meeting", casual: "meeting", polite: "Meeting", casualAudio: "./audio/meeting-casual.m4a", politeAudio: "./audio/meeting-polite.m4a", soon: false, singlePronunciation: false },
  { id: 8, title: "Lesson 8", word: "Chocolate", casual: "chocolate", polite: "Chocolate", casualAudio: "./audio/chocolate-casual.m4a", politeAudio: "./audio/chocolate-polite.m4a", soon: false, singlePronunciation: false },
  { id: 9, title: "Lesson 9", word: "Morning", casual: "morning", polite: "Morning", casualAudio: "./audio/morning-casual.m4a", politeAudio: "./audio/morning-polite.m4a", soon: false, singlePronunciation: false },
  { id: 10, title: "Lesson 10", word: "Tuesday", casual: "tuesday", polite: "Tuesday", casualAudio: "./audio/tuesday-casual.m4a", politeAudio: "./audio/tuesday-polite.m4a", soon: false, singlePronunciation: false },
  { id: 11, title: "Lesson 11", word: "Little", casual: "little", polite: "Little", casualAudio: "./audio/little-casual.m4a", politeAudio: "./audio/little-polite.m4a", soon: false, singlePronunciation: false },
  { id: 12, title: "Lesson 12", word: "Table", casual: "table", polite: "Table", casualAudio: "./audio/table-casual.m4a", politeAudio: "./audio/table-polite.m4a", soon: false, singlePronunciation: false },
  { id: 13, title: "Lesson 13", word: "Family", casual: "family", polite: "Family", casualAudio: "./audio/family-casual.m4a", politeAudio: "./audio/family-polite.m4a", soon: false, singlePronunciation: false },
  { id: 14, title: "Lesson 14", word: "Window", casual: "Window", polite: "", casualAudio: "./audio/window.m4a", politeAudio: "", soon: false, singlePronunciation: true, singleText: "just one pronunciation for window :)" },
  { id: 15, title: "Lesson 15", word: "Again", casual: "again", polite: "Again", casualAudio: "./audio/again-casual.m4a", politeAudio: "./audio/again-polite.m4a", soon: false, singlePronunciation: false },
  { id: 16, title: "Lesson 16", word: "Office", casual: "Office", polite: "", casualAudio: "./audio/office.m4a", politeAudio: "", soon: false, singlePronunciation: true, singleText: "just one pronunciation for office :)" },
  { id: 17, title: "Lesson 17", word: "Question", casual: "Question", polite: "", casualAudio: "./audio/question.m4a", politeAudio: "", soon: false, singlePronunciation: true, singleText: "just one pronunciation for question :)" },
  { id: 18, title: "Lesson 18", word: "Teacher", casual: "teacher", polite: "Teacher", casualAudio: "./audio/teacher-casual.m4a", politeAudio: "./audio/teacher-polite.m4a", soon: false, singlePronunciation: false },
  { id: 19, title: "Lesson 19", word: "Problem", casual: "Problem", polite: "", casualAudio: "./audio/problem.m4a", politeAudio: "", soon: false, singlePronunciation: true, singleText: "just one pronunciation for problem :)" },
  { id: 20, title: "Lesson 20", word: "Pardon", casual: "Pardon", polite: "", casualAudio: "./audio/pardon.m4a", politeAudio: "", soon: false, singlePronunciation: true, singleText: "just one pronunciation for pardon :)" },
  { id: 21, title: "Lesson 21", word: "Coming Soon", casual: "", polite: "", casualAudio: "", politeAudio: "", soon: true, singlePronunciation: false }
];

let currentLesson = null;
let currentRecorder = null;
let currentStream = null;
let currentAudioChunks = [];
let isRecording = false;

function showOnlyScreen(screenToShow) {
  [splashScreen, welcomeScreen, appScreen, lessonScreen].forEach((screen) => {
    screen.classList.remove("active");
  });
  screenToShow.classList.add("active");
}

function showPage(pageId) {
  [homePage, lessonsPage, shopPage, updatesPage].forEach((page) => {
    page.classList.remove("active");
  });

  navButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add("active");
  }

  const activeButton = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

function getStoredXP() {
  return Number(localStorage.getItem("roblingo_xp")) || 0;
}

function getStoredGems() {
  return Number(localStorage.getItem("roblingo_gems")) || 0;
}

function getStoredFreezes() {
  return Number(localStorage.getItem("roblingo_freezes")) || 0;
}

function updateXPUI() {
  const xp = getStoredXP();
  const currentBarXP = xp % XP_BAR_MAX;
  const text = `${currentBarXP} / ${XP_BAR_MAX}`;

  xpText.textContent = text;
  xpTopText.textContent = text;
  xpFill.style.width = `${(currentBarXP / XP_BAR_MAX) * 100}%`;
}

function updateStreakUI() {
  const streak = Number(localStorage.getItem("roblingo_streak")) || 0;
  streakCount.textContent = streak;
}

function updateGemsUI() {
  gemsDisplay.textContent = getStoredGems();
  freezeCountDisplay.textContent = getStoredFreezes();
}

function animateUnlock(button) {
  button.classList.remove("just-unlocked");
  void button.offsetWidth;
  button.classList.add("just-unlocked");
}

function animateParrotBounce() {
  if (!parrotMascot) return;
  parrotMascot.classList.remove("happy");
  void parrotMascot.offsetWidth;
  parrotMascot.classList.add("happy");
}

function animateParrotWiggle() {
  if (!parrotMascot) return;
  parrotMascot.classList.remove("wiggle");
  void parrotMascot.offsetWidth;
  parrotMascot.classList.add("wiggle");
}

function animateSuccessParrot() {
  if (!successParrot) return;
  successParrot.classList.remove("bounce");
  void successParrot.offsetWidth;
  successParrot.classList.add("bounce");
}

function stopSuccessParrot() {
  if (!successParrot) return;
  successParrot.classList.remove("bounce");
}

function isLessonComplete(lessonId) {
  return localStorage.getItem(`roblingo_lesson_${lessonId}_complete`) === "true";
}

function isLessonUnlocked(lessonId) {
  if (lessonId === 1) return true;
  return isLessonComplete(lessonId - 1);
}

function getLessonSubtitle(lesson) {
  if (lesson.soon) return "Coming soon";
  if (!isLessonUnlocked(lesson.id)) return "Locked";
  if (lesson.singlePronunciation) return lesson.singleText;
  return `${lesson.casual} / ${lesson.polite}`;
}

function renderLessons(previousUnlockedSet = new Set()) {
  lessonList.innerHTML = "";

  lessons.forEach((lesson) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lesson-card";

    const complete = isLessonComplete(lesson.id);
    const unlocked = isLessonUnlocked(lesson.id);

    if (lesson.soon) {
      button.classList.add("coming-soon");
      button.disabled = true;
    } else if (!unlocked) {
      button.classList.add("locked");
      button.disabled = true;
    } else if (complete) {
      button.classList.add("completed", "unlocked");
    } else {
      button.classList.add("unlocked");
    }

    button.innerHTML = `
      <span class="lesson-number">${lesson.id}</span>
      <div class="lesson-text">
        <strong>${lesson.title}</strong>
        <p>${getLessonSubtitle(lesson)}</p>
      </div>
    `;

    if (!lesson.soon && unlocked) {
      button.addEventListener("click", () => openLesson(lesson.id));
    }

    lessonList.appendChild(button);

    if (!previousUnlockedSet.has(lesson.id) && unlocked && lesson.id !== 1 && !lesson.soon) {
      animateUnlock(button);
    }
  });
}

function getUnlockedLessonIds() {
  const unlockedIds = new Set();

  lessons.forEach((lesson) => {
    if (!lesson.soon && isLessonUnlocked(lesson.id)) {
      unlockedIds.add(lesson.id);
    }
  });

  return unlockedIds;
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
    const freezes = getStoredFreezes();

    if (lastCompleted && freezes > 0) {
      localStorage.setItem("roblingo_freezes", String(freezes - 1));
      streak += 1;
    } else {
      streak = 1;
    }
  }

  localStorage.setItem("roblingo_last_completed", todayKey);
  localStorage.setItem("roblingo_streak", String(streak));
  localStorage.setItem(`roblingo_lesson_${lessonNumber}_complete`, "true");

  if (!localStorage.getItem(`roblingo_lesson_${lessonNumber}_xp_awarded`)) {
    const currentXP = getStoredXP();
    const currentGems = getStoredGems();

    localStorage.setItem("roblingo_xp", String(currentXP + XP_PER_LESSON));
    localStorage.setItem("roblingo_gems", String(currentGems + GEMS_PER_LESSON));
    localStorage.setItem(`roblingo_lesson_${lessonNumber}_xp_awarded`, "true");
  }

  updateStreakUI();
  updateXPUI();
  updateGemsUI();
}

function showSuccess(title, text, previousUnlockedSet = new Set()) {
  successTitle.textContent = title;
  successText.textContent = text;
  successOverlay.classList.add("show");
  animateSuccessParrot();

  setTimeout(() => {
    successOverlay.classList.remove("show");
    stopSuccessParrot();
    showOnlyScreen(appScreen);
    showPage("lessonsPage");
    renderLessons(previousUnlockedSet);

    setTimeout(() => {
      animateParrotBounce();
    }, 100);
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
  if (!path) {
    statusEl.textContent = "Audio not added yet.";
    return;
  }

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

  audio.play()
    .then(() => {
      if (button) {
        markButtonPlaying(button, audio);
      }
      animateParrotWiggle();
    })
    .catch((error) => {
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

      currentRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          currentAudioChunks.push(event.data);
        }
      };

      currentRecorder.onstop = () => {
        isRecording = false;
        micButton.classList.remove("recording");
        micButton.textContent = "🎤 Tap to Speak";

        const audioBlob = new Blob(currentAudioChunks, { type: "audio/mp4" });
        const audioUrl = URL.createObjectURL(audioBlob);

        const player = document.createElement("audio");
        player.controls = true;
        player.src = audioUrl;

        wrapEl.innerHTML = "";
        wrapEl.appendChild(player);

        stopCurrentStream();
        showCheckingThenResult(statusEl);
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

function updateLessonButtonsForMode(lesson) {
  if (lesson.singlePronunciation) {
    casualBtn.style.display = "flex";
    politeBtn.style.display = "none";

    casualBtn.querySelector(".audio-title").textContent = "🔊 Listen";
    casualNote.textContent = lesson.word;
  } else {
    casualBtn.style.display = "flex";
    politeBtn.style.display = "flex";

    casualBtn.querySelector(".audio-title").textContent = "🔊 Casual";
    politeBtn.querySelector(".audio-title").textContent = "🔊 Polite";

    casualNote.textContent = lesson.casual;
    politeNote.textContent = lesson.polite;
  }
}

function openLesson(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson || lesson.soon) return;

  currentLesson = lesson;

  lessonTag.textContent = lesson.title;
  mainWord.textContent = lesson.word;
  lessonSubtext.textContent = lesson.singlePronunciation
    ? lesson.singleText
    : "Compare the casual and polite pronunciation.";

  updateLessonButtonsForMode(lesson);

  recordingStatus.textContent = "Tap a pronunciation, then record yourself.";
  recordingPlayerWrap.innerHTML = "";
  micBtn.classList.remove("recording");
  micBtn.textContent = "🎤 Tap to Speak";

  showOnlyScreen(lessonScreen);
}

function buyFreeze() {
  const gems = getStoredGems();
  const freezes = getStoredFreezes();

  if (gems < FREEZE_COST) {
    alert("Not enough gems for a Streak Freeze.");
    return;
  }

  localStorage.setItem("roblingo_gems", String(gems - FREEZE_COST));
  localStorage.setItem("roblingo_freezes", String(freezes + 1));
  updateGemsUI();
}

function seedStartingProgress() {
  if (localStorage.getItem("roblingo_seeded_progress_v21") === "true") return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  localStorage.setItem("roblingo_streak", "2");
  localStorage.setItem("roblingo_last_completed", yesterday.toDateString());

  localStorage.setItem("roblingo_lesson_1_complete", "true");
  localStorage.setItem("roblingo_lesson_2_complete", "true");

  localStorage.setItem("roblingo_lesson_1_xp_awarded", "true");
  localStorage.setItem("roblingo_lesson_2_xp_awarded", "true");

  localStorage.setItem("roblingo_xp", String(XP_PER_LESSON * 2));
  localStorage.setItem("roblingo_gems", "10");
  localStorage.setItem("roblingo_freezes", "0");
  localStorage.setItem("roblingo_version", "2.1");
  localStorage.setItem("roblingo_seeded_progress_v21", "true");
}

backBtn.addEventListener("click", () => {
  showOnlyScreen(appScreen);
  showPage("lessonsPage");
});

casualBtn.addEventListener("click", () => {
  if (!currentLesson) return;
  const label = currentLesson.singlePronunciation ? "audio" : "casual audio";
  playAudio(currentLesson.casualAudio, recordingStatus, label, casualBtn);
});

politeBtn.addEventListener("click", () => {
  if (!currentLesson || currentLesson.singlePronunciation) return;
  playAudio(currentLesson.politeAudio, recordingStatus, "polite audio", politeBtn);
});

micBtn.addEventListener("click", () => {
  handleRecording(micBtn, recordingStatus, recordingPlayerWrap);
});

completeBtn.addEventListener("click", () => {
  if (!currentLesson) return;

  const previousUnlockedSet = getUnlockedLessonIds();
  saveLessonCompletion(currentLesson.id);

  const nextLesson = lessons.find(
    (lesson) => lesson.id === currentLesson.id + 1 && !lesson.soon
  );

  if (nextLesson) {
    showSuccess("Nice one", `${currentLesson.title} complete • +10 XP • +5 Gems`, previousUnlockedSet);
  } else {
    showSuccess("Brilliant", "You finished all available lessons", previousUnlockedSet);
  }
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

startBtn.addEventListener("click", () => {
  localStorage.setItem("roblingo_started", "true");
  showOnlyScreen(appScreen);
  showPage("homePage");
});

buyFreezeBtn.addEventListener("click", buyFreeze);

seedStartingProgress();
updateStreakUI();
updateXPUI();
updateGemsUI();
renderLessons();
showPage("homePage");

setTimeout(() => {
  const hasStarted = localStorage.getItem("roblingo_started") === "true";
  if (hasStarted) {
    showOnlyScreen(appScreen);
    showPage("homePage");
  } else {
    showOnlyScreen(welcomeScreen);
  }
}, 2200);
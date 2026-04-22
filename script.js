const splashScreen = document.getElementById("splashScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const appScreen = document.getElementById("appScreen");
const lessonScreen = document.getElementById("lessonScreen");
const startBtn = document.getElementById("startBtn");

const homePage = document.getElementById("homePage");
const lessonsPage = document.getElementById("lessonsPage");
const shopPage = document.getElementById("shopPage");
const builderPage = document.getElementById("builderPage");
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
const xpLevelText = document.getElementById("xpLevelText");
const levelNumber = document.getElementById("levelNumber");
const gemsDisplay = document.getElementById("gemsDisplay");
const freezeCountDisplay = document.getElementById("freezeCountDisplay");
const buyFreezeBtn = document.getElementById("buyFreezeBtn");
const parrotMascot = document.getElementById("parrotMascot");

const roblingoPet = document.getElementById("roblingoPet");
const petHat = document.getElementById("petHat");
const petGlasses = document.getElementById("petGlasses");
const petBow = document.getElementById("petBow");

const unlockHatBtn = document.getElementById("unlockHatBtn");
const unlockGlassesBtn = document.getElementById("unlockGlassesBtn");
const unlockBowBtn = document.getElementById("unlockBowBtn");

const equipHatBtn = document.getElementById("equipHatBtn");
const equipGlassesBtn = document.getElementById("equipGlassesBtn");
const equipBowBtn = document.getElementById("equipBowBtn");

const hatOwnedText = document.getElementById("hatOwnedText");
const glassesOwnedText = document.getElementById("glassesOwnedText");
const bowOwnedText = document.getElementById("bowOwnedText");

const colourButtons = document.querySelectorAll(".colour-btn");

const XP_PER_LESSON = 10;
const GEMS_PER_LESSON = 5;
const XP_LEVEL_SIZE = 100;
const FREEZE_COST = 50;

const lessons = [
  { id: 1, title: "Lesson 1", word: "Water", definition: "A clear liquid that people drink.", audio: "./audio/water.m4a" },
  { id: 2, title: "Lesson 2", word: "Bottle", definition: "A container used for drinks or liquids.", audio: "./audio/bottle.m4a" },
  { id: 3, title: "Lesson 3", word: "Better", definition: "More good or improved.", audio: "./audio/better.m4a" },
  { id: 4, title: "Lesson 4", word: "City", definition: "A large town where many people live and work.", audio: "./audio/city.m4a" },
  { id: 5, title: "Lesson 5", word: "Letter", definition: "A written character in the alphabet.", audio: "./audio/letter.m4a" },
  { id: 6, title: "Lesson 6", word: "Party", definition: "A social event where people meet and celebrate.", audio: "./audio/party.m4a" },
  { id: 7, title: "Lesson 7", word: "Meeting", definition: "A time when people come together to talk.", audio: "./audio/meeting.m4a" },
  { id: 8, title: "Lesson 8", word: "Chocolate", definition: "A sweet food made from cocoa.", audio: "./audio/chocolate.m4a" },
  { id: 9, title: "Lesson 9", word: "Morning", definition: "The early part of the day.", audio: "./audio/morning.m4a" },
  { id: 10, title: "Lesson 10", word: "Tuesday", definition: "The day after Monday.", audio: "./audio/tuesday.m4a" },

  { id: 11, title: "Lesson 11", word: "Little", definition: "Small in size or amount.", audio: "./audio/little.m4a" },
  { id: 12, title: "Lesson 12", word: "Table", definition: "A piece of furniture with a flat top.", audio: "./audio/table.m4a" },
  { id: 13, title: "Lesson 13", word: "Family", definition: "The people related to you.", audio: "./audio/family.m4a" },
  { id: 14, title: "Lesson 14", word: "Window", definition: "An opening in a wall with glass in it.", audio: "./audio/window.m4a" },
  { id: 15, title: "Lesson 15", word: "Again", definition: "One more time.", audio: "./audio/again.m4a" },
  { id: 16, title: "Lesson 16", word: "Office", definition: "A place where people do work at desks.", audio: "./audio/office.m4a" },
  { id: 17, title: "Lesson 17", word: "Question", definition: "Something you ask when you want an answer.", audio: "./audio/question.m4a" },
  { id: 18, title: "Lesson 18", word: "Teacher", definition: "A person who helps students learn.", audio: "./audio/teacher.m4a" },
  { id: 19, title: "Lesson 19", word: "Problem", definition: "Something difficult that needs to be solved.", audio: "./audio/problem.m4a" },
  { id: 20, title: "Lesson 20", word: "Pardon", definition: "A polite word used when asking someone to repeat.", audio: "./audio/pardon.m4a" },

  { id: 21, title: "Lesson 21", word: "Today", definition: "This current day.", audio: "./audio/today.m4a" },
  { id: 22, title: "Lesson 22", word: "Tomorrow", definition: "The day after today.", audio: "./audio/tomorrow.m4a" },
  { id: 23, title: "Lesson 23", word: "Yesterday", definition: "The day before today.", audio: "./audio/yesterday.m4a" },
  { id: 24, title: "Lesson 24", word: "School", definition: "A place where children go to learn.", audio: "./audio/school.m4a" },
  { id: 25, title: "Lesson 25", word: "Student", definition: "A person who is learning.", audio: "./audio/student.m4a" },
  { id: 26, title: "Lesson 26", word: "Computer", definition: "An electronic machine used for work or study.", audio: "./audio/computer.m4a" },
  { id: 27, title: "Lesson 27", word: "Holiday", definition: "A time for rest or travel away from work or school.", audio: "./audio/holiday.m4a" },
  { id: 28, title: "Lesson 28", word: "Airport", definition: "A place where planes arrive and leave.", audio: "./audio/airport.m4a" },
  { id: 29, title: "Lesson 29", word: "Breakfast", definition: "The first meal of the day.", audio: "./audio/breakfast.m4a" },
  { id: 30, title: "Lesson 30", word: "Favourite", definition: "Something you like the most.", audio: "./audio/favourite.m4a" },

  { id: 31, title: "Lesson 31", word: "Garden", definition: "An outdoor area where plants grow.", audio: "./audio/garden.m4a" },
  { id: 32, title: "Lesson 32", word: "Village", definition: "A small place where people live, smaller than a town.", audio: "./audio/village.m4a" },
  { id: 33, title: "Lesson 33", word: "Weather", definition: "The condition of the sky, rain, sun, or wind.", audio: "./audio/weather.m4a" },
  { id: 34, title: "Lesson 34", word: "Travel", definition: "To go from one place to another.", audio: "./audio/travel.m4a" },
  { id: 35, title: "Lesson 35", word: "Station", definition: "A place where trains or buses stop.", audio: "./audio/station.m4a" },
  { id: 36, title: "Lesson 36", word: "Kitchen", definition: "The room where food is cooked.", audio: "./audio/kitchen.m4a" },
  { id: 37, title: "Lesson 37", word: "Dinner", definition: "The main meal, often eaten in the evening.", audio: "./audio/dinner.m4a" },
  { id: 38, title: "Lesson 38", word: "Phone", definition: "A device used to call or message people.", audio: "./audio/phone.m4a" },
  { id: 39, title: "Lesson 39", word: "Picture", definition: "An image, photo, or drawing.", audio: "./audio/picture.m4a" },
  { id: 40, title: "Lesson 40", word: "Music", definition: "Sounds arranged in a pleasant way.", audio: "./audio/music.m4a" },

  { id: 41, title: "Lesson 41", word: "Friend", definition: "A person you like and know well.", audio: "./audio/friend.m4a" },
  { id: 42, title: "Lesson 42", word: "People", definition: "More than one person.", audio: "./audio/people.m4a" },
  { id: 43, title: "Lesson 43", word: "London", definition: "The capital city of the United Kingdom.", audio: "./audio/london.m4a" },
  { id: 44, title: "Lesson 44", word: "English", definition: "The language spoken in England and many other places.", audio: "./audio/english.m4a" },
  { id: 45, title: "Lesson 45", word: "Saturday", definition: "The day after Friday.", audio: "./audio/saturday.m4a" },
  { id: 46, title: "Lesson 46", word: "Sunday", definition: "The day after Saturday.", audio: "./audio/sunday.m4a" },
  { id: 47, title: "Lesson 47", word: "Orange", definition: "A round citrus fruit and also a colour.", audio: "./audio/orange.m4a" },
  { id: 48, title: "Lesson 48", word: "Purple", definition: "A colour between red and blue.", audio: "./audio/purple.m4a" },
  { id: 49, title: "Lesson 49", word: "Camera", definition: "A device used to take photos or videos.", audio: "./audio/camera.m4a" },
  { id: 50, title: "Lesson 50", word: "Market", definition: "A place where goods are bought and sold.", audio: "./audio/market.m4a" }
];

const sections = [
  {
    id: 1,
    title: "Section 1",
    subtitle: "Basic English pronunciation words",
    lessonIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    comingSoon: false
  },
  {
    id: 2,
    title: "Section 2",
    subtitle: "Everyday speaking words",
    lessonIds: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    comingSoon: false
  },
  {
    id: 3,
    title: "Section 3",
    subtitle: "Useful daily vocabulary",
    lessonIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    comingSoon: false
  },
  {
    id: 4,
    title: "Section 4",
    subtitle: "Speaking confidence words",
    lessonIds: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    comingSoon: false
  },
  {
    id: 5,
    title: "Section 5",
    subtitle: "Harder words",
    lessonIds: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    comingSoon: true
  }
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
  [homePage, lessonsPage, shopPage, builderPage, updatesPage].forEach((page) => {
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
  const currentBarXP = xp % XP_LEVEL_SIZE;
  const level = Math.floor(xp / XP_LEVEL_SIZE) + 1;

  xpText.textContent = `${xp} XP`;
  xpTopText.textContent = `${xp} XP`;
  levelNumber.textContent = level;
  xpLevelText.textContent = `${currentBarXP} / ${XP_LEVEL_SIZE} to next level`;
  xpFill.style.width = `${(currentBarXP / XP_LEVEL_SIZE) * 100}%`;
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
  if (!isLessonUnlocked(lesson.id)) return "Locked";
  return lesson.definition;
}

function createLessonCard(lesson, previousUnlockedSet = new Set()) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "lesson-card";

  const complete = isLessonComplete(lesson.id);
  const unlocked = isLessonUnlocked(lesson.id);

  if (!unlocked) {
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
      <strong>${lesson.word}</strong>
      <p>${getLessonSubtitle(lesson)}</p>
    </div>
  `;

  if (unlocked) {
    button.addEventListener("click", () => openLesson(lesson.id));
  }

  if (!previousUnlockedSet.has(lesson.id) && unlocked && lesson.id !== 1) {
    setTimeout(() => animateUnlock(button), 60);
  }

  return button;
}

function renderLessons(previousUnlockedSet = new Set()) {
  lessonList.innerHTML = "";

  sections.forEach((section) => {
    const sectionButton = document.createElement("button");
    sectionButton.type = "button";
    sectionButton.className = "section-toggle";

    sectionButton.innerHTML = `
      <div class="section-toggle-head">
        <div>
          <h3>${section.title}</h3>
          <p>${section.subtitle}${section.comingSoon ? " • Coming soon" : ""}</p>
        </div>
        <span class="section-arrow">${section.comingSoon ? "🔒" : "⌄"}</span>
      </div>
    `;

    const lessonsWrap = document.createElement("div");
    lessonsWrap.className = "section-lessons";

    section.lessonIds.forEach((id) => {
      const lesson = lessons.find((item) => item.id === id);
      if (!lesson) return;
      lessonsWrap.appendChild(createLessonCard(lesson, previousUnlockedSet));
    });

    if (!section.comingSoon) {
      sectionButton.addEventListener("click", () => {
        const isOpen = lessonsWrap.classList.contains("open");
        lessonsWrap.classList.toggle("open", !isOpen);
        sectionButton.classList.toggle("open", !isOpen);
      });
    } else {
      sectionButton.disabled = true;
      sectionButton.style.cursor = "not-allowed";
      sectionButton.style.opacity = "0.85";
    }

    lessonList.appendChild(sectionButton);

    if (!section.comingSoon) {
      lessonList.appendChild(lessonsWrap);
    }
  });
}

function getUnlockedLessonIds() {
  const unlockedIds = new Set();

  lessons.forEach((lesson) => {
    if (isLessonUnlocked(lesson.id)) {
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
  updatePetUI();
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
  casualBtn.style.display = "flex";
  politeBtn.style.display = "none";

  casualBtn.querySelector(".audio-title").textContent = "🔊 Listen";
  casualNote.textContent = lesson.word;
}

function openLesson(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson) return;

  currentLesson = lesson;

  lessonTag.textContent = lesson.title;
  mainWord.textContent = lesson.word;
  lessonSubtext.textContent = lesson.definition;

  updateLessonButtonsForMode(lesson);

  recordingStatus.textContent = "Tap listen, then record yourself.";
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

function hasAccessory(name) {
  return localStorage.getItem(`roblingo_accessory_${name}`) === "true";
}

function isEquipped(name) {
  return localStorage.getItem(`roblingo_equipped_${name}`) === "true";
}

function setEquipped(name, value) {
  localStorage.setItem(`roblingo_equipped_${name}`, String(value));
}

function updatePetColour(colour) {
  const colourMap = {
    green: { main: "#36c46b", wing: "#27a85a", belly: "#dff8ea" },
    blue: { main: "#4aa8ff", wing: "#327fd3", belly: "#e6f4ff" },
    pink: { main: "#ff6da8", wing: "#e04f8a", belly: "#ffe4ef" },
    yellow: { main: "#ffcf4d", wing: "#e0b132", belly: "#fff6d8" },
    purple: { main: "#9c6dff", wing: "#7b4fe0", belly: "#efe6ff" }
  };

  const selected = colourMap[colour] || colourMap.green;

  roblingoPet.style.setProperty("--pet-main", selected.main);
  roblingoPet.style.setProperty("--pet-wing", selected.wing);
  roblingoPet.style.setProperty("--pet-belly", selected.belly);

  localStorage.setItem("roblingo_pet_colour", colour);

  colourButtons.forEach((btn) => {
    btn.classList.toggle("active-colour", btn.dataset.colour === colour);
  });
}

function updatePetUI() {
  const hatOwned = hasAccessory("hat");
  const glassesOwned = hasAccessory("glasses");
  const bowOwned = hasAccessory("bow");

  const hatEquipped = hatOwned && isEquipped("hat");
  const glassesEquipped = glassesOwned && isEquipped("glasses");
  const bowEquipped = bowOwned && isEquipped("bow");

  petHat.classList.toggle("hidden", !hatEquipped);
  petGlasses.classList.toggle("hidden", !glassesEquipped);
  petBow.classList.toggle("hidden", !bowEquipped);

  hatOwnedText.textContent = hatOwned ? (hatEquipped ? "Equipped" : "Owned") : "Locked";
  glassesOwnedText.textContent = glassesOwned ? (glassesEquipped ? "Equipped" : "Owned") : "Locked";
  bowOwnedText.textContent = bowOwned ? (bowEquipped ? "Equipped" : "Owned") : "Locked";

  unlockHatBtn.textContent = hatOwned ? "Owned ✓" : "Unlock";
  unlockGlassesBtn.textContent = glassesOwned ? "Owned ✓" : "Unlock";
  unlockBowBtn.textContent = bowOwned ? "Owned ✓" : "Unlock";

  unlockHatBtn.classList.toggle("owned", hatOwned);
  unlockGlassesBtn.classList.toggle("owned", glassesOwned);
  unlockBowBtn.classList.toggle("owned", bowOwned);

  equipHatBtn.textContent = hatEquipped ? "Unequip" : "Equip";
  equipGlassesBtn.textContent = glassesEquipped ? "Unequip" : "Equip";
  equipBowBtn.textContent = bowEquipped ? "Unequip" : "Equip";

  equipHatBtn.classList.toggle("equipped", hatEquipped);
  equipGlassesBtn.classList.toggle("equipped", glassesEquipped);
  equipBowBtn.classList.toggle("equipped", bowEquipped);

  const savedColour = localStorage.getItem("roblingo_pet_colour") || "green";
  updatePetColour(savedColour);
}

function unlockHat() {
  if (hasAccessory("hat")) return;

  const gems = getStoredGems();
  if (gems < 40) {
    alert("Not enough gems.");
    return;
  }

  localStorage.setItem("roblingo_gems", String(gems - 40));
  localStorage.setItem("roblingo_accessory_hat", "true");
  updateGemsUI();
  updatePetUI();
}

function unlockGlasses() {
  if (hasAccessory("glasses")) return;

  const xp = getStoredXP();
  if (xp < 80) {
    alert("Not enough XP.");
    return;
  }

  localStorage.setItem("roblingo_accessory_glasses", "true");
  updatePetUI();
}

function unlockBow() {
  if (hasAccessory("bow")) return;

  const gems = getStoredGems();
  if (gems < 60) {
    alert("Not enough gems.");
    return;
  }

  localStorage.setItem("roblingo_gems", String(gems - 60));
  localStorage.setItem("roblingo_accessory_bow", "true");
  updateGemsUI();
  updatePetUI();
}

function toggleEquip(name) {
  if (!hasAccessory(name)) {
    alert("Unlock this item first.");
    return;
  }

  const equippedNow = isEquipped(name);
  setEquipped(name, !equippedNow);
  updatePetUI();
}

function seedStartingProgress() {
  if (localStorage.getItem("roblingo_seeded_progress_v3_single") === "true") return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (!localStorage.getItem("roblingo_streak")) {
    localStorage.setItem("roblingo_streak", "2");
  }
  if (!localStorage.getItem("roblingo_last_completed")) {
    localStorage.setItem("roblingo_last_completed", yesterday.toDateString());
  }
  if (!localStorage.getItem("roblingo_lesson_1_complete")) {
    localStorage.setItem("roblingo_lesson_1_complete", "true");
  }
  if (!localStorage.getItem("roblingo_lesson_2_complete")) {
    localStorage.setItem("roblingo_lesson_2_complete", "true");
  }
  if (!localStorage.getItem("roblingo_lesson_1_xp_awarded")) {
    localStorage.setItem("roblingo_lesson_1_xp_awarded", "true");
  }
  if (!localStorage.getItem("roblingo_lesson_2_xp_awarded")) {
    localStorage.setItem("roblingo_lesson_2_xp_awarded", "true");
  }
  if (!localStorage.getItem("roblingo_xp")) {
    localStorage.setItem("roblingo_xp", String(XP_PER_LESSON * 2));
  }
  if (!localStorage.getItem("roblingo_gems")) {
    localStorage.setItem("roblingo_gems", "110");
  }
  if (!localStorage.getItem("roblingo_freezes")) {
    localStorage.setItem("roblingo_freezes", "0");
  }
  if (!localStorage.getItem("roblingo_pet_colour")) {
    localStorage.setItem("roblingo_pet_colour", "green");
  }

  localStorage.setItem("roblingo_version", "3");
  localStorage.setItem("roblingo_seeded_progress_v3_single", "true");
}

backBtn.addEventListener("click", () => {
  showOnlyScreen(appScreen);
  showPage("lessonsPage");
});

casualBtn.addEventListener("click", () => {
  if (!currentLesson) return;
  playAudio(currentLesson.audio, recordingStatus, "audio", casualBtn);
});

politeBtn.addEventListener("click", () => {
  // intentionally unused now
});

micBtn.addEventListener("click", () => {
  handleRecording(micBtn, recordingStatus, recordingPlayerWrap);
});

completeBtn.addEventListener("click", () => {
  if (!currentLesson) return;

  const previousUnlockedSet = getUnlockedLessonIds();
  saveLessonCompletion(currentLesson.id);

  const nextLesson = lessons.find((lesson) => lesson.id === currentLesson.id + 1);

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
unlockHatBtn.addEventListener("click", unlockHat);
unlockGlassesBtn.addEventListener("click", unlockGlasses);
unlockBowBtn.addEventListener("click", unlockBow);

equipHatBtn.addEventListener("click", () => toggleEquip("hat"));
equipGlassesBtn.addEventListener("click", () => toggleEquip("glasses"));
equipBowBtn.addEventListener("click", () => toggleEquip("bow"));

colourButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updatePetColour(button.dataset.colour);
  });
});

seedStartingProgress();
updateStreakUI();
updateXPUI();
updateGemsUI();
updatePetUI();
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
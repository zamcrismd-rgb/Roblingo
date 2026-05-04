const $ = (id) => document.getElementById(id);

const screens = {
  splash: $("splashScreen"),
  welcome: $("welcomeScreen"),
  app: $("appScreen"),
  lesson: $("lessonScreen")
};

const pages = ["homePage", "lessonsPage", "achievementsPage", "profilePage", "shopPage", "builderPage", "updatesPage"];
const navButtons = document.querySelectorAll(".nav-btn");

const els = {
  lessonList: $("lessonList"), achievementList: $("achievementList"), helpList: $("helpList"),
  startBtn: $("startBtn"), continueBtn: $("continueBtn"), backBtn: $("backBtn"),
  homeLessonsBtn: $("homeLessonsBtn"), homeAchievementsBtn: $("homeAchievementsBtn"), homeProfileBtn: $("homeProfileBtn"), homePetBtn: $("homePetBtn"), homeShopBtn: $("homeShopBtn"), homeHelpBtn: $("homeHelpBtn"),
  casualBtn: $("casualBtn"), politeBtn: $("politeBtn"), micBtn: $("micBtn"), completeBtn: $("completeBtn"),
  lessonTag: $("lessonTag"), mainWord: $("mainWord"), definitionText: $("definitionText"), lessonSubtext: $("lessonSubtext"), casualNote: $("casualNote"), politeNote: $("politeNote"), lessonProgressPill: $("lessonProgressPill"),
  recordingStatus: $("recordingStatus"), recordingPlayerWrap: $("recordingPlayerWrap"),
  scoreCard: $("scoreCard"), scoreCircle: $("scoreCircle"), scoreTitle: $("scoreTitle"), scoreFeedback: $("scoreFeedback"),
  successOverlay: $("successOverlay"), successTitle: $("successTitle"), successText: $("successText"), successParrot: $("successParrot"),
  achievementOverlay: $("achievementOverlay"), achievementPopupTitle: $("achievementPopupTitle"), achievementPopupText: $("achievementPopupText"),
  streakCount: $("streakCount"), xpText: $("xpText"), xpTopText: $("xpTopText"), xpFill: $("xpFill"), xpLevelText: $("xpLevelText"), levelNumber: $("levelNumber"), gemsDisplay: $("gemsDisplay"), freezeCountDisplay: $("freezeCountDisplay"),
  homeLessonProgress: $("homeLessonProgress"), homeAchievementProgress: $("homeAchievementProgress"), dailyTipText: $("dailyTipText"),
  profilePetCard: $("profilePetCard"), profileStreak: $("profileStreak"), profileFreezes: $("profileFreezes"), profileXP: $("profileXP"), profileGems: $("profileGems"), profileLessons: $("profileLessons"), profileAchievements: $("profileAchievements"), profileLevel: $("profileLevel"),
  buyFreezeBtn: $("buyFreezeBtn"), buyCrownBtn: $("buyCrownBtn"), buyScarfBtn: $("buyScarfBtn"),
  roblingoPet: $("roblingoPet"), homeParrot: $("homeParrot"),
  petHat: $("petHat"), petGlasses: $("petGlasses"), petBow: $("petBow"), petScarf: $("petScarf"), petCrown: $("petCrown"),
  homePetHat: $("homePetHat"), homePetGlasses: $("homePetGlasses"), homePetBow: $("homePetBow"), homePetScarf: $("homePetScarf"), homePetCrown: $("homePetCrown"),
  unlockHatBtn: $("unlockHatBtn"), unlockGlassesBtn: $("unlockGlassesBtn"), unlockBowBtn: $("unlockBowBtn"),
  equipHatBtn: $("equipHatBtn"), equipGlassesBtn: $("equipGlassesBtn"), equipBowBtn: $("equipBowBtn"), equipScarfBtn: $("equipScarfBtn"), equipCrownBtn: $("equipCrownBtn"),
  hatOwnedText: $("hatOwnedText"), glassesOwnedText: $("glassesOwnedText"), bowOwnedText: $("bowOwnedText"), scarfOwnedText: $("scarfOwnedText"), crownOwnedText: $("crownOwnedText")
};

const colourButtons = document.querySelectorAll(".colour-btn");

const XP_PER_LESSON = 10;
const GEMS_PER_LESSON = 5;
const XP_LEVEL_SIZE = 100;
const FREEZE_COST = 50;

const lessons = [
  { id: 1, title: "Lesson 1", word: "Water", definition: "A clear liquid that people drink.", mode: "dual", casualAudio: "./audio/water-casual.m4a", politeAudio: "./audio/water-polite.m4a", casualLabel: "water", politeLabel: "Water" },
  { id: 2, title: "Lesson 2", word: "Bottle", definition: "A container used for drinks or liquids.", mode: "dual", casualAudio: "./audio/bottle-casual.m4a", politeAudio: "./audio/bottle-polite.m4a", casualLabel: "bottle", politeLabel: "Bottle" },
  { id: 3, title: "Lesson 3", word: "Better", definition: "More good or improved.", mode: "dual", casualAudio: "./audio/better-casual.m4a", politeAudio: "./audio/better-polite.m4a", casualLabel: "better", politeLabel: "Better" },
  { id: 4, title: "Lesson 4", word: "City", definition: "A large town where many people live and work.", mode: "dual", casualAudio: "./audio/city-casual.m4a", politeAudio: "./audio/city-polite.m4a", casualLabel: "city", politeLabel: "City" },
  { id: 5, title: "Lesson 5", word: "Letter", definition: "A written character in the alphabet.", mode: "dual", casualAudio: "./audio/letter-casual.m4a", politeAudio: "./audio/letter-polite.m4a", casualLabel: "letter", politeLabel: "Letter" },
  { id: 6, title: "Lesson 6", word: "Party", definition: "A social event where people meet and celebrate.", mode: "dual", casualAudio: "./audio/party-casual.m4a", politeAudio: "./audio/party-polite.m4a", casualLabel: "party", politeLabel: "Party" },
  { id: 7, title: "Lesson 7", word: "Meeting", definition: "A time when people come together to talk.", mode: "dual", casualAudio: "./audio/meeting-casual.m4a", politeAudio: "./audio/meeting-polite.m4a", casualLabel: "meeting", politeLabel: "Meeting" },
  { id: 8, title: "Lesson 8", word: "Chocolate", definition: "A sweet food made from cocoa.", mode: "dual", casualAudio: "./audio/chocolate-casual.m4a", politeAudio: "./audio/chocolate-polite.m4a", casualLabel: "chocolate", politeLabel: "Chocolate" },
  { id: 9, title: "Lesson 9", word: "Morning", definition: "The early part of the day.", mode: "dual", casualAudio: "./audio/morning-casual.m4a", politeAudio: "./audio/morning-polite.m4a", casualLabel: "morning", politeLabel: "Morning" },
  { id: 10, title: "Lesson 10", word: "Tuesday", definition: "The day after Monday.", mode: "dual", casualAudio: "./audio/tuesday-casual.m4a", politeAudio: "./audio/tuesday-polite.m4a", casualLabel: "tuesday", politeLabel: "Tuesday" },
  { id: 11, title: "Lesson 11", word: "Little", definition: "Small in size or amount.", mode: "dual", casualAudio: "./audio/little-casual.m4a", politeAudio: "./audio/little-polite.m4a", casualLabel: "little", politeLabel: "Little" },
  { id: 12, title: "Lesson 12", word: "Table", definition: "A piece of furniture with a flat top.", mode: "dual", casualAudio: "./audio/table-casual.m4a", politeAudio: "./audio/table-polite.m4a", casualLabel: "table", politeLabel: "Table" },
  { id: 13, title: "Lesson 13", word: "Family", definition: "The people related to you.", mode: "dual", casualAudio: "./audio/family-casual.m4a", politeAudio: "./audio/family-polite.m4a", casualLabel: "family", politeLabel: "Family" },
  { id: 14, title: "Lesson 14", word: "Window", definition: "An opening in a wall with glass in it.", mode: "single", audio: "./audio/window.m4a", audioLabel: "window" },
  { id: 15, title: "Lesson 15", word: "Again", definition: "One more time.", mode: "dual", casualAudio: "./audio/again-casual.m4a", politeAudio: "./audio/again-polite.m4a", casualLabel: "again", politeLabel: "Again" },
  { id: 16, title: "Lesson 16", word: "Office", definition: "A place where people do work at desks.", mode: "single", audio: "./audio/office.m4a", audioLabel: "office" },
  { id: 17, title: "Lesson 17", word: "Question", definition: "Something you ask when you want an answer.", mode: "single", audio: "./audio/question.m4a", audioLabel: "question" },
  { id: 18, title: "Lesson 18", word: "Teacher", definition: "A person who helps students learn.", mode: "dual", casualAudio: "./audio/teacher-casual.m4a", politeAudio: "./audio/teacher-polite.m4a", casualLabel: "teacher", politeLabel: "Teacher" },
  { id: 19, title: "Lesson 19", word: "Problem", definition: "Something difficult that needs to be solved.", mode: "single", audio: "./audio/problem.m4a", audioLabel: "problem" },
  { id: 20, title: "Lesson 20", word: "Pardon", definition: "A polite word used when asking someone to repeat.", mode: "single", audio: "./audio/pardon.m4a", audioLabel: "pardon" },
  { id: 21, title: "Lesson 21", word: "Today", definition: "This current day.", mode: "single", audio: "./audio/today.m4a", audioLabel: "today" },
  { id: 22, title: "Lesson 22", word: "Tomorrow", definition: "The day after today.", mode: "single", audio: "./audio/tomorrow.m4a", audioLabel: "tomorrow" },
  { id: 23, title: "Lesson 23", word: "Yesterday", definition: "The day before today.", mode: "single", audio: "./audio/yesterday.m4a", audioLabel: "yesterday" },
  { id: 24, title: "Lesson 24", word: "School", definition: "A place where children go to learn.", mode: "single", audio: "./audio/school.m4a", audioLabel: "school" },
  { id: 25, title: "Lesson 25", word: "Student", definition: "A person who is learning.", mode: "single", audio: "./audio/student.m4a", audioLabel: "student" },
  { id: 26, title: "Lesson 26", word: "Computer", definition: "An electronic machine used for work or study.", mode: "single", audio: "./audio/computer.m4a", audioLabel: "computer" },
  { id: 27, title: "Lesson 27", word: "Holiday", definition: "A time for rest or travel away from work or school.", mode: "single", audio: "./audio/holiday.m4a", audioLabel: "holiday" },
  { id: 28, title: "Lesson 28", word: "Airport", definition: "A place where planes arrive and leave.", mode: "single", audio: "./audio/airport.m4a", audioLabel: "airport" },
  { id: 29, title: "Lesson 29", word: "Breakfast", definition: "The first meal of the day.", mode: "single", audio: "./audio/breakfast.m4a", audioLabel: "breakfast" },
  { id: 30, title: "Lesson 30", word: "Favourite", definition: "Something you like the most.", mode: "single", audio: "./audio/favourite.m4a", audioLabel: "favourite" },
  { id: 31, title: "Lesson 31", word: "Garden", definition: "An outdoor area where plants grow.", mode: "single", audio: "./audio/garden.m4a", audioLabel: "garden" },
  { id: 32, title: "Lesson 32", word: "Village", definition: "A small place where people live, smaller than a town.", mode: "single", audio: "./audio/village.m4a", audioLabel: "village" },
  { id: 33, title: "Lesson 33", word: "Weather", definition: "The condition of the sky, rain, sun, or wind.", mode: "single", audio: "./audio/weather.m4a", audioLabel: "weather" },
  { id: 34, title: "Lesson 34", word: "Travel", definition: "To go from one place to another.", mode: "single", audio: "./audio/travel.m4a", audioLabel: "travel" },
  { id: 35, title: "Lesson 35", word: "Station", definition: "A place where trains or buses stop.", mode: "single", audio: "./audio/station.m4a", audioLabel: "station" },
  { id: 36, title: "Lesson 36", word: "Kitchen", definition: "The room where food is cooked.", mode: "single", audio: "./audio/kitchen.m4a", audioLabel: "kitchen" },
  { id: 37, title: "Lesson 37", word: "Dinner", definition: "The main meal, often eaten in the evening.", mode: "single", audio: "./audio/dinner.m4a", audioLabel: "dinner" },
  { id: 38, title: "Lesson 38", word: "Phone", definition: "A device used to call or message people.", mode: "single", audio: "./audio/phone.m4a", audioLabel: "phone" },
  { id: 39, title: "Lesson 39", word: "Picture", definition: "An image, photo, or drawing.", mode: "single", audio: "./audio/picture.m4a", audioLabel: "picture" },
  { id: 40, title: "Lesson 40", word: "Music", definition: "Sounds arranged in a pleasant way.", mode: "single", audio: "./audio/music.m4a", audioLabel: "music" },
  { id: 41, title: "Lesson 41", word: "Friend", definition: "A person you like and know well.", mode: "single", audio: "./audio/friend.m4a", audioLabel: "friend" },
  { id: 42, title: "Lesson 42", word: "People", definition: "More than one person.", mode: "single", audio: "./audio/people.m4a", audioLabel: "people" },
  { id: 43, title: "Lesson 43", word: "London", definition: "The capital city of the United Kingdom.", mode: "single", audio: "./audio/london.m4a", audioLabel: "london" },
  { id: 44, title: "Lesson 44", word: "English", definition: "The language spoken in England and many other places.", mode: "single", audio: "./audio/english.m4a", audioLabel: "english" },
  { id: 45, title: "Lesson 45", word: "Saturday", definition: "The day after Friday.", mode: "single", audio: "./audio/saturday.m4a", audioLabel: "saturday" },
  { id: 46, title: "Lesson 46", word: "Sunday", definition: "The day after Saturday.", mode: "single", audio: "./audio/sunday.m4a", audioLabel: "sunday" },
  { id: 47, title: "Lesson 47", word: "Orange", definition: "A round citrus fruit and also a colour.", mode: "single", audio: "./audio/orange.m4a", audioLabel: "orange" },
  { id: 48, title: "Lesson 48", word: "Purple", definition: "A colour between red and blue.", mode: "single", audio: "./audio/purple.m4a", audioLabel: "purple" },
  { id: 49, title: "Lesson 49", word: "Camera", definition: "A device used to take photos or videos.", mode: "single", audio: "./audio/camera.m4a", audioLabel: "camera" },
  { id: 50, title: "Lesson 50", word: "Market", definition: "A place where goods are bought and sold.", mode: "single", audio: "./audio/market.m4a", audioLabel: "market" }
];

const sections = [
  { id: 1, title: "Section 1", subtitle: "Basic pronunciation words", lessonIds: [1,2,3,4,5,6,7,8,9,10] },
  { id: 2, title: "Section 2", subtitle: "Everyday speaking words", lessonIds: [11,12,13,14,15,16,17,18,19,20] },
  { id: 3, title: "Section 3", subtitle: "Useful daily vocabulary", lessonIds: [21,22,23,24,25,26,27,28,29,30] },
  { id: 4, title: "Section 4", subtitle: "Speaking confidence words", lessonIds: [31,32,33,34,35,36,37,38,39,40] },
  { id: 5, title: "Section 5", subtitle: "Harder words", lessonIds: [41,42,43,44,45,46,47,48,49,50] }
];

const achievements = [
  { id: "lessons_5", icon: "🌱", title: "First Steps", text: "Complete 5 lessons.", type: "lessons", target: 5 },
  { id: "lessons_10", icon: "🔥", title: "10 Lessons Done", text: "Complete 10 lessons.", type: "lessons", target: 10 },
  { id: "lessons_15", icon: "⭐", title: "15 Lesson Streaker", text: "Complete 15 lessons.", type: "lessons", target: 15 },
  { id: "lessons_20", icon: "🏆", title: "20 Lessons Complete", text: "Complete 20 lessons.", type: "lessons", target: 20 },
  { id: "lessons_30", icon: "🚀", title: "Pronunciation Rocket", text: "Complete 30 lessons.", type: "lessons", target: 30 },
  { id: "lessons_40", icon: "💎", title: "Speaking Champion", text: "Complete 40 lessons.", type: "lessons", target: 40 },
  { id: "lessons_50", icon: "👑", title: "Roblingo Master", text: "Complete all 50 lessons.", type: "lessons", target: 50 },
  { id: "xp_100", icon: "⚡", title: "100 XP", text: "Earn 100 total XP.", type: "xp", target: 100 },
  { id: "xp_250", icon: "🌟", title: "250 XP", text: "Earn 250 total XP.", type: "xp", target: 250 },
  { id: "streak_3", icon: "🔥", title: "3 Day Streak", text: "Reach a 3 day streak.", type: "streak", target: 3 },
  { id: "streak_7", icon: "🔥", title: "7 Day Streak", text: "Reach a 7 day streak.", type: "streak", target: 7 },
  { id: "pet_created", icon: "🦜", title: "Pet Owner", text: "Create your Roblingo profile pet.", type: "pet", target: 1 },
  { id: "freezes_1", icon: "🧊", title: "Streak Insurance", text: "Own at least 1 streak freeze.", type: "freezes", target: 1 }
];

const tips = [
  "Listen first, then copy the rhythm. Accent is not just letters — it is timing.",
  "Say the word slowly once, then say it naturally twice.",
  "For British pronunciation, focus on clean vowels and smooth endings.",
  "Record yourself, play it back, and compare the sound, not the spelling.",
  "Small daily practice beats one long practice session."
];

const helpItems = [
  { title: "Lessons", text: "Follow the path in order. Completed lessons turn green and unlock the next lesson." },
  { title: "XP and levels", text: "Each new completed lesson gives XP. Your level grows every 100 XP." },
  { title: "Gems", text: "Gems are rewards from lessons. Spend them in the shop without losing lesson progress." },
  { title: "Streak", text: "Your streak grows when you complete a lesson on a new day. Roblingo keeps it fun instead of stressful." },
  { title: "Streak Freeze", text: "A freeze protects your streak if you miss a day. You can buy freezes in the shop." },
  { title: "Pronunciation score", text: "The score is a fun practice score, not a real AI accent judge yet. It encourages recording and listening back." },
  { title: "Profile", text: "Your profile shows your XP, gems, freezes, achievements, lessons and your personal Roblingo pet." },
  { title: "Roblingo Pet", text: "Choose a colour or unlock an item to create your pet. That pet becomes your profile avatar." },
  { title: "Progress safety", text: "This version keeps existing localStorage keys for XP, gems, streaks, completed lessons and pet items." }
];

let currentLesson = null;
let currentRecorder = null;
let currentStream = null;
let currentAudioChunks = [];
let isRecording = false;
let lastPronunciationScore = null;

function showOnlyScreen(screenToShow) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screenToShow.classList.add("active");
}

function showPage(pageId) {
  pages.forEach((id) => $(id)?.classList.remove("active"));
  navButtons.forEach((btn) => btn.classList.remove("active"));

  $(pageId)?.classList.add("active");
  document.querySelector(`.nav-btn[data-page="${pageId}"]`)?.classList.add("active");
  updateAllUI();
}

function getNumber(key) { return Number(localStorage.getItem(key)) || 0; }
function setLocalNumber(key, value) { localStorage.setItem(key, String(Math.max(0, Number(value) || 0))); }
function getStoredXP() { return getNumber("roblingo_xp"); }
function getStoredGems() { return getNumber("roblingo_gems"); }
function getStoredFreezes() { return getNumber("roblingo_freezes"); }
function getStoredStreak() { return getNumber("roblingo_streak"); }
function getPetCreated() { return localStorage.getItem("roblingo_pet_created") === "true"; }
function setPetCreated() { localStorage.setItem("roblingo_pet_created", "true"); }
function isLessonComplete(lessonId) { return localStorage.getItem(`roblingo_lesson_${lessonId}_complete`) === "true"; }
function isLessonUnlocked(lessonId) { return lessonId === 1 || isLessonComplete(lessonId - 1); }
function getCompletedLessonCount() { return lessons.filter((lesson) => isLessonComplete(lesson.id)).length; }
function getNextLesson() { return lessons.find((lesson) => !isLessonComplete(lesson.id)) || lessons[lessons.length - 1]; }
function getAchievementUnlocked(id) { return localStorage.getItem(`roblingo_achievement_${id}`) === "true"; }
function setAchievementUnlocked(id) { localStorage.setItem(`roblingo_achievement_${id}`, "true"); }

function animateElement(element, className) {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

function stopCurrentStream() {
  if (!currentStream) return;
  currentStream.getTracks().forEach((track) => track.stop());
  currentStream = null;
}

function getLevelFromXP(xp) { return Math.floor(xp / XP_LEVEL_SIZE) + 1; }

function updateXPUI() {
  const xp = getStoredXP();
  const currentBarXP = xp % XP_LEVEL_SIZE;
  const level = getLevelFromXP(xp);
  els.xpText.textContent = `${xp} XP`;
  els.xpTopText.textContent = `${xp} XP`;
  els.levelNumber.textContent = level;
  els.xpLevelText.textContent = `${currentBarXP} / ${XP_LEVEL_SIZE} to next level`;
  els.xpFill.style.width = `${(currentBarXP / XP_LEVEL_SIZE) * 100}%`;
}

function updateStreakUI() { els.streakCount.textContent = getStoredStreak(); }
function updateGemsUI() { els.gemsDisplay.textContent = getStoredGems(); els.freezeCountDisplay.textContent = getStoredFreezes(); }

function updateHomeStats() {
  const completeCount = getCompletedLessonCount();
  const unlockedAchievements = achievements.filter((achievement) => getAchievementUnlocked(achievement.id) || isAchievementComplete(achievement)).length;
  els.homeLessonProgress.textContent = `${completeCount} / ${lessons.length} complete`;
  els.homeAchievementProgress.textContent = `${unlockedAchievements} unlocked`;
  const nextLesson = getNextLesson();
  els.continueBtn.textContent = nextLesson ? `Continue: ${nextLesson.word}` : "All lessons complete";
  els.dailyTipText.textContent = tips[new Date().getDate() % tips.length];
}

function createPetMarkup(sizeClass = "profile-parrot") {
  const accessories = ["hat", "glasses", "bow", "scarf", "crown"];
  const itemMarkup = accessories.map((name) => `<div class="parrot-${name} ${hasAccessory(name) && isEquipped(name) ? "" : "hidden"}"></div>`).join("");

  return `
    <div class="css-parrot ${sizeClass} profile-pet-copy">
      <div class="parrot-head"></div><div class="parrot-body"></div><div class="parrot-wing"></div><div class="parrot-eye"></div><div class="parrot-beak"></div><div class="parrot-feet"></div>
      ${itemMarkup}
    </div>
  `;
}

function updateProfileUI() {
  const xp = getStoredXP();
  const completeCount = getCompletedLessonCount();
  const unlockedAchievements = achievements.filter((achievement) => getAchievementUnlocked(achievement.id) || isAchievementComplete(achievement)).length;

  els.profileStreak.textContent = getStoredStreak();
  els.profileFreezes.textContent = getStoredFreezes();
  els.profileXP.textContent = xp;
  els.profileGems.textContent = getStoredGems();
  els.profileLessons.textContent = `${completeCount} / ${lessons.length}`;
  els.profileAchievements.textContent = `${unlockedAchievements} / ${achievements.length}`;
  els.profileLevel.textContent = getLevelFromXP(xp);

  if (!getPetCreated()) {
    els.profilePetCard.innerHTML = `
      <div class="css-parrot profile-parrot">
        <div class="parrot-head"></div><div class="parrot-body"></div><div class="parrot-wing"></div><div class="parrot-eye"></div><div class="parrot-beak"></div><div class="parrot-feet"></div>
      </div>
      <h3>Make a Roblingo to make a profile</h3>
      <p>Your profile avatar will become the Roblingo pet you create in the Pet page.</p>
      <button class="daily-btn" id="profileMakePetBtn" type="button">Make Roblingo</button>
    `;
    $("profileMakePetBtn")?.addEventListener("click", () => showPage("builderPage"));
  } else {
    els.profilePetCard.innerHTML = `
      ${createPetMarkup()}
      <h3>Your Roblingo</h3>
      <p>This is your custom profile pet. Change it anytime in the Pet page.</p>
    `;
  }

  applySavedColourToAllParrots();
}

function renderHelp() {
  els.helpList.innerHTML = "";
  helpItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "help-card";
    card.innerHTML = `<strong>${item.title}</strong><p>${item.text}</p>`;
    els.helpList.appendChild(card);
  });
}

function getLessonSubtitle(lesson) {
  if (!isLessonUnlocked(lesson.id)) return "Locked";
  if (isLessonComplete(lesson.id)) return "Completed ✓";
  return lesson.definition;
}

function createLessonNode(lesson) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "lesson-node";

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
    <span class="node-circle">${complete ? "✓" : unlocked ? lesson.id : "🔒"}</span>
    <span class="lesson-info">
      <strong>${lesson.word}</strong>
      <p>${getLessonSubtitle(lesson)}</p>
    </span>
  `;

  if (unlocked) button.addEventListener("click", () => openLesson(lesson.id));
  return button;
}

function renderLessons() {
  els.lessonList.innerHTML = "";
  sections.forEach((section) => {
    const wrapper = document.createElement("section");
    wrapper.className = "path-section";
    const completedInSection = section.lessonIds.filter((id) => isLessonComplete(id)).length;
    const progressPercent = (completedInSection / section.lessonIds.length) * 100;

    wrapper.innerHTML = `
      <div class="path-section-head">
        <h3>${section.title}</h3>
        <p>${section.subtitle}</p>
        <div class="path-progress"><div class="path-progress-fill" style="width:${progressPercent}%"></div></div>
      </div>
      <div class="path-nodes"></div>
    `;

    const nodeWrap = wrapper.querySelector(".path-nodes");
    section.lessonIds.forEach((id) => {
      const lesson = lessons.find((item) => item.id === id);
      if (lesson) nodeWrap.appendChild(createLessonNode(lesson));
    });
    els.lessonList.appendChild(wrapper);
  });
}

function isAchievementComplete(achievement) {
  if (achievement.type === "lessons") return getCompletedLessonCount() >= achievement.target;
  if (achievement.type === "xp") return getStoredXP() >= achievement.target;
  if (achievement.type === "streak") return getStoredStreak() >= achievement.target;
  if (achievement.type === "pet") return getPetCreated();
  if (achievement.type === "freezes") return getStoredFreezes() >= achievement.target;
  return false;
}

function renderAchievements() {
  els.achievementList.innerHTML = "";
  achievements.forEach((achievement) => {
    const unlocked = getAchievementUnlocked(achievement.id) || isAchievementComplete(achievement);
    const card = document.createElement("div");
    card.className = `achievement-card ${unlocked ? "unlocked" : "locked"}`;
    card.innerHTML = `
      <div class="achievement-icon">${unlocked ? achievement.icon : "🔒"}</div>
      <div><h3>${achievement.title}</h3><p>${achievement.text}</p></div>
    `;
    els.achievementList.appendChild(card);
  });
}

function checkAchievements() {
  const newlyUnlocked = [];
  achievements.forEach((achievement) => {
    if (!getAchievementUnlocked(achievement.id) && isAchievementComplete(achievement)) {
      setAchievementUnlocked(achievement.id);
      newlyUnlocked.push(achievement);
    }
  });
  if (newlyUnlocked.length > 0) showAchievementPopup(newlyUnlocked[0]);
}

function showAchievementPopup(achievement) {
  els.achievementPopupTitle.textContent = achievement.title;
  els.achievementPopupText.textContent = achievement.text;
  els.achievementOverlay.classList.add("show");
  setTimeout(() => els.achievementOverlay.classList.remove("show"), 1800);
}

function saveLessonCompletion(lessonNumber) {
  const today = new Date();
  const todayKey = today.toDateString();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toDateString();

  const lastCompleted = localStorage.getItem("roblingo_last_completed");
  let streak = getStoredStreak();

  if (lastCompleted === todayKey) {
    // already counted today
  } else if (lastCompleted === yesterdayKey) {
    streak += 1;
  } else {
    const freezes = getStoredFreezes();
    if (lastCompleted && freezes > 0) {
      setLocalNumber("roblingo_freezes", freezes - 1);
      streak += 1;
    } else {
      streak = 1;
    }
  }

  localStorage.setItem("roblingo_last_completed", todayKey);
  setLocalNumber("roblingo_streak", streak);
  localStorage.setItem(`roblingo_lesson_${lessonNumber}_complete`, "true");

  if (!localStorage.getItem(`roblingo_lesson_${lessonNumber}_xp_awarded`)) {
    setLocalNumber("roblingo_xp", getStoredXP() + XP_PER_LESSON);
    setLocalNumber("roblingo_gems", getStoredGems() + GEMS_PER_LESSON);
    localStorage.setItem(`roblingo_lesson_${lessonNumber}_xp_awarded`, "true");
  }

  updateAllUI();
  checkAchievements();
}

function showSuccess(title, text) {
  els.successTitle.textContent = title;
  els.successText.textContent = text;
  els.successOverlay.classList.add("show");

  setTimeout(() => {
    els.successOverlay.classList.remove("show");
    showOnlyScreen(screens.app);
    showPage("lessonsPage");
    renderLessons();
    animateElement(els.homeParrot, "happy");
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
  audio.onloadeddata = () => { statusEl.textContent = `Playing ${label}...`; };
  audio.onerror = () => {
    statusEl.textContent = `Could not load ${path}`;
    console.error("Could not load:", path);
  };
  audio.onended = () => { statusEl.textContent = `${label} finished.`; };

  audio.play().then(() => {
    if (button) markButtonPlaying(button, audio);
    animateElement(els.homeParrot, "wiggle");
  }).catch((error) => {
    statusEl.textContent = `Could not play ${path}`;
    console.error("Could not play:", path, error);
  });
}

function createFakePronunciationScore() {
  return Math.min(Math.floor(Math.random() * 21) + 76, 99);
}

function getFeedbackForScore(score) {
  if (score >= 94) return "Excellent rhythm. That sounded very natural.";
  if (score >= 88) return "Great work. Try making the ending slightly clearer.";
  if (score >= 82) return "Good pronunciation. Listen once more and copy the timing.";
  return "Nice attempt. Try again slowly, then say it naturally.";
}

function showCheckingThenResult(statusEl) {
  statusEl.textContent = "Checking pronunciation...";
  setTimeout(() => {
    lastPronunciationScore = createFakePronunciationScore();
    els.scoreCircle.textContent = `${lastPronunciationScore}%`;
    els.scoreTitle.textContent = "Pronunciation score";
    els.scoreFeedback.textContent = getFeedbackForScore(lastPronunciationScore);
    els.scoreCard.classList.remove("hidden");
    statusEl.textContent = "Score ready. Complete the lesson when you are happy.";
    els.lessonProgressPill.textContent = "Step 3 / 3";
  }, 1200);
}

async function handleRecording(micButton, statusEl, wrapEl) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    statusEl.textContent = "Microphone is not supported on this browser.";
    return;
  }

  if (!isRecording) {
    try {
      wrapEl.innerHTML = "";
      els.scoreCard.classList.add("hidden");
      lastPronunciationScore = null;
      currentStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      currentRecorder = new MediaRecorder(currentStream);
      currentAudioChunks = [];

      currentRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) currentAudioChunks.push(event.data);
      };

      currentRecorder.onstop = () => {
        isRecording = false;
        micButton.classList.remove("recording");
        micButton.textContent = "🎤 Tap to Speak";
        const audioBlob = new Blob(currentAudioChunks, { type: "audio/webm" });
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
      els.lessonProgressPill.textContent = "Step 2 / 3";
    } catch (error) {
      statusEl.textContent = "Microphone permission denied.";
      console.error("Mic error:", error);
      stopCurrentStream();
    }
  } else if (currentRecorder) {
    currentRecorder.stop();
  }
}

function updateLessonButtonsForMode(lesson) {
  const casualTitle = els.casualBtn.querySelector(".audio-title");
  const politeTitle = els.politeBtn.querySelector(".audio-title");

  if (lesson.mode === "dual") {
    els.casualBtn.style.display = "flex";
    els.politeBtn.style.display = "flex";
    casualTitle.textContent = "🔊 Casual";
    politeTitle.textContent = "🔊 Polite";
    els.casualNote.textContent = lesson.casualLabel || lesson.word.toLowerCase();
    els.politeNote.textContent = lesson.politeLabel || lesson.word;
    return;
  }

  els.casualBtn.style.display = "flex";
  els.politeBtn.style.display = "none";
  casualTitle.textContent = "🔊 Listen";
  els.casualNote.textContent = lesson.audioLabel || lesson.word.toLowerCase();
  els.politeNote.textContent = "";
}

function getLessonInstructionText(lesson) {
  return lesson.mode === "dual"
    ? "Listen to both pronunciations, record yourself, then check your score."
    : "Listen to the pronunciation, record yourself, then check your score.";
}

function openLesson(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson) return;

  currentLesson = lesson;
  lastPronunciationScore = null;

  els.lessonTag.textContent = lesson.title;
  els.mainWord.textContent = lesson.word;
  els.definitionText.textContent = lesson.definition;
  els.lessonSubtext.textContent = getLessonInstructionText(lesson);
  els.lessonProgressPill.textContent = "Step 1 / 3";
  updateLessonButtonsForMode(lesson);
  els.recordingStatus.textContent = "Tap listen, then record yourself.";
  els.recordingPlayerWrap.innerHTML = "";
  els.scoreCard.classList.add("hidden");
  els.scoreCircle.textContent = "0%";
  els.scoreFeedback.textContent = "Record yourself to get feedback.";
  els.micBtn.classList.remove("recording");
  els.micBtn.textContent = "🎤 Tap to Speak";

  showOnlyScreen(screens.lesson);
}

function buyFreeze() {
  const gems = getStoredGems();
  const freezes = getStoredFreezes();
  if (gems < FREEZE_COST) {
    alert("Not enough gems for a Streak Freeze.");
    return;
  }
  setLocalNumber("roblingo_gems", gems - FREEZE_COST);
  setLocalNumber("roblingo_freezes", freezes + 1);
  updateAllUI();
  checkAchievements();
}

function hasAccessory(name) { return localStorage.getItem(`roblingo_accessory_${name}`) === "true"; }
function isEquipped(name) { return localStorage.getItem(`roblingo_equipped_${name}`) === "true"; }
function setEquipped(name, value) { localStorage.setItem(`roblingo_equipped_${name}`, String(value)); }
function unlockAccessory(name) { localStorage.setItem(`roblingo_accessory_${name}`, "true"); }

function buyAccessory(name, cost) {
  if (hasAccessory(name)) {
    alert("You already own this item.");
    return;
  }
  const gems = getStoredGems();
  if (gems < cost) {
    alert("Not enough gems.");
    return;
  }
  setLocalNumber("roblingo_gems", gems - cost);
  unlockAccessory(name);
  setPetCreated();
  updateAllUI();
  checkAchievements();
}

function getColourMap() {
  return {
    green: { main: "#36c46b", wing: "#27a85a", belly: "#dff8ea" },
    blue: { main: "#4aa8ff", wing: "#327fd3", belly: "#e6f4ff" },
    pink: { main: "#ff6da8", wing: "#e04f8a", belly: "#ffe4ef" },
    yellow: { main: "#ffcf4d", wing: "#e0b132", belly: "#fff6d8" },
    purple: { main: "#9c6dff", wing: "#7b4fe0", belly: "#efe6ff" },
    red: { main: "#ff5d5d", wing: "#d94343", belly: "#ffe0e0" }
  };
}

function applyPetColour(colour) {
  const colourMap = getColourMap();
  const selected = colourMap[colour] || colourMap.green;
  document.querySelectorAll(".css-parrot").forEach((parrot) => {
    parrot.style.setProperty("--pet-main", selected.main);
    parrot.style.setProperty("--pet-wing", selected.wing);
    parrot.style.setProperty("--pet-belly", selected.belly);
  });

  colourButtons.forEach((btn) => {
    btn.classList.toggle("active-colour", btn.dataset.colour === colour);
  });
}

function applySavedColourToAllParrots() {
  applyPetColour(localStorage.getItem("roblingo_pet_colour") || "green");
}

function updatePetColour(colour) {
  localStorage.setItem("roblingo_pet_colour", colour);
  setPetCreated();
  applyPetColour(colour);
  updateAllUI();
  checkAchievements();
}

function applyAccessoryVisibility(name, petElement, homeElement) {
  const owned = hasAccessory(name);
  const equipped = owned && isEquipped(name);
  if (petElement) petElement.classList.toggle("hidden", !equipped);
  if (homeElement) homeElement.classList.toggle("hidden", !equipped);
  return { owned, equipped };
}

function updateAccessoryButton(name, equipButton, ownedText) {
  const owned = hasAccessory(name);
  const equipped = owned && isEquipped(name);
  if (ownedText) ownedText.textContent = owned ? (equipped ? "Equipped" : "Owned") : "Locked";
  if (equipButton) {
    equipButton.textContent = equipped ? "Unequip" : "Equip";
    equipButton.classList.toggle("equipped", equipped);
  }
}

function updatePetUI() {
  const hatState = applyAccessoryVisibility("hat", els.petHat, els.homePetHat);
  const glassesState = applyAccessoryVisibility("glasses", els.petGlasses, els.homePetGlasses);
  const bowState = applyAccessoryVisibility("bow", els.petBow, els.homePetBow);
  const scarfState = applyAccessoryVisibility("scarf", els.petScarf, els.homePetScarf);
  const crownState = applyAccessoryVisibility("crown", els.petCrown, els.homePetCrown);

  els.hatOwnedText.textContent = hatState.owned ? (hatState.equipped ? "Equipped" : "Owned") : "Locked";
  els.glassesOwnedText.textContent = glassesState.owned ? (glassesState.equipped ? "Equipped" : "Owned") : "Locked";
  els.bowOwnedText.textContent = bowState.owned ? (bowState.equipped ? "Equipped" : "Owned") : "Locked";
  els.scarfOwnedText.textContent = scarfState.owned ? (scarfState.equipped ? "Equipped" : "Owned") : "Locked";
  els.crownOwnedText.textContent = crownState.owned ? (crownState.equipped ? "Equipped" : "Owned") : "Locked";

  els.unlockHatBtn.textContent = hatState.owned ? "Owned ✓" : "Unlock";
  els.unlockGlassesBtn.textContent = glassesState.owned ? "Owned ✓" : "Unlock";
  els.unlockBowBtn.textContent = bowState.owned ? "Owned ✓" : "Unlock";

  els.unlockHatBtn.classList.toggle("owned", hatState.owned);
  els.unlockGlassesBtn.classList.toggle("owned", glassesState.owned);
  els.unlockBowBtn.classList.toggle("owned", bowState.owned);

  updateAccessoryButton("hat", els.equipHatBtn, els.hatOwnedText);
  updateAccessoryButton("glasses", els.equipGlassesBtn, els.glassesOwnedText);
  updateAccessoryButton("bow", els.equipBowBtn, els.bowOwnedText);
  updateAccessoryButton("scarf", els.equipScarfBtn, els.scarfOwnedText);
  updateAccessoryButton("crown", els.equipCrownBtn, els.crownOwnedText);
  applySavedColourToAllParrots();
}

function unlockHat() {
  if (hasAccessory("hat")) return;
  const gems = getStoredGems();
  if (gems < 40) {
    alert("Not enough gems.");
    return;
  }
  setLocalNumber("roblingo_gems", gems - 40);
  unlockAccessory("hat");
  setPetCreated();
  updateAllUI();
  checkAchievements();
}

function unlockGlasses() {
  if (hasAccessory("glasses")) return;
  const xp = getStoredXP();
  if (xp < 80) {
    alert("Not enough XP.");
    return;
  }
  unlockAccessory("glasses");
  setPetCreated();
  updateAllUI();
  checkAchievements();
}

function unlockBow() {
  if (hasAccessory("bow")) return;
  const gems = getStoredGems();
  if (gems < 60) {
    alert("Not enough gems.");
    return;
  }
  setLocalNumber("roblingo_gems", gems - 60);
  unlockAccessory("bow");
  setPetCreated();
  updateAllUI();
  checkAchievements();
}

function toggleEquip(name) {
  if (!hasAccessory(name)) {
    alert("Unlock this item first.");
    return;
  }
  setPetCreated();
  setEquipped(name, !isEquipped(name));
  updateAllUI();
  checkAchievements();
}

function seedStartingProgress() {
  if (localStorage.getItem("roblingo_seeded_progress_v5_safe") === "true") return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (!localStorage.getItem("roblingo_streak")) localStorage.setItem("roblingo_streak", "2");
  if (!localStorage.getItem("roblingo_last_completed")) localStorage.setItem("roblingo_last_completed", yesterday.toDateString());
  if (!localStorage.getItem("roblingo_xp")) localStorage.setItem("roblingo_xp", "20");
  if (!localStorage.getItem("roblingo_gems")) localStorage.setItem("roblingo_gems", "110");
  if (!localStorage.getItem("roblingo_freezes")) localStorage.setItem("roblingo_freezes", "0");
  if (!localStorage.getItem("roblingo_pet_colour")) localStorage.setItem("roblingo_pet_colour", "green");

  if (!localStorage.getItem("roblingo_lesson_1_complete")) localStorage.setItem("roblingo_lesson_1_complete", "true");
  if (!localStorage.getItem("roblingo_lesson_2_complete")) localStorage.setItem("roblingo_lesson_2_complete", "true");
  if (!localStorage.getItem("roblingo_lesson_1_xp_awarded")) localStorage.setItem("roblingo_lesson_1_xp_awarded", "true");
  if (!localStorage.getItem("roblingo_lesson_2_xp_awarded")) localStorage.setItem("roblingo_lesson_2_xp_awarded", "true");

  localStorage.setItem("roblingo_version", "5");
  localStorage.setItem("roblingo_seeded_progress_v5_safe", "true");
}

function updateAllUI() {
  updateStreakUI();
  updateXPUI();
  updateGemsUI();
  updateHomeStats();
  updatePetUI();
  updateProfileUI();
  renderAchievements();
}

function bindEvents() {
  els.backBtn.addEventListener("click", () => { showOnlyScreen(screens.app); showPage("lessonsPage"); });

  els.casualBtn.addEventListener("click", () => {
    if (!currentLesson) return;
    if (currentLesson.mode === "dual") {
      playAudio(currentLesson.casualAudio, els.recordingStatus, "casual pronunciation", els.casualBtn);
      return;
    }
    playAudio(currentLesson.audio, els.recordingStatus, "pronunciation", els.casualBtn);
  });

  els.politeBtn.addEventListener("click", () => {
    if (!currentLesson || currentLesson.mode !== "dual") return;
    playAudio(currentLesson.politeAudio, els.recordingStatus, "polite pronunciation", els.politeBtn);
  });

  els.micBtn.addEventListener("click", () => handleRecording(els.micBtn, els.recordingStatus, els.recordingPlayerWrap));

  els.completeBtn.addEventListener("click", () => {
    if (!currentLesson) return;
    saveLessonCompletion(currentLesson.id);
    const scoreText = lastPronunciationScore ? ` • ${lastPronunciationScore}%` : "";
    showSuccess("Nice one", `${currentLesson.title} complete${scoreText} • +10 XP • +5 Gems`);
  });

  navButtons.forEach((button) => button.addEventListener("click", () => showPage(button.dataset.page)));

  els.startBtn.addEventListener("click", () => {
    localStorage.setItem("roblingo_started", "true");
    showOnlyScreen(screens.app);
    showPage("homePage");
  });

  els.continueBtn.addEventListener("click", () => {
    const nextLesson = getNextLesson();
    if (nextLesson) openLesson(nextLesson.id);
  });

  els.homeLessonsBtn.addEventListener("click", () => showPage("lessonsPage"));
  els.homeAchievementsBtn.addEventListener("click", () => showPage("achievementsPage"));
  els.homeProfileBtn.addEventListener("click", () => showPage("profilePage"));
  els.homePetBtn.addEventListener("click", () => showPage("builderPage"));
  els.homeShopBtn.addEventListener("click", () => showPage("shopPage"));
  els.homeHelpBtn.addEventListener("click", () => showPage("updatesPage"));

  els.buyFreezeBtn.addEventListener("click", buyFreeze);
  els.buyCrownBtn.addEventListener("click", () => buyAccessory("crown", 120));
  els.buyScarfBtn.addEventListener("click", () => buyAccessory("scarf", 70));

  els.unlockHatBtn.addEventListener("click", unlockHat);
  els.unlockGlassesBtn.addEventListener("click", unlockGlasses);
  els.unlockBowBtn.addEventListener("click", unlockBow);

  els.equipHatBtn.addEventListener("click", () => toggleEquip("hat"));
  els.equipGlassesBtn.addEventListener("click", () => toggleEquip("glasses"));
  els.equipBowBtn.addEventListener("click", () => toggleEquip("bow"));
  els.equipScarfBtn.addEventListener("click", () => toggleEquip("scarf"));
  els.equipCrownBtn.addEventListener("click", () => toggleEquip("crown"));

  colourButtons.forEach((button) => button.addEventListener("click", () => updatePetColour(button.dataset.colour)));
}

function init() {
  seedStartingProgress();
  renderLessons();
  renderHelp();
  bindEvents();
  updateAllUI();
  checkAchievements();
  showPage("homePage");

  setTimeout(() => {
    const hasStarted = localStorage.getItem("roblingo_started") === "true";
    showOnlyScreen(hasStarted ? screens.app : screens.welcome);
    if (hasStarted) showPage("homePage");
  }, 2200);
}

init();
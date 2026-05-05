const $ = (id) => document.getElementById(id);

const screens = {
  splash: $("splashScreen"),
  welcome: $("welcomeScreen"),
  app: $("appScreen"),
  lesson: $("lessonScreen")
};

const pages = [
  "homePage",
  "lessonsPage",
  "achievementsPage",
  "profilePage",
  "shopPage",
  "builderPage",
  "updatesPage"
];

const navButtons = document.querySelectorAll(".nav-btn");
const colourButtons = document.querySelectorAll(".colour-btn");

const els = {
  lessonList: $("lessonList"),
  achievementList: $("achievementList"),
  helpList: $("helpList"),

  startBtn: $("startBtn"),
  continueBtn: $("continueBtn"),
  backBtn: $("backBtn"),

  homeLessonsBtn: $("homeLessonsBtn"),
  homeAchievementsBtn: $("homeAchievementsBtn"),
  homeProfileBtn: $("homeProfileBtn"),
  homePetBtn: $("homePetBtn"),
  homeShopBtn: $("homeShopBtn"),
  homeHelpBtn: $("homeHelpBtn"),

  casualBtn: $("casualBtn"),
  politeBtn: $("politeBtn"),
  micBtn: $("micBtn"),
  completeBtn: $("completeBtn"),

  lessonTag: $("lessonTag"),
  mainWord: $("mainWord"),
  definitionText: $("definitionText"),
  lessonSubtext: $("lessonSubtext"),
  casualNote: $("casualNote"),
  politeNote: $("politeNote"),
  lessonProgressPill: $("lessonProgressPill"),

  recordingStatus: $("recordingStatus"),
  recordingPlayerWrap: $("recordingPlayerWrap"),

  scoreCard: $("scoreCard"),
  scoreCircle: $("scoreCircle"),
  scoreTitle: $("scoreTitle"),
  scoreFeedback: $("scoreFeedback"),

  successOverlay: $("successOverlay"),
  successTitle: $("successTitle"),
  successText: $("successText"),
  successParrot: $("successParrot"),

  achievementOverlay: $("achievementOverlay"),
  achievementPopupTitle: $("achievementPopupTitle"),
  achievementPopupText: $("achievementPopupText"),

  streakCount: $("streakCount"),
  xpText: $("xpText"),
  xpTopText: $("xpTopText"),
  xpFill: $("xpFill"),
  xpLevelText: $("xpLevelText"),
  levelNumber: $("levelNumber"),
  gemsDisplay: $("gemsDisplay"),
  freezeCountDisplay: $("freezeCountDisplay"),

  homeLessonProgress: $("homeLessonProgress"),
  homeAchievementProgress: $("homeAchievementProgress"),
  dailyTipText: $("dailyTipText"),

  profilePetCard: $("profilePetCard"),
  profileStreak: $("profileStreak"),
  profileFreezes: $("profileFreezes"),
  profileXP: $("profileXP"),
  profileGems: $("profileGems"),
  profileLessons: $("profileLessons"),
  profileAchievements: $("profileAchievements"),
  profileLevel: $("profileLevel"),

  buyFreezeBtn: $("buyFreezeBtn"),
  buyCrownBtn: $("buyCrownBtn"),
  buyScarfBtn: $("buyScarfBtn"),

  roblingoPet: $("roblingoPet"),
  homeParrot: $("homeParrot"),

  petHat: $("petHat"),
  petGlasses: $("petGlasses"),
  petBow: $("petBow"),
  petScarf: $("petScarf"),
  petCrown: $("petCrown"),

  homePetHat: $("homePetHat"),
  homePetGlasses: $("homePetGlasses"),
  homePetBow: $("homePetBow"),
  homePetScarf: $("homePetScarf"),
  homePetCrown: $("homePetCrown"),

  unlockHatBtn: $("unlockHatBtn"),
  unlockGlassesBtn: $("unlockGlassesBtn"),
  unlockBowBtn: $("unlockBowBtn"),

  equipHatBtn: $("equipHatBtn"),
  equipGlassesBtn: $("equipGlassesBtn"),
  equipBowBtn: $("equipBowBtn"),
  equipScarfBtn: $("equipScarfBtn"),
  equipCrownBtn: $("equipCrownBtn"),

  hatOwnedText: $("hatOwnedText"),
  glassesOwnedText: $("glassesOwnedText"),
  bowOwnedText: $("bowOwnedText"),
  scarfOwnedText: $("scarfOwnedText"),
  crownOwnedText: $("crownOwnedText")
};

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
  { id: 1, title: "Section 1", subtitle: "Basic pronunciation words", lessonIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { id: 2, title: "Section 2", subtitle: "Everyday speaking words", lessonIds: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
  { id: 3, title: "Section 3", subtitle: "Useful daily vocabulary", lessonIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
  { id: 4, title: "Section 4", subtitle: "Speaking confidence words", lessonIds: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
  { id: 5, title: "Section 5", subtitle: "Harder words", lessonIds: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50] }
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
  { title: "Real speech check", text: "Roblingo tries to listen to the word and compare it to the lesson word. If the browser does not support it, it falls back to normal recording." },
  { title: "Recording fallback", text: "If speech checking fails on Safari or another browser, Roblingo still records audio so the learner can listen back." },
  { title: "Profile", text: "Your profile shows your XP, gems, freezes, achievements, lessons and your personal Roblingo pet." },
  { title: "Roblingo Pet", text: "Choose a colour or unlock an item to create your pet. That pet becomes your profile avatar." },
  { title: "Progress safety", text: "This version keeps existing localStorage keys for XP, gems, streaks, completed lessons and pet items." }
];

let currentLesson = null;
let currentRecorder = null;
let currentStream = null;
let currentAudioChunks = [];
let currentRecognition = null;
let isRecording = false;
let isListeningForSpeech = false;
let lastPronunciationScore = null;

function addClick(element, callback) {
  if (element) element.addEventListener("click", callback);
}

function showOnlyScreen(screenToShow) {
  Object.values(screens).forEach((screen) => screen?.classList.remove("active"));
  screenToShow?.classList.add("active");
}

function showPage(pageId) {
  pages.forEach((id) => $(id)?.classList.remove("active"));
  navButtons.forEach((btn) => btn.classList.remove("active"));
  $(pageId)?.classList.add("active");
  document.querySelector(`.nav-btn[data-page="${pageId}"]`)?.classList.add("active");
  updateAllUI();
}

function getNumber(key) {
  return Number(localStorage.getItem(key)) || 0;
}

function setLocalNumber(key, value) {
  localStorage.setItem(key, String(Math.max(0, Number(value) || 0)));
}

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
function getLevelFromXP(xp) { return Math.floor(xp / XP_LEVEL_SIZE) + 1; }

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

function stopSpeechRecognition() {
  if (!currentRecognition) return;
  try {
    currentRecognition.stop();
  } catch (error) {
    console.warn("Speech recognition already stopped.", error);
  }
  currentRecognition = null;
  isListeningForSpeech = false;
}

function isSpeechRecognitionSupported() {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

function normaliseSpeechText(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
}

function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i += 1) matrix[i] = [i];
  for (let j = 0; j <= a.length; j += 1) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function calculateSpeechMatchScore(spokenText, targetWord) {
  const spoken = normaliseSpeechText(spokenText);
  const target = normaliseSpeechText(targetWord);
  if (!spoken || !target) return 0;
  if (spoken === target) return 98;
  if (spoken.includes(target)) return 92;

  const words = spoken.split(" ");
  const bestWordScore = words.reduce((best, word) => {
    const distance = levenshteinDistance(word, target);
    const longest = Math.max(word.length, target.length);
    const similarity = longest === 0 ? 0 : 1 - distance / longest;
    return Math.max(best, similarity);
  }, 0);

  const fullDistance = levenshteinDistance(spoken, target);
  const fullLongest = Math.max(spoken.length, target.length);
  const fullSimilarity = fullLongest === 0 ? 0 : 1 - fullDistance / fullLongest;
  const finalSimilarity = Math.max(bestWordScore, fullSimilarity);
  return Math.max(15, Math.min(95, Math.round(finalSimilarity * 100)));
}

function showSpeechScore(spokenText, score) {
  lastPronunciationScore = score;
  if (els.scoreCircle) els.scoreCircle.textContent = `${score}%`;
  if (els.scoreTitle) els.scoreTitle.textContent = "Speech match score";

  if (els.scoreFeedback) {
    if (score >= 90) {
      els.scoreFeedback.textContent = `Excellent. I heard "${spokenText}".`;
    } else if (score >= 75) {
      els.scoreFeedback.textContent = `Good try. I heard "${spokenText}". Try making "${currentLesson.word}" clearer.`;
    } else if (score >= 50) {
      els.scoreFeedback.textContent = `Close. I heard "${spokenText}". Try saying "${currentLesson.word}" slowly, then naturally.`;
    } else {
      els.scoreFeedback.textContent = `I heard "${spokenText}". Try again and focus on "${currentLesson.word}".`;
    }
  }

  els.scoreCard?.classList.remove("hidden");
  if (els.recordingStatus) els.recordingStatus.textContent = `Detected: "${spokenText}"`;
  if (els.lessonProgressPill) els.lessonProgressPill.textContent = "Step 3 / 3";
}

function resetMicButton() {
  els.micBtn?.classList.remove("recording");
  if (els.micBtn) els.micBtn.textContent = "🎤 Tap to Speak";
}

function startRealSpeechCheck() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition || !currentLesson) return false;

  if (isListeningForSpeech) {
    stopSpeechRecognition();
    resetMicButton();
    if (els.recordingStatus) els.recordingStatus.textContent = "Stopped listening.";
    return true;
  }

  const recognition = new SpeechRecognition();
  currentRecognition = recognition;
  recognition.lang = "en-GB";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  els.scoreCard?.classList.add("hidden");
  lastPronunciationScore = null;
  isListeningForSpeech = true;
  if (els.recordingStatus) els.recordingStatus.textContent = "Listening... say the word clearly.";
  els.micBtn?.classList.add("recording");
  if (els.micBtn) els.micBtn.textContent = "🎙️ Listening...";
  if (els.lessonProgressPill) els.lessonProgressPill.textContent = "Step 2 / 3";

  recognition.onresult = (event) => {
    const spokenText = event.results?.[0]?.[0]?.transcript || "";
    const score = calculateSpeechMatchScore(spokenText, currentLesson.word);
    showSpeechScore(spokenText, score);
    isListeningForSpeech = false;
    currentRecognition = null;
    resetMicButton();
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    isListeningForSpeech = false;
    currentRecognition = null;
    resetMicButton();
    if (els.recordingStatus) els.recordingStatus.textContent = "Speech check did not work here. Falling back to normal recording.";
    setTimeout(() => handleRecording(els.micBtn, els.recordingStatus, els.recordingPlayerWrap), 600);
  };

  recognition.onend = () => {
    isListeningForSpeech = false;
    currentRecognition = null;
    resetMicButton();
  };

  try {
    recognition.start();
    return true;
  } catch (error) {
    console.error("Could not start speech recognition:", error);
    isListeningForSpeech = false;
    currentRecognition = null;
    resetMicButton();
    return false;
  }
}

async function handleRecording(micButton, statusEl, wrapEl) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (statusEl) statusEl.textContent = "Microphone is not supported on this browser.";
    return;
  }

  if (!isRecording) {
    try {
      if (wrapEl) wrapEl.innerHTML = "";
      els.scoreCard?.classList.add("hidden");
      lastPronunciationScore = null;
      currentStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      currentRecorder = new MediaRecorder(currentStream);
      currentAudioChunks = [];

      currentRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) currentAudioChunks.push(event.data);
      };

      currentRecorder.onstop = () => {
        isRecording = false;
        micButton?.classList.remove("recording");
        if (micButton) micButton.textContent = "🎤 Tap to Speak";

        const audioBlob = new Blob(currentAudioChunks, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        const player = document.createElement("audio");
        player.controls = true;
        player.src = audioUrl;

        if (wrapEl) {
          wrapEl.innerHTML = "";
          wrapEl.appendChild(player);
        }

        stopCurrentStream();
        if (statusEl) statusEl.textContent = "Recording saved. Speech checking is not supported here, but you can listen back and compare.";
        if (els.lessonProgressPill) els.lessonProgressPill.textContent = "Playback ready";
      };

      currentRecorder.start();
      isRecording = true;
      micButton?.classList.add("recording");
      if (micButton) micButton.textContent = "■ Stop Recording";
      if (statusEl) statusEl.textContent = "Recording fallback... tap again to stop.";
      if (els.lessonProgressPill) els.lessonProgressPill.textContent = "Recording";
    } catch (error) {
      if (statusEl) statusEl.textContent = "Microphone permission denied.";
      console.error("Mic error:", error);
      stopCurrentStream();
    }
  } else if (currentRecorder) {
    currentRecorder.stop();
  }
}

function updateXPUI() {
  const xp = getStoredXP();
  const currentBarXP = xp % XP_LEVEL_SIZE;
  const level = getLevelFromXP(xp);
  if (els.xpText) els.xpText.textContent = `${xp} XP`;
  if (els.xpTopText) els.xpTopText.textContent = `${xp} XP`;
  if (els.levelNumber) els.levelNumber.textContent = level;
  if (els.xpLevelText) els.xpLevelText.textContent = `${currentBarXP} / ${XP_LEVEL_SIZE} to next level`;
  if (els.xpFill) els.xpFill.style.width = `${(currentBarXP / XP_LEVEL_SIZE) * 100}%`;
}

function updateStreakUI() {
  if (els.streakCount) els.streakCount.textContent = getStoredStreak();
}

function updateGemsUI() {
  if (els.gemsDisplay) els.gemsDisplay.textContent = getStoredGems();
  if (els.freezeCountDisplay) els.freezeCountDisplay.textContent = getStoredFreezes();
}

function updateHomeStats() {
  const completeCount = getCompletedLessonCount();
  const unlockedAchievements = achievements.filter((achievement) => getAchievementUnlocked(achievement.id) || isAchievementComplete(achievement)).length;
  if (els.homeLessonProgress) els.homeLessonProgress.textContent = `${completeCount} / ${lessons.length} complete`;
  if (els.homeAchievementProgress) els.homeAchievementProgress.textContent = `${unlockedAchievements} unlocked`;
  const nextLesson = getNextLesson();
  if (els.continueBtn) els.continueBtn.textContent = nextLesson ? `Continue: ${nextLesson.word}` : "All lessons complete";
  if (els.dailyTipText) els.dailyTipText.textContent = tips[new Date().getDate() % tips.length];
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
  if (!els.profilePetCard) return;
  const xp = getStoredXP();
  const completeCount = getCompletedLessonCount();
  const unlockedAchievements = achievements.filter((achievement) => getAchievementUnlocked(achievement.id) || isAchievementComplete(achievement)).length;

  if (els.profileStreak) els.profileStreak.textContent = getStoredStreak();
  if (els.profileFreezes) els.profileFreezes.textContent = getStoredFreezes();
  if (els.profileXP) els.profileXP.textContent = xp;
  if (els.profileGems) els.profileGems.textContent = getStoredGems();
  if (els.profileLessons) els.profileLessons.textContent = `${completeCount} / ${lessons.length}`;
  if (els.profileAchievements) els.profileAchievements.textContent = `${unlockedAchievements} / ${achievements.length}`;
  if (els.profileLevel) els.profileLevel.textContent = getLevelFromXP(xp);

  if (!getPetCreated()) {
    els.profilePetCard.innerHTML = `
      <div class="css-parrot profile-parrot">
        <div class="parrot-head"></div><div class="parrot-body"></div><div class="parrot-wing"></div><div class="parrot-eye"></div><div class="parrot-beak"></div><div class="parrot-feet"></div>
      </div>
      <h3>Make a Roblingo to make a profile</h3>
      <p>Your profile avatar will become the Roblingo pet you create in the Pet page.</p>
      <button class="daily-btn" id="profileMakePetBtn" type="button">Make Roblingo</button>
    `;
    addClick($("profileMakePetBtn"), () => showPage("builderPage"));
  } else {
    els.profilePetCard.innerHTML = `${createPetMarkup()}<h3>Your Roblingo</h3><p>This is your custom profile pet. Change it anytime in the Pet page.</p>`;
  }
  applySavedColourToAllParrots();
}

function renderHelp() {
  if (!els.helpList) return;
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
  button.innerHTML = `<span class="node-circle">${complete ? "✓" : unlocked ? lesson.id : "🔒"}</span><span class="lesson-info"><strong>${lesson.word}</strong><p>${getLessonSubtitle(lesson)}</p></span>`;
  if (unlocked) button.addEventListener("click", () => openLesson(lesson.id));
  return button;
}

function renderLessons() {
  if (!els.lessonList) return;
  els.lessonList.innerHTML = "";
  sections.forEach((section) => {
    const wrapper = document.createElement("section");
    wrapper.className = "path-section";
    const completedInSection = section.lessonIds.filter((id) => isLessonComplete(id)).length;
    const progressPercent = (completedInSection / section.lessonIds.length) * 100;
    wrapper.innerHTML = `<div class="path-section-head"><h3>${section.title}</h3><p>${section.subtitle}</p><div class="path-progress"><div class="path-progress-fill" style="width:${progressPercent}%"></div></div></div><div class="path-nodes"></div>`;
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
  if (!els.achievementList) return;
  els.achievementList.innerHTML = "";
  achievements.forEach((achievement) => {
    const unlocked = getAchievementUnlocked(achievement.id) || isAchievementComplete(achievement);
    const card = document.createElement("div");
    card.className = `achievement-card ${unlocked ? "unlocked" : "locked"}`;
    card.innerHTML = `<div class="achievement-icon">${unlocked ? achievement.icon : "🔒"}</div><div><h3>${achievement.title}</h3><p>${achievement.text}</p></div>`;
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
  if (!els.achievementOverlay) return;
  if (els.achievementPopupTitle) els.achievementPopupTitle.textContent = achievement.title;
  if (els.achievementPopupText) els.achievementPopupText.textContent = achievement.text;
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
    // Already counted today.
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
  if (!els.successOverlay) return;
  if (els.successTitle) els.successTitle.textContent = title;
  if (els.successText) els.successText.textContent = text;
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
  if (!button) return;
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
    if (statusEl) statusEl.textContent = "Audio not added yet.";
    return;
  }
  const audio = new Audio(path);
  audio.onloadeddata = () => { if (statusEl) statusEl.textContent = `Playing ${label}...`; };
  audio.onerror = () => {
    if (statusEl) statusEl.textContent = `Could not load ${path}`;
    console.error("Could not load:", path);
  };
  audio.onended = () => { if (statusEl) statusEl.textContent = `${label} finished.`; };
  audio.play().then(() => {
    markButtonPlaying(button, audio);
    animateElement(els.homeParrot, "wiggle");
  }).catch((error) => {
    if (statusEl) statusEl.textContent = `Could not play ${path}`;
    console.error("Could not play:", path, error);
  });
}

function updateLessonButtonsForMode(lesson) {
  if (!els.casualBtn || !els.politeBtn) return;
  const casualTitle = els.casualBtn.querySelector(".audio-title");
  const politeTitle = els.politeBtn.querySelector(".audio-title");

  if (lesson.mode === "dual") {
    els.casualBtn.style.display = "flex";
    els.politeBtn.style.display = "flex";
    if (casualTitle) casualTitle.textContent = "🔊 Casual";
    if (politeTitle) politeTitle.textContent = "🔊 Polite";
    if (els.casualNote) els.casualNote.textContent = lesson.casualLabel || lesson.word.toLowerCase();
    if (els.politeNote) els.politeNote.textContent = lesson.politeLabel || lesson.word;
    return;
  }

  els.casualBtn.style.display = "flex";
  els.politeBtn.style.display = "none";
  if (casualTitle) casualTitle.textContent = "🔊 Listen";
  if (els.casualNote) els.casualNote.textContent = lesson.audioLabel || lesson.word.toLowerCase();
  if (els.politeNote) els.politeNote.textContent = "";
}

function getLessonInstructionText(lesson) {
  return lesson.mode === "dual"
    ? "Listen to both pronunciations, then tap the mic. Roblingo will try to check what you say."
    : "Listen to the pronunciation, then tap the mic. Roblingo will try to check what you say.";
}

function openLesson(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson) return;
  stopSpeechRecognition();
  stopCurrentStream();
  currentLesson = lesson;
  lastPronunciationScore = null;

  if (els.lessonTag) els.lessonTag.textContent = lesson.title;
  if (els.mainWord) els.mainWord.textContent = lesson.word;
  if (els.definitionText) els.definitionText.textContent = lesson.definition;
  if (els.lessonSubtext) els.lessonSubtext.textContent = getLessonInstructionText(lesson);
  if (els.lessonProgressPill) els.lessonProgressPill.textContent = "Step 1 / 3";
  updateLessonButtonsForMode(lesson);

  if (els.recordingStatus) {
    els.recordingStatus.textContent = isSpeechRecognitionSupported()
      ? "Tap listen, then tap the mic and say the word clearly."
      : "Speech check is not supported here. The mic will record playback instead.";
  }

  if (els.recordingPlayerWrap) els.recordingPlayerWrap.innerHTML = "";
  els.scoreCard?.classList.add("hidden");
  if (els.scoreCircle) els.scoreCircle.textContent = "0%";
  if (els.scoreTitle) els.scoreTitle.textContent = "Speech match score";
  if (els.scoreFeedback) els.scoreFeedback.textContent = "Tap the mic and say the word to get checked.";
  resetMicButton();
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
  const selected = getColourMap()[colour] || getColourMap().green;
  document.querySelectorAll(".css-parrot").forEach((parrot) => {
    parrot.style.setProperty("--pet-main", selected.main);
    parrot.style.setProperty("--pet-wing", selected.wing);
    parrot.style.setProperty("--pet-belly", selected.belly);
  });
  colourButtons.forEach((btn) => btn.classList.toggle("active-colour", btn.dataset.colour === colour));
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

  if (els.hatOwnedText) els.hatOwnedText.textContent = hatState.owned ? (hatState.equipped ? "Equipped" : "Owned") : "Locked";
  if (els.glassesOwnedText) els.glassesOwnedText.textContent = glassesState.owned ? (glassesState.equipped ? "Equipped" : "Owned") : "Locked";
  if (els.bowOwnedText) els.bowOwnedText.textContent = bowState.owned ? (bowState.equipped ? "Equipped" : "Owned") : "Locked";
  if (els.scarfOwnedText) els.scarfOwnedText.textContent = scarfState.owned ? (scarfState.equipped ? "Equipped" : "Owned") : "Locked";
  if (els.crownOwnedText) els.crownOwnedText.textContent = crownState.owned ? (crownState.equipped ? "Equipped" : "Owned") : "Locked";

  if (els.unlockHatBtn) {
    els.unlockHatBtn.textContent = hatState.owned ? "Owned ✓" : "Unlock";
    els.unlockHatBtn.classList.toggle("owned", hatState.owned);
  }
  if (els.unlockGlassesBtn) {
    els.unlockGlassesBtn.textContent = glassesState.owned ? "Owned ✓" : "Unlock";
    els.unlockGlassesBtn.classList.toggle("owned", glassesState.owned);
  }
  if (els.unlockBowBtn) {
    els.unlockBowBtn.textContent = bowState.owned ? "Owned ✓" : "Unlock";
    els.unlockBowBtn.classList.toggle("owned", bowState.owned);
  }

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
  addClick(els.backBtn, () => {
    stopSpeechRecognition();
    stopCurrentStream();
    showOnlyScreen(screens.app);
    showPage("lessonsPage");
  });

  addClick(els.casualBtn, () => {
    if (!currentLesson) return;
    if (currentLesson.mode === "dual") {
      playAudio(currentLesson.casualAudio, els.recordingStatus, "casual pronunciation", els.casualBtn);
      return;
    }
    playAudio(currentLesson.audio, els.recordingStatus, "pronunciation", els.casualBtn);
  });

  addClick(els.politeBtn, () => {
    if (!currentLesson || currentLesson.mode !== "dual") return;
    playAudio(currentLesson.politeAudio, els.recordingStatus, "polite pronunciation", els.politeBtn);
  });

  addClick(els.micBtn, () => {
    if (isRecording) {
      handleRecording(els.micBtn, els.recordingStatus, els.recordingPlayerWrap);
      return;
    }

    if (isSpeechRecognitionSupported()) {
      const started = startRealSpeechCheck();
      if (started) return;
    }

    if (els.recordingStatus) {
      els.recordingStatus.textContent = "Speech checking is not supported here. Recording instead so you can listen back.";
    }
    handleRecording(els.micBtn, els.recordingStatus, els.recordingPlayerWrap);
  });

  addClick(els.completeBtn, () => {
    if (!currentLesson) return;
    saveLessonCompletion(currentLesson.id);
    const scoreText = lastPronunciationScore ? ` • ${lastPronunciationScore}%` : "";
    showSuccess("Nice one", `${currentLesson.title} complete${scoreText} • +10 XP • +5 Gems`);
  });

  navButtons.forEach((button) => button.addEventListener("click", () => showPage(button.dataset.page)));
  addClick(els.startBtn, () => {
    localStorage.setItem("roblingo_started", "true");
    showOnlyScreen(screens.app);
    showPage("homePage");
  });
  addClick(els.continueBtn, () => {
    const nextLesson = getNextLesson();
    if (nextLesson) openLesson(nextLesson.id);
  });

  addClick(els.homeLessonsBtn, () => showPage("lessonsPage"));
  addClick(els.homeAchievementsBtn, () => showPage("achievementsPage"));
  addClick(els.homeProfileBtn, () => showPage("profilePage"));
  addClick(els.homePetBtn, () => showPage("builderPage"));
  addClick(els.homeShopBtn, () => showPage("shopPage"));
  addClick(els.homeHelpBtn, () => showPage("updatesPage"));

  addClick(els.buyFreezeBtn, buyFreeze);
  addClick(els.buyCrownBtn, () => buyAccessory("crown", 120));
  addClick(els.buyScarfBtn, () => buyAccessory("scarf", 70));
  addClick(els.unlockHatBtn, unlockHat);
  addClick(els.unlockGlassesBtn, unlockGlasses);
  addClick(els.unlockBowBtn, unlockBow);
  addClick(els.equipHatBtn, () => toggleEquip("hat"));
  addClick(els.equipGlassesBtn, () => toggleEquip("glasses"));
  addClick(els.equipBowBtn, () => toggleEquip("bow"));
  addClick(els.equipScarfBtn, () => toggleEquip("scarf"));
  addClick(els.equipCrownBtn, () => toggleEquip("crown"));

  colourButtons.forEach((button) => {
    button.addEventListener("click", () => updatePetColour(button.dataset.colour));
  });
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
const vocabData = {
    Hello: [
        { word: 'hello', emoji: '👋', ipa: '/həˈləʊ/', meaning: 'xin chào' },
        { word: 'goodbye', emoji: '👋', ipa: '/ˌɡʊdˈbaɪ/', meaning: 'tạm biệt' },
        { word: 'nice', emoji: '😊', ipa: '/naɪs/', meaning: 'vui, tốt' },
        { word: 'meet', emoji: '🤝', ipa: '/miːt/', meaning: 'gặp' },
        { word: 'friend', emoji: '👭', ipa: '', meaning: 'Bạn' },
        { word: 'stand up', emoji: '🪑⬆️', ipa: '', meaning: 'đứng dậy' },
        { word: 'sit down', emoji: '🪑⬇️', ipa: '', meaning: 'ngồi xuống' },
        { word: 'hands up', emoji: '🙌', ipa: '', meaning: 'giơ tay lên' },
        { word: 'open your book', emoji: '📖🔓', ipa: '', meaning: 'mở sách' },
        { word: 'close your book', emoji: '📖🔒', ipa: '', meaning: 'đóng sách' },
        { word: 'hands down', emoji: '🙇', ipa: '', meaning: 'hạ tay xuống' },
        { word: "what's your name?", emoji: '❓', ipa: '', meaning: 'Bạn tên là gì?' },
        { word: 'My name is Tom', emoji: '🏷️', ipa: '', meaning: 'Tên tôi là Tom' },
        { word: 'How old are you?', emoji: '🎂', ipa: '', meaning: 'Bạn bao nhiêu tuổi?' },
        { word: "I'm eight", emoji: '8️⃣', ipa: '', meaning: 'Tôi 8 tuổi' },
        { word: 'name', emoji: '🏷️', ipa: '', meaning: 'Tên' },
        { word: 'spell', emoji: '📖', ipa: '', meaning: 'Đánh vần' },
        { word: 'what', emoji: '❓', ipa: '', meaning: 'Cái gì' },
        { word: 'your name', emoji: '🏷️', ipa: '', meaning: 'Tên của bạn' }
    ],
    MyWeek: [
        { word: 'Monday', emoji: '📅', ipa: '🇺🇸 /ˈmʌn.deɪ/', meaning: 'Thứ hai' },
        { word: 'Tuesday', emoji: '📅', ipa: '🇺🇸 /ˈtjuːz.deɪ/', meaning: 'Thứ ba' },
        { word: 'Wednesday', emoji: '📅', ipa: '🇺🇸 /ˈwenz.deɪ/', meaning: 'Thứ tư' },
        { word: 'Thursday', emoji: '📅', ipa: '🇺🇸 /ˈθɝːz.deɪ/', meaning: 'Thứ năm' },
        { word: 'Friday', emoji: '📅', ipa: '🇺🇸 /ˈfraɪ.deɪ/', meaning: 'Thứ sáu' },
        { word: 'Saturday', emoji: '📅', ipa: '🇺🇸 /ˈsæt̬.ɚ.deɪ/', meaning: 'Thứ bảy' },
        { word: 'Sunday', emoji: '📅', ipa: '🇺🇸 /ˈsʌn.deɪ/', meaning: 'Chủ nhật' },

        { word: 'Week', emoji: '🗓️', ipa: '🇺🇸 /wiːk/', meaning: 'Tuần' },
        { word: 'Weekend', emoji: '🎉', ipa: '🇺🇸 /ˈwiːk.end/', meaning: 'Cuối tuần' },
        { word: 'Weekday', emoji: '🏫', ipa: '🇺🇸 /ˈwiːk.deɪ/', meaning: 'Ngày trong tuần' },

        { word: 'Today', emoji: '📍', ipa: '🇺🇸 /təˈdeɪ/', meaning: 'Hôm nay' },
        { word: 'Tomorrow', emoji: '➡️', ipa: '🇺🇸 /təˈmɑːr.oʊ/', meaning: 'Ngày mai' },
        { word: 'Yesterday', emoji: '⬅️', ipa: '🇺🇸 /ˈjes.tɚ.deɪ/', meaning: 'Hôm qua' },

        { word: 'Morning', emoji: '🌅', ipa: '🇺🇸 /ˈmɔːr.nɪŋ/', meaning: 'Buổi sáng' },
        { word: 'Afternoon', emoji: '☀️', ipa: '🇺🇸 /ˌæf.tɚˈnuːn/', meaning: 'Buổi chiều' },
        { word: 'Evening', emoji: '🌆', ipa: '🇺🇸 /ˈiːv.nɪŋ/', meaning: 'Buổi tối' },
        { word: 'Night', emoji: '🌙', ipa: '🇺🇸 /naɪt/', meaning: 'Ban đêm' },

        { word: 'Calendar', emoji: '📆', ipa: '🇺🇸 /ˈkæl.ən.dɚ/', meaning: 'Lịch' },
        { word: 'Holiday', emoji: '🏖️', ipa: '🇺🇸 /ˈhɑː.lə.deɪ/', meaning: 'Ngày nghỉ' },
        { word: 'Schedule', emoji: '📝', ipa: '🇺🇸 /ˈskedʒ.uːl/', meaning: 'Thời khóa biểu' }
    ],
    MyBirthdayParty: [
        { word: 'Cake', emoji: '🎂', ipa: '🇺🇸 /keɪk/', meaning: 'Bánh kem' },
        { word: 'Gift', emoji: '🎁', ipa: '🇺🇸 /ɡɪft/', meaning: 'Quà tặng' },
        { word: 'Balloon', emoji: '🎈', ipa: '🇺🇸 /bəˈluːn/', meaning: 'Bóng bay' }
    ],
    SportsDay: [
        { word: 'Running', emoji: '🏃', ipa: '🇺🇸 /ˈrʌnɪŋ/', meaning: 'Chạy bộ' },
        { word: 'Jumping', emoji: '🤾', ipa: '🇺🇸 /ˈdʒʌmpɪŋ/', meaning: 'Nhảy' },
        { word: 'Throw', emoji: '🏈', ipa: '🇺🇸 /θroʊ/', meaning: 'Ném' }
    ],
    SummerHoliday: [
        { word: 'Beach', emoji: '🏖️', ipa: '🇺🇸 /biːtʃ/', meaning: 'Bãi biển' },
        { word: 'Swim', emoji: '🏊', ipa: '🇺🇸 /swɪm/', meaning: 'Bơi' },
        { word: 'Sun', emoji: '☀️', ipa: '🇺🇸 /sʌn/', meaning: 'Mặt trời' }
    ],
    Home: [
        { word: 'Room', emoji: '🚪', ipa: '🇺🇸 /ruːm/', meaning: 'Căn phòng' },
        { word: 'Garden', emoji: '🌳', ipa: '🇺🇸 /ˈɡɑːr.dən/', meaning: 'Khu vườn' },
        { word: 'Kitchen', emoji: '🍳', ipa: '🇺🇸 /ˈkɪtʃ.ən/', meaning: 'Nhà bếp' }
    MyFriends: [
            { word: 'America', emoji: '🇺🇸', ipa: '🇺🇸 /əˈmerɪkə/', meaning: 'nước Mỹ', flagImg: 'assets/flags/usa.svg' },
            { word: 'Australia', emoji: '🇦🇺', ipa: '🇺🇸 /ɒˈstreɪliə/', meaning: 'nước Úc', flagImg: 'assets/flags/australia.svg' },
            { word: 'Britain', emoji: '🇬🇧', ipa: '🇺🇸 /ˈbrɪtn/', meaning: 'nước Anh', flagImg: 'assets/flags/britain.svg' },
            { word: 'Japan', emoji: '🇯🇵', ipa: '🇺🇸 /dʒəˈpæn/', meaning: 'nước Nhật', flagImg: 'assets/flags/japan.svg' },
            { word: 'Malaysia', emoji: '🇲🇾', ipa: '🇺🇸 /məˈleɪziə/', meaning: 'Malaysia', flagImg: 'assets/flags/malaysia.svg' },
            { word: 'Singapore', emoji: '🇸🇬', ipa: '🇺🇸 /ˌsɪŋəˈpɔː/', meaning: 'Singapore', flagImg: 'assets/flags/singapore.svg' },
            { word: 'Thailand', emoji: '🇹🇭', ipa: '🇺🇸 /ˈtaɪlənd/', meaning: 'Thái Lan', flagImg: 'assets/flags/thailand.svg' },
            { word: 'Viet Nam', emoji: '🇻🇳', ipa: '🇺🇸 /ˌviːetˈnɑːm/', meaning: 'Việt Nam', flagImg: 'assets/flags/vietnam.svg' },
            { word: 'Country', emoji: '🌍', ipa: '🇺🇸 /ˈkʌntri/', meaning: 'quốc gia' },
            { word: 'Friendly', emoji: '😊', ipa: '🇺🇸 /ˈfrɛndli/', meaning: 'thân thiện' }
        ],
        Colors: [
            { word: 'Red', emoji: '🟥', ipa: '🇺🇸 /red/', meaning: 'Màu đỏ' },
            { word: 'Blue', emoji: '🟦', ipa: '🇺🇸 /bluː/', meaning: 'Màu xanh dương' },
            { word: 'Green', emoji: '🟩', ipa: '🇺🇸 /ɡriːn/', meaning: 'Màu xanh lá' },
            { word: 'Yellow', emoji: '🟨', ipa: '🇺🇸 /ˈjel.oʊ/', meaning: 'Màu vàng' },
            { word: 'Purple', emoji: '🟪', ipa: '🇺🇸 /ˈpɝː.pəl/', meaning: 'Màu tím' },
            { word: 'Orange', emoji: '🟧', ipa: '🇺🇸 /ˈɔːr.ɪndʒ/', meaning: 'Màu cam' },
            { word: 'Pink', emoji: '💗', ipa: '🇺🇸 /pɪŋk/', meaning: 'Màu hồng' },
            { word: 'Black', emoji: '⬛', ipa: '🇺🇸 /blæk/', meaning: 'Màu đen' },
            { word: 'White', emoji: '⬜', ipa: '🇺🇸 /waɪt/', meaning: 'Màu trắng' },
            { word: 'Grey', emoji: '⚪', ipa: '🇺🇸 /ɡreɪ/', meaning: 'Màu xám' },
            { word: 'Brown', emoji: '🟫', ipa: '🇺🇸 /braʊn/', meaning: 'Màu nâu' },
            { word: 'Gold', emoji: '🟨', ipa: '🇺🇸 /ɡoʊld/', meaning: 'Màu vàng kim' },
        ],
};

// Merged Vietnamese meanings directly into vocabData entries

// Meanings are now part of vocabData; no additional processing needed

let currentDifficulty = 'easy';

const difficultySettings = {
    easy: {
        time: 90,
        lives: 3,
        optionsCount: 2
    },
    medium: {
        time: 60,
        lives: 3,
        optionsCount: 4
    },
    hard: {
        time: 40,
        lives: 3,
        optionsCount: 8
    }
};

let categoryLives = {
    Animals: 0,
    Fruits: 0,
    Colors: 0,
    Food: 0,
    School: 0,
    Jobs: 0,
    Vehicles: 0,
    Sports: 0,
    Verbs: 0,
    MyFriends: 0,
    TimeDailyRoutines: 0,
    MyWeek: 0,
    MyBirthdayParty: 0,
    ThingsWeCanDo: 0,
    SchoolFacilities: 0,
    Timetables: 0,
    MyFavouriteSubjects: 0,
    SportsDay: 0,
    SummerHoliday: 0,
    MyHome: 0,
    Appearance: 0,
    DailyActivities: 0,
    FamilyWeekend: 0,
    Weather: 0,
    InTheCity: 0,
    AtTheShoppingCentre: 0,
    AnimalWorld: 0,
    AtSummerCamp: 0,
    "Getting-Started": 0
};

function setDifficulty(level) {
    currentDifficulty = level;

    document.querySelectorAll('.diff-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('diff-' + level);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    let voiceWord = 'Easy';
    if (level === 'medium') voiceWord = 'Medium';
    if (level === 'hard') voiceWord = 'Hard';

    const msg = new SpeechSynthesisUtterance(voiceWord);
    msg.lang = 'en-US';
    msg.rate = 1.0;
    window.speechSynthesis.speak(msg);
}

let currentCategory = '';
let score = 0;
let lives = 3;
let currentWord = null;
let options = [];
let isAnimating = false;
let timeRemaining = 60;
let timerInterval = null;
let remainingWords = [];
let isWaitingForCorrection = false;
let categoryScores = {};
;

// DOM Elements
const screenHome = document.getElementById('screen-home');
const screenGame = document.getElementById('screen-game');
const screenGameOver = document.getElementById('screen-game-over');
const categoryTitle = document.getElementById('game-category-title');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const finalScoreDisplay = document.getElementById('final-score');
const livesContainer = document.getElementById('lives-container');
const wordDisplay = document.getElementById('word-display');
const optionsGrid = document.getElementById('options-grid');
const rewardOverlay = document.getElementById('reward-overlay');
const timerBar = document.getElementById('timer-bar');

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function startGame(category) {
    console.log('Starting game for category:', category);
    if (!vocabData.hasOwnProperty(category)) {
        console.error('Category data missing for', category);
        alert('Sorry, data for this category is unavailable.');
        return;
    }

    currentCategory = category;
    // Initialize score and lives entry for the current category if not present
    if (!(currentCategory in categoryScores)) {
        categoryScores[currentCategory] = 0;
    }
    if (!(currentCategory in categoryLives)) {
        categoryLives[currentCategory] = 0;
    }

    remainingWords = [...vocabData[category]];
    const perWordSec = { easy: 10, medium: 8, hard: 5 }[currentDifficulty] || 8;
    const totalTime = remainingWords.length * perWordSec; // total seconds for the round
    timeRemaining = totalTime;

    // Lives are still taken from difficulty settings.
    const settings = difficultySettings[currentDifficulty];
    lives = settings.lives;

    categoryTitle.innerText = category;
    scoreDisplay.innerText = score;
    timerDisplay.innerText = timeRemaining;

    // Store totalTime for percentage calculation in the timer bar.
    window.__gameTotalTime = totalTime; // temporary global for the timer interval

    if (timerBar) {
        timerBar.style.width = '100%';
        timerBar.classList.remove('low-time');
    }

    initLivesDisplay();
    showScreen(screenGame);
    nextQuestion();

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.innerText = timeRemaining;
        if (timerBar) {
            const total = window.__gameTotalTime || settings.time;
            const percentage = Math.max(0, (timeRemaining / total) * 100);
            timerBar.style.width = percentage + '%';
            if (timeRemaining <= 15) {
                timerBar.classList.add('low-time');
            } else {
                timerBar.classList.remove('low-time');
            }
        }
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            updateCategoryScore();
            // Show Game Over screen instead of returning home.
            gameOver(false);
        }
    }, 1000);
}


function updateCategoryScore() {
    // Update stored scores
    categoryScores[currentCategory] = Math.max(categoryScores[currentCategory], score);
    // Use sanitized IDs for DOM lookups (replace spaces with hyphens)
    const sanitized = currentCategory.replace(/\s+/g, '-');
    const catScoreDisplay = document.getElementById('score-' + sanitized);
    if (catScoreDisplay) {
        catScoreDisplay.innerText = categoryScores[currentCategory];
    }

    const finalLives = Math.max(0, lives);
    categoryLives[currentCategory] = finalLives;
    const catLivesDisplay = document.getElementById('lives-' + sanitized);
    if (catLivesDisplay) {
        let heartsHTML = '';
        for (let i = 0; i < finalLives; i++) {
            heartsHTML += '❤️';
        }
        if (finalLives === 0) {
            heartsHTML = '💔';
        }
        catLivesDisplay.innerText = heartsHTML;
    }
}

function initLivesDisplay() {
    livesContainer.innerHTML = '';
    const maxLives = difficultySettings[currentDifficulty].lives;
    for (let i = 0; i < maxLives; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.innerText = '❤️';
        livesContainer.appendChild(heart);
    }
}

function updateLivesDisplay() {
    const hearts = livesContainer.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        if (index >= lives) {
            heart.classList.add('lost');
        } else {
            heart.classList.remove('lost');
        }
    });
}

function playAudio() {
    if (!currentWord) return;
    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8; // Slower for kids
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
}

function nextQuestion() {
    isAnimating = false;
    const words = vocabData[currentCategory];

    if (remainingWords.length === 0) {
        gameOver(true);
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    currentWord = remainingWords[randomIndex];
    remainingWords.splice(randomIndex, 1);

    // Pick wrong options based on difficulty settings
    const wrongOptionsCount = difficultySettings[currentDifficulty].optionsCount - 1;
    const wrongOptions = words.filter(w => w.word !== currentWord.word);
    wrongOptions.sort(() => 0.5 - Math.random());

    options = [currentWord, ...wrongOptions.slice(0, wrongOptionsCount)];
    options.sort(() => 0.5 - Math.random()); // Shuffle

    // Clear previous options
    optionsGrid.innerHTML = '';
    // Adjust grid columns based on difficulty
    const colsClass = {
        2: 'cols-2',
        4: 'cols-4',
        8: 'cols-8'
    }[difficultySettings[currentDifficulty].optionsCount];
    optionsGrid.className = `options-grid ${colsClass}`;

    // Render UI
    wordDisplay.innerText = currentWord.word;
    // Update IPA display
    const ipaBadge = document.getElementById('ipa-display');
    if (ipaBadge) { ipaBadge.innerText = currentWord.ipa; }
    // Render options with emoji and meaning
    options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        // Show emoji, optional flag image, and Vietnamese meaning
        btn.innerHTML = `<div class="emoji-display">${opt.emoji}</div>${opt.flagImg ? `<img src="${opt.flagImg}" class="flag-img">` : ''}<div class="meaning-text">${opt.meaning || ''}</div>`;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsGrid.appendChild(btn);
    });

    // Auto play audio
    playAudio();
}

function checkAnswer(selectedOpt, btnElement) {
    if (isAnimating) return;

    if (isWaitingForCorrection) {
        if (selectedOpt.word === currentWord.word) {
            isAnimating = true;
            btnElement.classList.remove('correct-glow');
            btnElement.classList.add('correct');

            rewardOverlay.classList.add('show');

            setTimeout(() => {
                rewardOverlay.classList.remove('show');
                isWaitingForCorrection = false;
                if (lives < 0) {
                    gameOver(false);
                } else {
                    nextQuestion();
                }
            }, 1500);
        }
        return;
    }

    isAnimating = true;

    if (selectedOpt.word === currentWord.word) {
        // Correct
        score += 10;
        scoreDisplay.innerText = score;
        btnElement.classList.add('correct');

        // Show reward animation
        rewardOverlay.classList.add('show');

        setTimeout(() => {
            rewardOverlay.classList.remove('show');
            nextQuestion();
        }, 1500);
    } else {
        // Wrong
        lives--;
        updateLivesDisplay();
        if (lives <= 0) {
            clearInterval(timerInterval);
            gameOver(false);
            return;
        }
        btnElement.classList.add('wrong');
        btnElement.classList.add('shake');

        // Show the correct emoji next to the target word immediately
        // Render UI
        wordDisplay.innerText = currentWord.word;
        // Update IPA display
        const ipaBadge = document.getElementById('ipa-display');
        if (ipaBadge) {
            ipaBadge.innerText = currentWord.ipa;
        }

        // Highlight correct answer card with glowing pulse
        const allCards = optionsGrid.querySelectorAll('.option-card');
        allCards.forEach(card => {
            if (card.innerText === currentWord.emoji) {
                card.classList.add('correct-glow');
            }
        });

        isWaitingForCorrection = true;
        isAnimating = false; // Allow click on correct answer to proceed
    }
}

function gameOver(isWin = false) {
    clearInterval(timerInterval);
    updateCategoryScore();
    finalScoreDisplay.innerText = score;

    const gameOverTitle = document.getElementById('game-over-title');
    const finalScoreLabel = document.getElementById('final-score-label');

    if (isWin) {
        if (gameOverTitle) {
            gameOverTitle.innerText = "You Win! 🏆";
            gameOverTitle.style.color = "#FFD166";
        }
        if (finalScoreLabel) {
            finalScoreLabel.innerText = "Congratulations! Score";
        }

        const msg = new SpeechSynthesisUtterance("Congratulations! You won!");
        msg.lang = 'en-US';
        msg.rate = 1.0;
        window.speechSynthesis.speak(msg);
    } else {
        if (gameOverTitle) {
            gameOverTitle.innerText = "Game Over!";
            gameOverTitle.style.color = "white";
        }
        if (finalScoreLabel) {
            finalScoreLabel.innerText = "Your Score";
        }

        const msg = new SpeechSynthesisUtterance("Game Over");
        msg.lang = 'en-US';
        msg.rate = 1.0;
        window.speechSynthesis.speak(msg);
    }

    showScreen(screenGameOver);
}

function goHome() {
    clearInterval(timerInterval);
    updateCategoryScore();
    showScreen(screenHome);
}

function restartGame() {
    startGame(currentCategory);
}

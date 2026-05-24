const vocabData = {
    Animals: [
        { word: 'Cat', emoji: '🐱', ipa: '🇺🇸 /kæt/' },
        { word: 'Dog', emoji: '🐶', ipa: '🇺🇸 /dɔːɡ/' },
        { word: 'Elephant', emoji: '🐘', ipa: '🇺🇸 /ˈel.ə.fənt/' },
        { word: 'Lion', emoji: '🦁', ipa: '🇺🇸 /ˈlaɪ.ən/' },
        { word: 'Monkey', emoji: '🐒', ipa: '🇺🇸 /ˈmʌŋ.ki/' },
        { word: 'Penguin', emoji: '🐧', ipa: '🇺🇸 /ˈpeŋ.ɡwɪn/' },
        { word: 'Giraffe', emoji: '🦒', ipa: '🇺🇸 /dʒɪˈræf/' },
        { word: 'Rabbit', emoji: '🐰', ipa: '🇺🇸 /ˈræb.ɪt/' },
        { word: 'Tiger', emoji: '🐯', ipa: '🇺🇸 /ˈtaɪ.ɡɚ/' },
        { word: 'Panda', emoji: '🐼', ipa: '🇺🇸 /ˈpæn.də/' }
    ],
    Fruits: [
        { word: 'Apple', emoji: '🍎', ipa: '🇺🇸 /ˈæp.əl/' },
        { word: 'Banana', emoji: '🍌', ipa: '🇺🇸 /bəˈnæn.ə/' },
        { word: 'Orange', emoji: '🍊', ipa: '🇺🇸 /ˈɔːr.ɪndʒ/' },
        { word: 'Grapes', emoji: '🍇', ipa: '🇺🇸 /ɡreɪps/' },
        { word: 'Strawberry', emoji: '🍓', ipa: '🇺🇸 /ˈstrɔːˌber.i/' },
        { word: 'Watermelon', emoji: '🍉', ipa: '🇺🇸 /ˈwɑː.t̬ɚˌmel.ən/' },
        { word: 'Pineapple', emoji: '🍍', ipa: '🇺🇸 /ˈpaɪn.æp.əl/' },
        { word: 'Cherry', emoji: '🍒', ipa: '🇺🇸 /ˈtʃer.i/' },
        { word: 'Mango', emoji: '🥭', ipa: '🇺🇸 /ˈmæŋ.ɡoʊ/' },
        { word: 'Pear', emoji: '🍐', ipa: '🇺🇸 /per/' }
    ],
    Colors: [
        { word: 'Red', emoji: '🟥', ipa: '🇺🇸 /red/' },
        { word: 'Blue', emoji: '🟦', ipa: '🇺🇸 /bluː/' },
        { word: 'Green', emoji: '🟩', ipa: '🇺🇸 /ɡriːn/' },
        { word: 'Yellow', emoji: '🟨', ipa: '🇺🇸 /ˈjel.oʊ/' },
        { word: 'Purple', emoji: '🟪', ipa: '🇺🇸 /ˈpɝː.pəl/' },
        { word: 'Orange', emoji: '🟧', ipa: '🇺🇸 /ˈɔːr.ɪndʒ/' },
        { word: 'Pink', emoji: '💗', ipa: '🇺🇸 /pɪŋk/' },
        { word: 'Black', emoji: '⬛', ipa: '🇺🇸 /blæk/' },
        { word: 'White', emoji: '⬜', ipa: '🇺🇸 /waɪt/' },
        { word: 'Brown', emoji: '🟫', ipa: '🇺🇸 /braʊn/' }
    ],
    Food: [
        { word: 'Pizza', emoji: '🍕', ipa: '🇺🇸 /ˈpiːt.sə/' },
        { word: 'Hamburger', emoji: '🍔', ipa: '🇺🇸 /ˈhæmˌbɝː.ɡɚ/' },
        { word: 'Ice Cream', emoji: '🍦', ipa: '🇺🇸 /ˈaɪs ˌkriːm/' },
        { word: 'Cake', emoji: '🍰', ipa: '🇺🇸 /keɪk/' },
        { word: 'Donut', emoji: '🍩', ipa: '🇺🇸 /ˈdoʊ.nʌt/' },
        { word: 'Hot Dog', emoji: '🌭', ipa: '🇺🇸 /ˈhɑːt ˌdɑːɡ/' },
        { word: 'Sushi', emoji: '🍣', ipa: '🇺🇸 /ˈsuː.ʃi/' },
        { word: 'Cookie', emoji: '🍪', ipa: '🇺🇸 /ˈkʊk.i/' },
        { word: 'French Fries', emoji: '🍟', ipa: '🇺🇸 /frentʃ ˈfraɪz/' },
        { word: 'Taco', emoji: '🌮', ipa: '🇺🇸 /ˈtɑː.koʊ/' }
    ],
    School: [
        { word: 'Backpack', emoji: '🎒', ipa: '🇺🇸 /ˈbæk.pæk/' },
        { word: 'Book', emoji: '📖', ipa: '🇺🇸 /bʊk/' },
        { word: 'Pencil', emoji: '✏️', ipa: '🇺🇸 /ˈpen.səl/' },
        { word: 'Ruler', emoji: '📏', ipa: '🇺🇸 /ˈruː.lɚ/' },
        { word: 'Scissors', emoji: '✂️', ipa: '🇺🇸 /ˈsɪz.ɚz/' },
        { word: 'Computer', emoji: '💻', ipa: '🇺🇸 /kəmˈpjuː.t̬ɚ/' },
        { word: 'Teacher', emoji: '🧑‍🏫', ipa: '🇺🇸 /ˈtiː.tʃɚ/' },
        { word: 'School', emoji: '🏫', ipa: '🇺🇸 /skuːl/' },
        { word: 'Crayon', emoji: '🖍️', ipa: '🇺🇸 /ˈkreɪ.ɑːn/' },
        { word: 'Clock', emoji: '⏰', ipa: '🇺🇸 /klɑːk/' }
    ],
    Jobs: [
        { word: 'Doctor', emoji: '🩺', ipa: '🇺🇸 /ˈdɑːk.tɚ/' },
        { word: 'Firefighter', emoji: '🚒', ipa: '🇺🇸 /ˈfaɪr.faɪ.t̬ɚ/' },
        { word: 'Police', emoji: '👮', ipa: '🇺🇸 /pəˈliːs/' },
        { word: 'Pilot', emoji: '✈️', ipa: '🇺🇸 /ˈpaɪ.lət/' },
        { word: 'Chef', emoji: '🍳', ipa: '🇺🇸 /ʃef/' },
        { word: 'Astronaut', emoji: '🚀', ipa: '🇺🇸 /ˈæs.trə.nɑːt/' },
        { word: 'Farmer', emoji: '🚜', ipa: '🇺🇸 /ˈfɑːr.mɚ/' },
        { word: 'Singer', emoji: '🎤', ipa: '🇺🇸 /ˈsɪŋ.ɚ/' },
        { word: 'Artist', emoji: '🎨', ipa: '🇺🇸 /ˈɑːr.t̬ɪst/' },
        { word: 'Scientist', emoji: '🔬', ipa: '🇺🇸 /ˈsaɪən.tɪst/' }
    ],
    Vehicles: [
        { word: 'Car', emoji: '🚗', ipa: '🇺🇸 /kɑːr/' },
        { word: 'Bus', emoji: '🚌', ipa: '🇺🇸 /bʌs/' },
        { word: 'Train', emoji: '🚂', ipa: '🇺🇸 /treɪn/' },
        { word: 'Bicycle', emoji: '🚲', ipa: '🇺🇸 /ˈbaɪ.sə.kəl/' },
        { word: 'Airplane', emoji: '✈️', ipa: '🇺🇸 /ˈer.pleɪn/' },
        { word: 'Helicopter', emoji: '🚁', ipa: '🇺🇸 /ˈhel.ə.kɑːp.tɚ/' },
        { word: 'Ship', emoji: '🚢', ipa: '🇺🇸 /ʃɪp/' },
        { word: 'Rocket', emoji: '🚀', ipa: '🇺🇸 /ˈrɑː.kɪt/' },
        { word: 'Truck', emoji: '🚚', ipa: '🇺🇸 /trʌk/' },
        { word: 'Motorcycle', emoji: '🏍️', ipa: '🇺🇸 /ˈmoʊ.t̬ɚˌsaɪ.kəl/' }
    ],
    Sports: [
        { word: 'Soccer', emoji: '⚽', ipa: '🇺🇸 /ˈsɑː.kɚ/' },
        { word: 'Basketball', emoji: '🏀', ipa: '🇺🇸 /ˈbæs.kət.bɑːl/' },
        { word: 'Baseball', emoji: '⚾', ipa: '🇺🇸 /ˈbeɪs.bɑːl/' },
        { word: 'Tennis', emoji: '🎾', ipa: '🇺🇸 /ˈten.ɪs/' },
        { word: 'Football', emoji: '🏈', ipa: '🇺🇸 /ˈfʊt.bɑːl/' },
        { word: 'Swimming', emoji: '🏊', ipa: '🇺🇸 /ˈswɪm.ɪŋ/' },
        { word: 'Running', emoji: '🏃', ipa: '🇺🇸 /ˈrʌn.ɪŋ/' },
        { word: 'Cycling', emoji: '🚴', ipa: '🇺🇸 /ˈsaɪ.klɪŋ/' },
        { word: 'Chess', emoji: '♟️', ipa: '🇺🇸 /tʃes/' },
        { word: 'Skating', emoji: '🛼', ipa: '🇺🇸 /ˈskeɪ.t̬ɪŋ/' }
    ]
};

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
    Sports: 0
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
let categoryScores = {
    Animals: 0,
    Fruits: 0,
    Colors: 0,
    Food: 0,
    School: 0,
    Jobs: 0,
    Vehicles: 0,
    Sports: 0
};

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
    currentCategory = category;
    score = 0;
    isWaitingForCorrection = false;
    
    const settings = difficultySettings[currentDifficulty];
    lives = settings.lives;
    timeRemaining = settings.time;
    
    remainingWords = [...vocabData[category]];
    
    categoryTitle.innerText = category;
    scoreDisplay.innerText = score;
    timerDisplay.innerText = timeRemaining;
    
    // Reset timer bar display
    if (timerBar) {
        timerBar.style.width = '100%';
        timerBar.classList.remove('low-time');
    }
    
    initLivesDisplay();
    showScreen(screenGame);
    nextQuestion();
    
    // Start Timer
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.innerText = timeRemaining;
        
        // Update timer bar width and state
        if (timerBar) {
            const percentage = Math.max(0, (timeRemaining / settings.time) * 100);
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
            goHome();
        }
    }, 1000);
}

function updateCategoryScore() {
    categoryScores[currentCategory] = Math.max(categoryScores[currentCategory], score);
    const catScoreDisplay = document.getElementById('score-' + currentCategory);
    if (catScoreDisplay) {
        catScoreDisplay.innerText = categoryScores[currentCategory];
    }
    
    const finalLives = Math.max(0, lives);
    categoryLives[currentCategory] = finalLives;
    const catLivesDisplay = document.getElementById('lives-' + currentCategory);
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
    
    // Render UI
    wordDisplay.innerText = currentWord.word;
    
    const ipaDisplay = document.getElementById('ipa-display');
    if (ipaDisplay) {
        ipaDisplay.innerText = currentWord.ipa || '';
    }
    
    optionsGrid.className = 'options-grid cols-' + difficultySettings[currentDifficulty].optionsCount;
    optionsGrid.innerHTML = '';
    
    options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        btn.innerText = opt.emoji;
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
        btnElement.classList.add('wrong');
        btnElement.classList.add('shake');
        
        // Show the correct emoji next to the target word immediately
        wordDisplay.innerText = currentWord.word + ' ' + currentWord.emoji;
        
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

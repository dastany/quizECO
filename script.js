// ==================== ВОПРОСЫ ДЛЯ РАЗНЫХ ВОЗРАСТОВ ====================

// 1–2 КЛАСС
const questions_1_2 = {
    categories: ["Лесные жители", "Угадай растение", "Подумай и ответь", "Загадки природы", "Четвертый лишний", "Ребусы"],
    data: {
        "Лесные жители": {
            100: ["Какое животное меняет цвет шерсти зимой?", "Заяц", 100],
            200: ["Какое животное запасает грибы и орехи на зиму?", "Белка", 200],
            300: ["Какое животное строит себе дом из веток на реке?", "Бобр", 300],
            400: ["Какая птица стучит по дереву и ищет под корой насекомых?", "Дятел", 400],
            500: ["Какое животное называют хозяином леса?", "Медведь", 500]
        },
        "Угадай растение": {
            100: ["Какое дерево украшают на Новый год?", "Ёлка (ель)", 100],
            200: ["Из какого дерева получают жёлуди?", "Дуб", 200],
            300: ["Как называется дерево с белым стволом?", "Берёза", 300],
            400: ["Как называется колючее растение, которое может расти даже в пустыне?", "Кактус", 400],
            500: ["Какой цветок обычно дарят на 8 Марта?", "Тюльпан", 500]
        },
        "Подумай и ответь": {
            100: ["Почему нельзя рвать все цветы на поляне?", "Ими питаются насекомые, они дают семена", 100],
            200: ["Что нужно сделать, если увидел мусор в лесу?", "Поднять и выбросить в урну (если это безопасно)", 200],
            300: ["Почему зимой люди делают кормушки для птиц?", "Птицам трудно найти корм", 300],
            400: ["Что случится с рыбой, если река станет грязной?", "Рыба может погибнуть", 400],
            500: ["Почему лес называют «лёгкими планеты»?", "Деревья очищают воздух и выделяют кислород", 500]
        },
        "Загадки природы": {
            100: ["Осенью раздевается, весной одевается.", "Дерево (лес)", 100],
            200: ["Без рук, без ног, а рисовать умеет.", "Мороз", 200],
            300: ["Летом идёт, зимой лежит.", "Снег", 300],
            400: ["Сама вода, а по воде плавает.", "Льдина", 400],
            500: ["Не зверь, не птица, а нос как спица.", "Комар", 500]
        },
        "Четвертый лишний": {
            100: ["Белка, ёж, медведь, воробей.", "Воробей (не зверь)", 100],
            200: ["Сосна, ель, пихта, берёза.", "Берёза (лиственное, остальные хвойные)", 200],
            300: ["Лягушка, щука, карась, окунь.", "Лягушка (не рыба)", 300],
            400: ["Подснежник, тюльпан, ромашка, дуб.", "Дуб (дерево, остальные цветы)", 400],
            500: ["Муравейник, нора, берлога, гнездо.", "Гнездо (остальные на земле)", 500]
        },
        "Ребусы": {
            100: [`<img src="images/1les.jpg" alt="Ребус 1" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 1", 100],
            200: [`<img src="images/1voda.jpg" alt="Ребус 2" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 2", 200],
            300: [`<img src="images/1vozdyh.jpg" alt="Ребус 3" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 3", 300],
            400: [`<img src="images/1zemlia.jpg" alt="Ребус 4" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 4", 400],
            500: [`<img src="images/1priroda.jpg" alt="Ребус 5" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 5", 500]
        }
    }
};

// 3–4 КЛАСС
const questions_3_4 = {
    categories: ["Переработка и отходы", "Экология и человек", "Животные", "Растения", "Вода и воздух", "Ребусы"],
    data: {
        "Переработка и отходы": {
            100: ["Что означает знак «петля Мёбиуса» на упаковке?", "Материал можно переработать", 100],
            200: ["Какие предметы можно сдать на переработку? Приведите 3 примера.", "Бумага, стекло, пластик, металл", 200],
            300: ["Сколько лет разлагается пластиковая бутылка в природе?", "Около 450 лет или больше", 300],
            400: ["Почему лучше использовать многоразовую бутылку для воды, чем покупать каждый раз новую пластиковую?", "Это уменьшает количество мусора и экономит ресурсы", 400],
            500: ["Как можно дать вторую жизнь старой одежде?", "Отдать на благотворительность, переделать в другие вещи, использовать как тряпки", 500]
        },
        "Экология и человек": {
            100: ["Что можно сделать с бумагой после использования, чтобы не вырубать новые деревья?", "Сдать на переработку", 100],
            200: ["Как называется место, где охраняют редких животных и растения?", "Заповедник, национальный парк", 200],
            300: ["Почему нельзя оставлять мусор в лесу?", "Он вредит животным, загрязняет природу, долго разлагается", 300],
            400: ["Что такое «экология»?", "Наука о взаимосвязи живых организмов и окружающей среды", 400],
            500: ["Назовите 3 способа, как школьники могут помочь природе.", "Сажать деревья, экономить воду и электричество, не мусорить, делать кормушки для птиц и т.д.", 500]
        },
        "Животные": {
            100: ["Как называются животные, которые живут рядом с человеком?", "Домашние", 100],
            200: ["Какое животное называют «лесным доктором»?", "Дятел", 200],
            300: ["Почему некоторые животные зимой впадают в спячку?", "Чтобы сохранить энергию, когда мало еды", 300],
            400: ["Как называются птицы, которые улетают на юг осенью?", "Перелётные", 400],
            500: ["Приведите 3 примера животных, занесённых в Красную книгу России.", "Амурский тигр, белый медведь, дальневосточный леопард и т.д.", 500]
        },
        "Растения": {
            100: ["Как называется книга, в которую заносят исчезающие виды растений и животных?", "Красная книга", 100],
            200: ["Какое дерево самое распространённое в российских лесах?", "Лиственница, сосна, ель (в зависимости от региона)", 200],
            300: ["Как называется процесс, при котором растения выделяют кислород?", "Фотосинтез", 300],
            400: ["Какие деревья сбрасывают листья осенью? Приведите 3 примера.", "Берёза, дуб, клён, рябина и т.д.", 400],
            500: ["Из какого дерева делают бумагу?", "Из сосны, ели и других хвойных пород", 500]
        },
        "Вода и воздух": {
            100: ["Откуда берётся вода в реках?", "Из родников, ручьёв, талого снега, дождей", 100],
            200: ["Почему важно беречь чистую воду?", "Она нужна всем живым существам", 200],
            300: ["Что загрязняет воздух в городах?", "Выхлопные газы машин, дым заводов", 300],
            400: ["Почему нельзя мыть машины в реках и озёрах?", "Моющие средства и бензин загрязняют воду, вредят рыбам и растениям", 400],
            500: ["Как люди могут улучшить качество воздуха в городе?", "Сажать деревья, использовать общественный транспорт, экономить электричество", 500]
        },
        "Ребусы": {
            100: [`<img src="images/3musor.jpg" alt="Ребус 1" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 1", 100],
            200: [`<img src="images/3biosfera.jpg" alt="Ребус 2" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 2", 200],
            300: [`<img src="images/3ecologia.jpg" alt="Ребус 3" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 3", 300],
            400: [`<img src="images/3zapovednic.jpg" alt="Ребус 4" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 4", 400],
            500: [`<img src="images/3pererabotka.jpg" alt="Ребус 5" style="max-width: 100%; border-radius: 20px;">`, "Ответ на ребус 5", 500]
        }
    }
};

// Состояние игры
let currentAge = null;
let teamScores = { team1: 0, team2: 0 };
let activeTeam = "team1";
let usedQuestions = {};
let currentQuestionData = null;
let totalAnswered = 0;
let currentQuestionsData = null;
let currentCategories = [];

// DOM элементы
const gameContainer = document.getElementById("gameContainer");
const ageModal = document.getElementById("ageModal");
const categoriesContainer = document.getElementById("categoriesContainer");
const questionsGrid = document.getElementById("questionsGrid");
const team1ScoreSpan = document.getElementById("team1Score");
const team2ScoreSpan = document.getElementById("team2Score");
const team1NameInput = document.getElementById("team1Name");
const team2NameInput = document.getElementById("team2Name");
const activeTeamNameSpan = document.getElementById("activeTeamName");
const activeTeamBar = document.getElementById("activeTeamBar");
const modal = document.getElementById("questionModal");
const modalCategory = document.getElementById("modalCategory");
const modalQuestionText = document.getElementById("modalQuestionText");
const correctBtn = document.getElementById("correctBtn");
const wrongBtn = document.getElementById("wrongBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const feedbackMsg = document.getElementById("feedbackMsg");
const newGameBtn = document.getElementById("newGameBtn");
const endGameBtn = document.getElementById("endGameBtn");
const endModal = document.getElementById("endModal");
const winnerMessage = document.getElementById("winnerMessage");
const closeEndBtn = document.getElementById("closeEndBtn");
const breakModal = document.getElementById("breakModal");
const breakMessageSpan = document.getElementById("breakMessage");
const closeBreakBtn = document.getElementById("closeBreakBtn");

// ==================== ФУНКЦИИ ИГРЫ ====================
function updateScoresUI() {
    team1ScoreSpan.textContent = teamScores.team1;
    team2ScoreSpan.textContent = teamScores.team2;
}

function updateActiveTeamUI() {
    const team1Name = team1NameInput.value.trim() || "Команда 1";
    const team2Name = team2NameInput.value.trim() || "Команда 2";
    activeTeamNameSpan.textContent = activeTeam === "team1" ? `⭐ ${team1Name} ⭐` : `🌈 ${team2Name} 🌈`;
    activeTeamBar.style.background = activeTeam === "team1" ? "linear-gradient(135deg, #ff9a9e, #fad0c4)" : "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
}

function switchTeam() {
    activeTeam = activeTeam === "team1" ? "team2" : "team1";
    updateActiveTeamUI();
    saveGameState();
}

function saveGameState() {
    if (!currentAge) return;
    const state = { age: currentAge, teamScores, activeTeam, usedQuestions, totalAnswered };
    localStorage.setItem("ecoQuizState", JSON.stringify(state));
}

function loadGameState() {
    const saved = localStorage.getItem("ecoQuizState");
    if (saved) {
        try {
            const state = JSON.parse(saved);
            if (state.age === "1-2" || state.age === "3-4") {
                currentAge = state.age;
                teamScores = state.teamScores;
                activeTeam = state.activeTeam;
                usedQuestions = state.usedQuestions || {};
                totalAnswered = state.totalAnswered || 0;
                updateScoresUI();
                updateActiveTeamUI();
                loadQuestionsByAge(currentAge);
                return true;
            }
        } catch(e) {}
    }
    return false;
}

function loadQuestionsByAge(age) {
    currentAge = age;
    const data = (age === "1-2") ? questions_1_2 : questions_3_4;
    currentCategories = data.categories;
    currentQuestionsData = data.data;
    renderBoard();
    gameContainer.style.display = "block";
    ageModal.style.display = "none";
}

function isQuestionUsed(category, points) {
    return usedQuestions[`${category}_${points}`] === true;
}

function markQuestionUsed(category, points) {
    usedQuestions[`${category}_${points}`] = true;
    totalAnswered++;
    saveGameState();
}

function renderBoard() {
    categoriesContainer.innerHTML = "";
    currentCategories.forEach(cat => {
        const div = document.createElement("div");
        div.className = "category-card";
        div.textContent = cat;
        categoriesContainer.appendChild(div);
    });

    questionsGrid.innerHTML = "";
    const pointsList = [100, 200, 300, 400, 500];

    currentCategories.forEach(category => {
        const column = document.createElement("div");
        column.className = "category-column";
        pointsList.forEach(points => {
            const btn = document.createElement("div");
            btn.className = "question-btn";
            if (isQuestionUsed(category, points)) {
                btn.classList.add("used");
                btn.textContent = "✓";
            } else {
                btn.textContent = points;
            }
            btn.addEventListener("click", () => {
                if (!isQuestionUsed(category, points)) {
                    openQuestion(category, points);
                } else {
                    feedbackMsg.textContent = "Этот вопрос уже брали!";
                    setTimeout(() => feedbackMsg.textContent = "", 1000);
                }
            });
            column.appendChild(btn);
        });
        questionsGrid.appendChild(column);
    });
}

function openQuestion(category, points) {
    const data = currentQuestionsData[category][points];
    if (!data) return;
    currentQuestionData = { category, points, question: data[0], answer: data[1], value: data[2] };
    modalCategory.textContent = `${category} · ${points}`;
    modalQuestionText.innerHTML = currentQuestionData.question;
    feedbackMsg.textContent = "";
    modal.style.display = "flex";
}

function handleCorrect() {
    if (!currentQuestionData) return;
    if (isQuestionUsed(currentQuestionData.category, currentQuestionData.points)) {
        feedbackMsg.textContent = "⚠️ Вопрос уже был сыгран!";
        return;
    }
    const pointsToAdd = currentQuestionData.value;
    teamScores[activeTeam] += pointsToAdd;
    updateScoresUI();
    markQuestionUsed(currentQuestionData.category, currentQuestionData.points);
    const teamName = activeTeam === "team1" ? (team1NameInput.value.trim() || "Команда 1") : (team2NameInput.value.trim() || "Команда 2");
    feedbackMsg.textContent = `🎉 +${pointsToAdd} очков команде ${teamName}! 🎉`;
    renderBoard();
    setTimeout(() => {
        closeModal();
        switchTeam();
        checkBreak();
    }, 1200);
}

function handleWrong() {
    if (!currentQuestionData) return;
    if (isQuestionUsed(currentQuestionData.category, currentQuestionData.points)) {
        feedbackMsg.textContent = "⚠️ Вопрос уже был сыгран!";
        return;
    }
    markQuestionUsed(currentQuestionData.category, currentQuestionData.points);
    feedbackMsg.textContent = `😔 Не получилось... Вопрос уходит.`;
    renderBoard();
    setTimeout(() => {
        closeModal();
        switchTeam();
        checkBreak();
    }, 1200);
}

function closeModal() {
    modal.style.display = "none";
    currentQuestionData = null;
    feedbackMsg.textContent = "";
}

function checkBreak() {
    if (totalAnswered % 8 === 0 && totalAnswered > 0) {
        const randomMsg = breakMessages[Math.floor(Math.random() * breakMessages.length)];
        breakMessageSpan.textContent = randomMsg;
        breakModal.style.display = "flex";
    }
}

function closeBreak() {
    breakModal.style.display = "none";
}

function resetGame() {
    if (confirm("Начать новую игру? Все очки сбросятся!")) {
        teamScores = { team1: 0, team2: 0 };
        activeTeam = "team1";
        usedQuestions = {};
        totalAnswered = 0;
        currentAge = null;
        updateScoresUI();
        gameContainer.style.display = "none";
        ageModal.style.display = "flex";
        closeModal();
        closeBreak();
        endModal.style.display = "none";
        stopFireworks();
        localStorage.removeItem("ecoQuizState");
    }
}

// ==================== ФЕЙЕРВЕРК ====================
let fireworksAnimation = null;
let fireworksCtx = null;
let fireworksCanvas = null;
let fireworkParticles = [];

function startFireworks() {
    fireworksCanvas = document.getElementById("fireworksCanvas");
    if (!fireworksCanvas) return;
    fireworksCanvas.width = fireworksCanvas.clientWidth;
    fireworksCanvas.height = fireworksCanvas.clientHeight;
    fireworksCtx = fireworksCanvas.getContext("2d");
    
    fireworkParticles = [];
    for (let i = 0; i < 350; i++) {
        fireworkParticles.push({
            x: Math.random() * fireworksCanvas.width,
            y: Math.random() * fireworksCanvas.height,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8 - 4,
            size: Math.random() * 7 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 65%)`,
            alpha: 1,
            life: Math.random() * 1.5 + 0.8
        });
    }
    
    function drawFireworks() {
        if (!fireworksCtx || !fireworksCanvas) return;
        fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
        let allDead = true;
        for (let i = 0; i < fireworkParticles.length; i++) {
            const p = fireworkParticles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.08;
            p.life -= 0.005;
            p.alpha = p.life;
            if (p.life > 0 && p.y < fireworksCanvas.height + 100 && p.x > -100 && p.x < fireworksCanvas.width + 100) {
                allDead = false;
                fireworksCtx.globalAlpha = p.alpha;
                fireworksCtx.beginPath();
                fireworksCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                fireworksCtx.fillStyle = p.color;
                fireworksCtx.fill();
            }
        }
        if (!allDead) {
            fireworksAnimation = requestAnimationFrame(drawFireworks);
        } else {
            if (endModal && endModal.style.display === "flex") {
                fireworkParticles = [];
                for (let i = 0; i < 350; i++) {
                    fireworkParticles.push({
                        x: Math.random() * fireworksCanvas.width,
                        y: Math.random() * fireworksCanvas.height,
                        vx: (Math.random() - 0.5) * 8,
                        vy: (Math.random() - 0.5) * 8 - 4,
                        size: Math.random() * 7 + 2,
                        color: `hsl(${Math.random() * 360}, 100%, 65%)`,
                        alpha: 1,
                        life: Math.random() * 1.5 + 0.8
                    });
                }
                fireworksAnimation = requestAnimationFrame(drawFireworks);
            } else {
                cancelAnimationFrame(fireworksAnimation);
                fireworksAnimation = null;
                fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
            }
        }
    }
    
    if (fireworksAnimation) cancelAnimationFrame(fireworksAnimation);
    fireworksAnimation = requestAnimationFrame(drawFireworks);
}

function stopFireworks() {
    if (fireworksAnimation) {
        cancelAnimationFrame(fireworksAnimation);
        fireworksAnimation = null;
    }
    if (fireworksCtx && fireworksCanvas) {
        fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    }
    fireworkParticles = [];
}

function endGame() {
    const team1Name = team1NameInput.value.trim() || "Команда 1";
    const team2Name = team2NameInput.value.trim() || "Команда 2";
    let winner = "";
    if (teamScores.team1 > teamScores.team2) {
        winner = `🏆 ПОБЕДИЛА КОМАНДА «${team1Name}» 🏆`;
    } else if (teamScores.team2 > teamScores.team1) {
        winner = `🏆 ПОБЕДИЛА КОМАНДА «${team2Name}» 🏆`;
    } else {
        winner = `🤝 НИЧЬЯ! 🤝<br>Обе команды молодцы!`;
    }
    winnerMessage.innerHTML = winner;
    endModal.style.display = "flex";
    startFireworks();
}

// ==================== ПЛАВАЮЩИЕ 67 И ШАРИКИ (увеличенные 67) ====================
function initFloatingElements() {
    const canvas = document.getElementById("floatingCanvas");
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    
    const elements = [];
    const count = 80;
    for (let i = 0; i < count; i++) {
        const isNumber = i % 2 === 0;
        elements.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            radius: isNumber ? 32 : Math.random() * 25 + 12,  // 67 стало крупнее (32px)
            type: isNumber ? "number" : "balloon",
            color: isNumber ? `hsl(${Math.random() * 360}, 80%, 65%)` : `hsla(${Math.random() * 360}, 80%, 70%, 0.7)`,
            text: "67"
        });
    }
    
    function draw() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let e of elements) {
            if (e.type === "balloon") {
                ctx.beginPath();
                ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
                ctx.fillStyle = e.color;
                ctx.globalAlpha = 0.7;
                ctx.fill();
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(e.x - e.radius * 0.3, e.y + e.radius * 0.7);
                ctx.lineTo(e.x, e.y + e.radius + 6);
                ctx.lineTo(e.x + e.radius * 0.3, e.y + e.radius * 0.7);
                ctx.fillStyle = e.color;
                ctx.fill();
            } else {
                ctx.font = `bold ${e.radius}px "Comic Sans MS", cursive`;
                ctx.fillStyle = e.color;
                ctx.globalAlpha = 0.8;
                ctx.shadowBlur = 0;
                ctx.fillText(e.text, e.x - 15, e.y + 10);
            }
        }
        requestAnimationFrame(draw);
    }
    
    function update() {
        for (let e of elements) {
            e.x += e.vx;
            e.y += e.vy;
            if (e.x - e.radius < 0) { e.x = e.radius; e.vx = -e.vx; }
            if (e.x + e.radius > canvas.width) { e.x = canvas.width - e.radius; e.vx = -e.vx; }
            if (e.y - e.radius < 0) { e.y = e.radius; e.vy = -e.vy; }
            if (e.y + e.radius > canvas.height) { e.y = canvas.height - e.radius; e.vy = -e.vy; }
            e.vx += (Math.random() - 0.5) * 0.1;
            e.vy += (Math.random() - 0.5) * 0.1;
            let maxSpeed = 1.2;
            e.vx = Math.min(maxSpeed, Math.max(-maxSpeed, e.vx));
            e.vy = Math.min(maxSpeed, Math.max(-maxSpeed, e.vy));
        }
        requestAnimationFrame(update);
    }
    
    draw();
    update();
    
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ==================== ОБРАБОТЧИКИ ====================
correctBtn.onclick = handleCorrect;
wrongBtn.onclick = handleWrong;
closeModalBtn.onclick = closeModal;
newGameBtn.onclick = resetGame;
endGameBtn.onclick = endGame;
closeEndBtn.onclick = () => {
    endModal.style.display = "none";
    stopFireworks();
};
closeBreakBtn.onclick = () => {
    breakModal.style.display = "none";
};
modal.onclick = (e) => { if (e.target === modal) closeModal(); };
endModal.onclick = (e) => { if (e.target === endModal) { endModal.style.display = "none"; stopFireworks(); } };
breakModal.onclick = (e) => { if (e.target === breakModal) breakModal.style.display = "none"; };

// Выбор возраста
document.querySelectorAll(".age-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const age = e.target.getAttribute("data-age");
        loadQuestionsByAge(age);
        saveGameState();
    });
});

// Запуск
function init() {
    initFloatingElements();
    const loaded = loadGameState();
    if (!loaded) {
        ageModal.style.display = "flex";
        gameContainer.style.display = "none";
    } else {
        gameContainer.style.display = "block";
        ageModal.style.display = "none";
    }
}

init();
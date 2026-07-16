// =========================
// MISSION AI SCRIPT
// =========================

// Landing Page
const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        window.location.href = "Pages/commander.html";
    });
}

// Mission Page
if (document.getElementById("questionBox")) {

    let currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;
    let score = parseInt(localStorage.getItem("score")) || 0;

    const questionBox = document.getElementById("questionBox");
    const optionsBox = document.getElementById("options");
    const progressBar = document.getElementById("progressBar");
    const missionNumber = document.getElementById("missionNumber");
    const timerText = document.getElementById("timer");

    let timeLeft = 60;
    let timer;

    loadQuestion();

    function startTimer() {

        clearInterval(timer);

        timeLeft = 60;

        timerText.innerHTML = "⏱ " + timeLeft;

        timer = setInterval(() => {

            timeLeft--;

            timerText.innerHTML = "⏱ " + timeLeft;

            if (timeLeft <= 0) {

                clearInterval(timer);

                nextQuestion();

            }

        }, 1000);

    }

    function loadQuestion() {

        if (currentQuestion >= questions.length) {

            localStorage.setItem("score", score);

            window.location.href = "result.html";

            return;

        }

        missionNumber.innerHTML = "Mission " + (currentQuestion + 1) + " / " + questions.length;

        progressBar.style.width = ((currentQuestion) / questions.length) * 100 + "%";

        questionBox.innerHTML = questions[currentQuestion].question;

        optionsBox.innerHTML = "";

        questions[currentQuestion].options.forEach((option, index) => {

            const btn = document.createElement("button");

            btn.className = "optionBtn";

            btn.innerHTML = option;

            btn.onclick = () => checkAnswer(index, btn);

            optionsBox.appendChild(btn);

        });

        startTimer();

    }

    function checkAnswer(selected, button) {

        clearInterval(timer);

        const correct = questions[currentQuestion].answer;

        const buttons = document.querySelectorAll(".optionBtn");

        buttons.forEach(btn => btn.disabled = true);

        if (selected === correct) {

            score++;

            localStorage.setItem("score", score);

            button.style.background = "#16a34a";

        } else {

            button.style.background = "#dc2626";

            buttons[correct].style.background = "#16a34a";

        }

        setTimeout(() => {

            nextQuestion();

        }, 800);

    }

    function nextQuestion() {

        currentQuestion++;

        localStorage.setItem("currentQuestion", currentQuestion);

        loadQuestion();

    }

}
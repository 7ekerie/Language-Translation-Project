const chooseLang = document.getElementById("choose-lang");
const chooseLangTitle = document.getElementById("title-choose-lang");
const headerTitle = document.getElementById("header-title");
const headerSubtitle = document.getElementById("header-subtitle");
const questionLabel = document.getElementById("question-label");
const answerLabel = document.getElementById("answer-label");
const submitAnswer = document.getElementById("submit-answer");
const reset = document.getElementById("reset");
const answerInput = document.getElementById("answer-input");
const questionInput = document.getElementById("question-input");
const result = document.getElementById("result");


// Create 2 arrays of words for both English & Somali.
const EnglishArr = ["bag", "family", "language","house", "hat", "question", "read", "black", "video", "joy"];
const SomaliArr = ["boorso", "qoys", "luuqad", "guri", "koofi", "suaal", "aqri", "madoow", "muuqaal", "farxad"];
// Based on the language selection on top, change the language of all the contents.


englishRandomWord();

chooseLang.addEventListener('change', () => {
    if(chooseLang.selectedIndex == 0) {
        englishRandomWord();
        EnglishLang();
        miniReset();
    } else {
        SomaliLang();
        somaliRandomWord();
        miniReset();
    }
});

function SomaliLang() {
    chooseLangTitle.innerHTML = "Dooro luqaddaada";
    headerTitle.innerHTML = "Baro oo ciyaar";
    headerSubtitle.innerHTML = "Baro erayo cusub oo luqad kale";
    questionLabel.innerHTML = "Turjum eraygan:";
    answerLabel.innerHTML = "Geli jawaabtaada:";
    submitAnswer.innerHTML = "Gudbi";
    reset.innerHTML = "Dib u celi";
}
function EnglishLang() {
    chooseLangTitle.innerHTML = "Choose your language";
    headerTitle.innerHTML = "Learn and Play";
    headerSubtitle.innerHTML = "Learn new words of another language";
    questionLabel.innerHTML = "Translate this word:";
    answerLabel.innerHTML = "Enter your answer:";
    submitAnswer.innerHTML = "Submit";
    reset.innerHTML = "Reset";
}

// Display a random word in the upper input field.
function somaliRandomWord() {
    let randomWord = Math.floor(Math.random()  * SomaliArr.length);
    questionInput.value = SomaliArr[randomWord];
    return SomaliArr[randomWord];
}
function englishRandomWord(){
    let randomWord = Math.floor(Math.random() * EnglishArr.length);
    questionInput.value = EnglishArr[randomWord];
    return EnglishArr[randomWord];
}
// // Add listener to the submit button.
submitAnswer.addEventListener("click", ()=> {
    if(chooseLang.selectedIndex == 0) {
        checkSomaliAnswer();
    } else {
        checkEnglishAnswer();
    }
})
// Check the answer input if it matches the correct translation.
// Display the result "Correct/Incorrect" in the paragraph below the submit button.
function checkSomaliAnswer(){
    if(SomaliArr.indexOf(answerInput.value) == EnglishArr.indexOf(questionInput.value)) {
        result.style.color = "green";
        result.innerHTML = "Correct"
    } else {
        result.style.color = "red";
        result.innerHTML = "Incorrect";
    }
}
function checkEnglishAnswer(){
    if(EnglishArr.indexOf(answerInput.value) == SomaliArr.indexOf(questionInput.value)) {
        result.style.color = "green";
        result.innerHTML = "Correct"
    } else {
        result.style.color = "red";
        result.innerHTML = "Incorrect";
    }
}
// Add listener to the reset button, display new question if button is pressed.
function miniReset(){
    answerInput.value = "";
    result.innerHTML = "";
}
reset.addEventListener("click", ()=> {
    if(chooseLang.selectedIndex == 0) {
        englishRandomWord();
    } else {
        somaliRandomWord();
    }
    miniReset();
})

import { jsDeck } from "./deckData.js";

import { checkAnswer, getFeedback } from "./studyEngine.js";

const deck = jsDeck;

let carsPassed = 0;
let correctAnswers = 0;
let currentQuestionIndex = 0;

function start(){
    let answers = ["let", "rest", "switch"];
    for(const card of deck){
        const { correctAnswer, question, category } = card;
        if(checkAnswer(answers[currentQuestionIndex], correctAnswer)){
            correctAnswers++;
            carsPassed++;
        }else{
            carsPassed++;
        }
        currentQuestionIndex++;
    }

    let percentage = carsPassed > 0 ? (correctAnswers / carsPassed) * 100 : 0;
    console.log(getFeedback(percentage));
}

start();
let answers = 0;
let correctAnswers = 0;

export function checkAnswer(userAnswer, correctAnswer, ...synonyms) {
    userAnswer = userAnswer.trim().toLowerCase();
    correctAnswer = correctAnswer.trim().toLowerCase();
    
    if (userAnswer === correctAnswer) {
        return true;
    } 
    
    for (const synonym of synonyms) {
        if (userAnswer === synonym.trim().toLowerCase()) {
            return true;
        }
    }
    
    return false;
}


export function getFeedback(percentage) {
    switch(true) {
        case (percentage >= 90):
            return `Excellent work! You answered ${percentage.toFixed(2)}% of the questions correctly.`;
        case (percentage >= 70):
            return `Good job! You answered ${percentage.toFixed(2)}% of the questions correctly.`;
        case (percentage >= 50):
            return `You can do better! You answered ${percentage.toFixed(2)}% of the questions correctly.`;
        default:
            return `Keep practicing! You answered ${percentage.toFixed(2)}% of the questions correctly.`;
    }
}
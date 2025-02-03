function answer() {
    const correctAnswer = "Transylvania";
    const selectedAnswer = document.querySelector('input[name="city"]:checked');
    const resultElement = document.getElementById("results");

    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            resultElement.innerText = "Correct!";
        } else {
            resultElement.innerText = `Incorrect. The correct answer is ${correctAnswer}.`;
        }
    } else {
        resultElement.innerText = "Please select an answer.";
    }
}
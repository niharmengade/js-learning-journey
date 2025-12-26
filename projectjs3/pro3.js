const clock = document.getElementById('clock');
setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
});
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
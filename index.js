var sound = document.createElement("audio");
let int1 = Math.floor(Math.random() * 1000);

let answer =  int1;

localStorage.setItem("code", answer);
console.log(localStorage.getItem("code")); //generates the answer

localStorage.setItem("guessCount", 7);
var time = document.getElementById("clock");
time.innerHTML = "Guesses left until the police arrives: " + localStorage.getItem("guessCount");
document.body.appendChild(time); //clock code

var text = document.getElementById("encouragement");
text.innerHTML = "Press the button to make a guess."
document.body.appendChild(text);
function play() {
    sound.src="theme.mp3";
    sound.loop = true;
    sound.play();
}

function estimate () {
    if (parseInt(localStorage.getItem("guessCount")) <= 0) {
        sound.src="lose.mp3";
        sound.loop = false;
        sound.play();
        let deathNumber = Math.floor(Math.random() * 10) + 1;
        if (deathNumber == 1) {
            time.innerHTML = "Sorry, but you are out of guesses! The police got you and now you will rot in jail forever. Eventually one of the prisoners will shame you and kill you. Sucks." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 2) {
            time.innerHTML = "Yikes, you're out of guesses. Loser. Must suck because once you get to jail, you drop the soap bar and were never seen alive again." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 3) {
            time.innerHTML = "Out of guesses sucker. You got arrested and get negative aura. Not so skibidi now, are you?" +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 4) {
            time.innerHTML = "You lost. After 10 years of being arrested, you go insane and develop an irrational fear of rats after being attacked by one in prison. Boo hoo." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 5) {
            time.innerHTML = "Wow. Skill issue. You go to prison and start halluicating nightmares about Mr. Irimina assigning more projects and you go absolutely ballistic. What a terrible fate." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 6) {
            time.innerHTML = "You suck so bad bro. Just give up on life." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 7) {
            time.innerHTML = "You got caught, but because people were so mad at you for being a terrible theif, they threw rocks at you like it was medival times and you died on the spot. Ouch." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 8) {
            time.innerHTML = "You got caught and arrested, and your jail buddy is now Marcus. Which sucks. I feel bad for you." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 9) {
            time.innerHTML = "You get arrested but then wake up in class to Mr Irimina's lecture, and you let out a sigh of relief. But then you realize school is basically a prison, so you start crying like a madman and get kicked out of the class and sent to the principal's office. Yikes." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        if (deathNumber == 10) {
            time.innerHTML = "You ran out of guesses. You got arrested and everybody hates you and wished you would die." +
            " The correct answer is: " + localStorage.getItem("code");
        }
        document.body.appendChild(time); //clock code
        document.getElementById("guess").remove();
    } else {
        let userGuess = prompt("Guess a number.");
        if (userGuess == parseInt(localStorage.getItem("code"))) {
            document.getElementById("guess").remove();
            console.log("Nailed it!");
            text.innerHTML = "You're guess was " + userGuess + ". That is the correct code! Congradulations!!!";
            document.body.appendChild(text);
            sound.src="win.mp3";
            sound.loop = false;
            sound.play();
        } else if (userGuess < parseInt(localStorage.getItem("code"))) {
            console.log("Higher!");
            text.innerHTML = "You're guess was " + userGuess + ". Guess higher!";
            document.body.appendChild(text);
        } else if (userGuess > parseInt(localStorage.getItem("code"))) {
            console.log("Lower!");
            text.innerHTML = "You're guess was " + userGuess + ". Guess lower!";
            document.body.appendChild(text);
        }
        let chance = Math.floor(Math.random() * 100) + 1;
        if (chance == 1) {
            time.innerHTML = "Holy crap! The police ran over a child on the way to get you! You don't lose a guess! Guesses left until the police arrives: " + localStorage.getItem("guessCount");
        } else if (chance == 2) {
            time.innerHTML = "You're a lucky one! Cops got stuck in traffic, so you keep the guess! Guesses left until the police arrives: " + localStorage.getItem("guessCount");
        } else if (chance == 3) {
            time.innerHTML = "The fat cop broke his car on the way, so your guess remains! Guesses left until the police arrives: " + localStorage.getItem("guessCount");
        } else if (chance == 4) {
            time.innerHTML = "One of the cops had a heart attack on the way, so you don't lose a guess! Guesses left until the police arrives: " + localStorage.getItem("guessCount");
        } else if (chance == 5) {
            time.innerHTML = "Yipee! One of the cop cars blew up over a landmine, so you have more time and don't lose the guess! Guesses left until the police arrives: " + localStorage.getItem("guessCount");
        } else {
            localStorage.setItem("guessCount", localStorage.getItem("guessCount")-1);
            time.innerHTML = "Guesses left until the police arrives: " + localStorage.getItem("guessCount");
        }
        document.body.appendChild(time); //changes guesses left in clock   
    }
}
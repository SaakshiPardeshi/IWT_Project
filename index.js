let divs = document.querySelectorAll(".image")
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let result = document.querySelector("#result");
divs.forEach(div => {
    div.addEventListener("click", () => {
        let user_choise = div.getAttribute("id");
        console.log("userchoise = ", user_choise)
        let comp_choise = get_cmp_choise();
        console.log("computer_choise = ", comp_choise)
        let winner = get_winner(user_choise, comp_choise);
        console.log(winner)
        if (winner == "computer win !") {
            comp_score.innerText = Number(comp_score.innerText) + 1;
            result.innerText = winner+` ${comp_choise} beats ${user_choise}`;
            result.style.backgroundColor="red";
        }
        else if (winner == "you win !") {

            user_score.innerText = Number(user_score.innerText) + 1;
            result.innerText = winner+` ${user_choise} beats ${comp_choise}`;
            result.style.backgroundColor="green";
        }
        else {
            result.innerText = winner;
            result.style.backgroundColor="rgb(14, 14, 99)";
        }
    })
})

function get_cmp_choise() {
    let arr = ["rock", "paper", "scissors"];
    let index = parseInt(Math.random() * 3);
    return arr[index];
}
function get_winner(user_choise, comp_choise) {
    if (user_choise == comp_choise) {
        return "match is draw";
    }
    else if (user_choise == "rock") {
        if (comp_choise == "paper") {
            return "computer win !";
        }
        else {
            return "you win !";
        }
    }
    else if (user_choise == "paper") {
        if (comp_choise == "scissors") {
            return "computer win !";
        }
        else {
            return "you win !";
        }
    }
    else {
        if (comp_choise == "rock") {
            return "computer win !";
        }
        else {
            return "you win !";
        }
    }
}
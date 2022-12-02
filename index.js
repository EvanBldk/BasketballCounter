
let score1 = 0;
let score2 = 0;

function add1home() {
    score1 += 1;
    document.getElementById("score1").textContent = score1;
}

function add2home() {
    score1 += 2;
    document.getElementById("score1").textContent = score1;
}

function add3home() {
    score1 += 3;
    document.getElementById("score1").textContent = score1;
}

function add1guest() {
    score2 += 1;
    document.getElementById("score2").textContent = score2;
}
function add2guest() {
    score2 += 2;
    document.getElementById("score2").textContent = score2;
}

function add3guest() {
    score2 += 3;
    document.getElementById("score2").textContent = score2;
}
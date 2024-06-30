let user = [];
let comp = [];
let randClr = ["yellow", "green", "blue", "red"];
let start = false;
let level = 0;

let startGame = () => {
    document.addEventListener('keypress', function (e) {
        if (start === false) {
            start = true;
            levelUp();
        }
    });
};

startGame();

// For level up
let levelUp = () => {
    user = [];
    level++;
    document.querySelector('h2').innerText = `Level - ${level}`;
    let rand = parseInt(Math.random() * 4);
    flash(randClr[rand]);
};

// For flashing
let flash = (randBtn) => {
    document.querySelector(`#${randBtn}`).style.backgroundColor = `white`;
    setTimeout(() => {
        document.querySelector(`#${randBtn}`).style.backgroundColor = `${randBtn}`;
    }, 250);
    comp.push(randBtn);
};

// User selected flash
let userFlash = (btn) => {
    document.querySelector(`#${btn}`).style.backgroundColor = `purple`;
    setTimeout(() => {
        document.querySelector(`#${btn}`).style.backgroundColor = `${btn}`;
    }, 250);
};

// Match sequence
let matchSequence = (idx) => {
    if (user[idx] === comp[idx]) {
        if (user.length === comp.length) {
            console.log(`User :${user}`);
            console.log(`Comp : ${comp}`);
            console.log(`Current Level : ${level}`);
            setTimeout(levelUp, 500);
        }
    } else {
        document.querySelector('h2').innerHTML = `Game Over !! <br> Press any key to start`;
        reset();
    }
};

// Button pressed
function buttonPress() {
    let userSelected = this.id;
    userFlash(userSelected);
    user.push(userSelected);
    console.log(user);
    matchSequence(user.length - 1);
}

// Selecting all buttons
let allBtns = document.querySelectorAll('.btn');
for (const btn of allBtns) {
    btn.addEventListener("click", buttonPress);
}

let reset = () => {
    start = false;
    user = [];
    comp = [];
    level = 0;
};

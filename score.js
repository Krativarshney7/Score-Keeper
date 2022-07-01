const p1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: document.querySelector('#p1sc')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: document.querySelector('#p2sc')
}

const rst = document.querySelector('#rst');
const opt = document.querySelector('#opt');

let last = 3;
let isGameOver = false;

function scores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === last) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    scores(p1, p2)
})

p2.button.addEventListener('click', function () {
    scores(p2, p1)
})

opt.addEventListener('change', function () {
    last = parseInt(this.value);
    reset();
})

rst.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

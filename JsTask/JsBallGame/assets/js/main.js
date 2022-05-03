

let countLeft = 0;
left.onclick = function () {
    ball.style.right = (countLeft++) + '%';
    ball.style.left = (countRight--) + '%';
    if (ball.style.right == -45 + '%') {
        right.disabled = false;
    }
    else if (ball.style.right == 46 + '%') {
        left.disabled = true;
    }
}

let countRight = 0;
right.onclick = function () {
    ball.style.left = (countRight++) + '%';
    ball.style.right = (countLeft--) + '%';
    if (ball.style.left == 46 + '%') {
        right.disabled = true;
    }
    else if (ball.style.left == -45 + '%') {
        left.disabled = false;
    }
}


let countUp = 0;
up.onclick = function () {
    ball.style.bottom = (countUp++) + '%';
    ball.style.top = (countDown--) + '%';
    if (ball.style.bottom == 43 + '%') {
        up.disabled = true;
    }
    else if (ball.style.bottom == -42 + '%') {
        down.disabled = false;
    }
}

let countDown = 0;
down.onclick = function () {
    ball.style.top = (countDown++) + '%';
    ball.style.bottom = (countUp--) + '%';
    if (ball.style.top == 43 + '%') {
        down.disabled = true;
    }
    else if (ball.style.top == -42 + '%') {
        up.disabled = false;
    }
}


let noButton = document.getElementById('noButton');

function moveButton() {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const viewportWidth = window.innerWidth - buttonWidth;
    const viewportHeight = window.innerHeight - buttonHeight;

    const newTop = Math.random() * viewportHeight;
    const newLeft = Math.random() * viewportWidth;

    noButton.style.position = 'absolute';
    noButton.style.top = newTop + 'px';
    noButton.style.left = newLeft + 'px';
}

function acceptProposal() {
    window.location.href = 'gracias.html';
}

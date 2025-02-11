const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");
const message = document.querySelector(".message");

const messages = ["Are you sure?", "Really sure?", "Think again!", "Going", "Going once", "Going twice", "Last chance!"];
let messageIndex = 0;

function handleNoClick() {
    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
    }

    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.7}px`;
}

noButton.addEventListener("click", handleNoClick);
yesButton.addEventListener("click", () => {
    message.textContent = "Yay! I can't wait. ILOVEYOUuu!";
});

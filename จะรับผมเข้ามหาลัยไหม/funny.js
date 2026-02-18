const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const container = document.querySelector(".buttons");

function moveButton() {

    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// หนีทั้งตอน hover และตอนจะคลิก
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("mousedown", moveButton);
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", () => {
    result.innerHTML = "ผมรู้ว่าท่านตัดสินใจถูกต้อง 😌✨";
});

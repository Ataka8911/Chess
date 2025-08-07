document.addEventListener("DOMContentLoaded", function () {
  const marqueeContent = document.getElementById("topnavid");
  const items = marqueeContent.innerHTML;
  marqueeContent.innerHTML = items + items + items;
  const originalWidth = Array.from(
    document.querySelectorAll(".topNavigationRunningTextli")
  )
    .slice(0, 3)
    .reduce((total, item) => total + item.offsetWidth + 1, 0);
  const style = document.createElement("style");
  style.textContent = `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${originalWidth}px); }
                }
            `;
  document.head.appendChild(style);
  marqueeContent.addEventListener("mouseenter", function () {
    this.style.animationPlayState = "paused";
  });

  marqueeContent.addEventListener("mouseleave", function () {
    this.style.animationPlayState = "running";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  for (let j = 1; j <= 6; j++) {
    let bef = document.querySelector(`.li-${j}`);
    if (bef) {
      bef.style.setProperty("--before", `"${j}"`);
    }
  }

  let buttonPlus = document.querySelector(".btn2");
  let buttonMinus = document.querySelector(".btn1");
  let counterDisplay = document.querySelector(".ChangeCount");

  if (!buttonPlus || !buttonMinus || !counterDisplay) {
    console.error("Не найдены необходимые элементы!");
    return;
  }

  let currentCount = parseInt(counterDisplay.textContent) || 3;
  counterDisplay.textContent = currentCount;

  function getVisibleIndexes() {
    let indexes = [];
    for (let i = 0; i < 3; i++) {
      indexes.push(currentCount - 1 - i);
    }
    return indexes.filter((index) => index >= 0);
  }

  function updateListVisibility() {
    const visibleIndexes = getVisibleIndexes();

    for (let i = 0; i < 6; i++) {
      const element = document.getElementById(`MemberLi-${i + 1}`);
      if (element) {
        element.style.display = visibleIndexes.includes(i) ? "flex" : "none";
      }
    }
  }

  function increaseCounter() {
    if (currentCount < 6) {
      currentCount++;
      counterDisplay.textContent = currentCount;
      updateListVisibility();
    }
  }

  function decreaseCounter() {
    if (currentCount > 3) {
      currentCount--;
      counterDisplay.textContent = currentCount;
      updateListVisibility();
    }
  }

  buttonPlus.addEventListener("click", increaseCounter);
  buttonMinus.addEventListener("click", decreaseCounter);

  updateListVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  let current = 1;
  const btnToNext = document.querySelector(".SSB2");
  const btnToago = document.querySelector(".SSB1");
  function toNext() {
    if (current < 5) {
      current += 1;
      RefreshColor();
    }
  }
  function toAgo() {
    if (current > 1) {
      current -= 1;
      RefreshColor();
    }
  }

  function RefreshColor() {
    for (let i = 1; i < 6; i++) {
      let point = document.querySelector(`.p${i}`);
      let disp = document.querySelector(`.s${i}`);
      if (point) {
        point.style.backgroundColor = i === current ? "black" : "";
      }
      if (disp) {
        disp.style.display = i === current ? "flex" : "none";
      }
    }
  }
  btnToNext.addEventListener("click", toNext);
  btnToago.addEventListener("click", toAgo);

  RefreshColor();
});

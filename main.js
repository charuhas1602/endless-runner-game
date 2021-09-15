let obj1 = document.getElementById("obj1");
let obj2 = document.getElementById("obj2");
let scoreBoard = document.getElementById("scoreBoard");
// let HigestScore = document.getElementById("HigestScore");
let score = 0;
// let HigestScoreVal = 0;
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    document.getElementById("obj1").classList.add("obj1Ani");
    setTimeout(() => {
      document.getElementById("obj1").classList.remove("obj1Ani");
    }, 800);
  }
});

setInterval(() => {
  let obj1Val = parseInt(
    window.getComputedStyle(obj1).getPropertyValue("bottom")
  );
  let obj2Val = parseInt(
    window.getComputedStyle(obj2).getPropertyValue("left")
  );
  if (obj2Val >= 24 && obj2Val <= 73 && obj1Val <= 40) {
    console.log(obj1Val, obj2Val);
    alert(`Game over.. Score is ${score}  -- Obj1-${obj1Val},Obj2-${obj2Val}`);
    obj2.style.display = "none";
    score = 0;
    window.location.reload();
  }
}, 9);

setInterval(() => {
  score++;
  scoreBoard.innerHTML = `<span "text-center text-danger">${score}</span>`;
}, 800);
// 16 to 73
// 0 to 35

// heart click counter start
const heartClick = document.getElementsByClassName("heart-icon");

for (let i = 0; i < heartClick.length; i++) {
  heartClick[i].addEventListener("click", function () {
    const heartTag = document.getElementById("total-click");
    let likeNum = parseInt(heartTag.innerText);

    likeNum++;
    heartTag.innerText = likeNum;
  });
}
// heart click counter close
// copy counter satrt
const clickOnCopy = document.querySelectorAll(".copy-btn");
for (let i = 0; i < clickOnCopy.length; i++) {
  clickOnCopy[i].addEventListener("click", function () {
    const getCard = clickOnCopy[i].closest(".cardDiv");
    const emNumber = getCard.querySelector(".call-num").innerText;
    navigator.clipboard.writeText(emNumber);
    alert(`Number Copied: ${emNumber}`);
    const totalCopyTag = document.getElementById("total-copy");
    let totalCopy = parseInt(totalCopyTag.innerText);
    totalCopy++;
    totalCopyTag.innerText = totalCopy;
  });
}
// copy counter close
// call button funtion start
const callOnClick = document.querySelectorAll(".call-btn");
for (let i = 0; i < callOnClick.length; i++) {
  callOnClick[i].addEventListener("click", function () {
    const getCallCard = callOnClick[i].closest(".cardDiv");
    const callHead = getCallCard.querySelector(".heading").innerText;
    const callNumber = getCallCard.querySelector(".call-num").innerText;
    const coinCost = document.getElementById("coin-counter");
    const coinCostNumber = parseInt(coinCost.innerText);
    const remCoin = coinCostNumber - 20;
    if (coinCostNumber < 20) {
      alert(`❌ You dont have Enough Coin, You need 20 coin to call.`);
      return;
    }
    alert(`📞 Calling ${callHead} ${callNumber}`);
    coinCost.innerText = remCoin;
  });
}
// call button funtion close

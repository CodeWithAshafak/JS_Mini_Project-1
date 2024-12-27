const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (event) => {
  console.log("chal gya");
  // console.log(event.offsetX)
  // console.log(event.offsetY)
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const CopiesOfSpan = document.createElement("span");

  bodyEl.appendChild(CopiesOfSpan);
  CopiesOfSpan.style.left = xPos + 'px'
  CopiesOfSpan.style.top = yPos + 'px'

  
});



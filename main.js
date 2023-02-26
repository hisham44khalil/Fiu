let btn = document.querySelector(".bar")
let page = document.querySelector(".pages")
let close = document.querySelector(".close")

// btn.onclick = one;
// function one() {
//   // console.log("hisham");
//   page.style.display = "block";
// }

btn.addEventListener("click", function () {
  // page.style.display = "block";
  if (page.style.display === "none") {
    page.style.display = "block"
  } else if (page.style.display === "block") {
    page.style.display = "none"
  } else {
    page.style.display = "none"
  }
})



// window.addEventListener('load', function () {
//   setTimeout(function () {
//     var loadingScreen = document.querySelector(".loader");
//     if (loadingScreen) {
//       loadingScreen.style.display = 'none';
//     }
//   }, 2000); 
// });

let paragraphs = [...document.querySelectorAll('.reveal-type')];
let spans = [];

paragraphs.forEach(paragraph => {
  let htmlString = '';
  let pArray = paragraph.textContent.split('');
  for (let i = 0; i < pArray.length; i++) {
    htmlString += `<span>${pArray[i]}</span>`;
  }
  paragraph.innerHTML = htmlString;
});

spans = [...document.querySelectorAll('span')];

function revealSpans() {
  for (let i = 0; i < spans.length; i++) {
    let { left, top } = spans[i].getBoundingClientRect();
    top = top - (window.innerHeight * 0.8);
    
    // Calculate opacity safely
    let rawOpacity = 1 - ((top * 0.01) + (left * 0.001));
    let opacityValue = Math.min(Math.max(rawOpacity, 0.1), 1); // Clamp between 0.1 and 1

    spans[i].style.opacity = opacityValue.toFixed(3);
  }
}

window.addEventListener('scroll', revealSpans);
revealSpans();

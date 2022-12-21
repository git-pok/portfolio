/*alert function
function hello() {
    const name = prompt('Hello! What is your name?');
    return alert('Welcome' + ' ' + name);
}

window.addEventListener('DOMContentLoaded', hello);
*/

// function color() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

readMoreBtn = document.querySelector('#rdBtn');
// function rdMore() {
//     readMoreDiv = document.querySelector('#read-more');
//     if (readMoreDiv.style.display === "none") {
//         readMoreDiv.style.display = "block";
//     } else {
//         readMoreDiv.style.display = "none";
//     }
// }

function rdMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("rdBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
readMoreBtn.addEventListener('click', rdMore);
const waveGrid = document.getElementById("waveGrid");
console.log(waveGrid);
var cubeHTML;
var delay = 200;
var size1 = parseInt(prompt("Enter size on one axis"));
var size2 = parseInt(prompt("Enter size on the other axis"));
for (var i = 0; i < size1; i += 1) {
  delay += 150;
  for (var j = 0; j < size2; j += 1) {
    cubeHTML +=
      '<a-box class="cube" position="' +
      j +
      " 2 " +
      i +
      '" Animation="property: position; to: ' +
      j +
      " 5 " +
      i +
      "; from: " +
      j +
      " 2 " +
      i +
      "; dur: 1000; easing: easeInOutQuad; loop: true; dir:alternate; delay: " +
      delay +
      '; startEvents: startWave"></a-box>';
  }
}

var baseAnimation;
waveGrid.innerHTML = cubeHTML;

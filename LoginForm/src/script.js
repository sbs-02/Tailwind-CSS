const openEye = document.getElementById("eye");
const closedEye = document.getElementById("closedEye");

openEye.addEventListener("toggle", function () {
  openEye.classList.toggle("hidden");
});
closedEye.addEventListener("toggle", function () {
  openEye.classList.toggle("hidden");
});

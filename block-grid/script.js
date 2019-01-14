const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  console.log("Hello world!");

  const grid = new Grid();
  grid.draw();
}

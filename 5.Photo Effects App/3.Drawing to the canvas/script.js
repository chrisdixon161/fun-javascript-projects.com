const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image(); // Create new img element
img.src = "bridge.jpg"; // Set source path
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
};

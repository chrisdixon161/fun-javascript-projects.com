const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const reader = new FileReader();
const img = new Image();

function uploadImage(e) {
  reader.onload = () => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}

const imageLoader = document.getElementById("uploader");
imageLoader.addEventListener("change", uploadImage);

const change = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    // data[i] = 255; // red
    // data[i+1] = 255; // green
    data[i + 2] = 255; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

document.querySelectorAll("button")[0].addEventListener("click", change);

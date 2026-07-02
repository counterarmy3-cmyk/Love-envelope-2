const envelope = document.getElementById("envelope");
const photo = document.getElementById("photo");
const message = document.getElementById("message");

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.png"
];

envelope.onclick = function () {
  envelope.style.display = "none";
  photo.classList.remove("hidden");

  let i = 0;

  function nextPhoto() {
    photo.src = photos[i];

    if (i < photos.length - 1) {
      i++;
      setTimeout(nextPhoto, 2500);
    } else {
      setTimeout(() => {
        photo.style.display = "none";
        message.classList.remove("hidden");
      }, 2500);
    }
  }

  nextPhoto();
};

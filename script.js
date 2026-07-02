const envelope = document.getElementById("envelope");
const photo = document.getElementById("photo");
const message = document.getElementById("message");

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.png"
];

let index = 0;

envelope.addEventListener("click", () => {
  document.getElementById("envelope").style.display = "none";
  photo.classList.remove("hidden");
  showPhotos();
});

function showPhotos() {
  photo.src = photos[index];

  setTimeout(() => {
    index++;

    if (index < photos.length) {
      showPhotos();
    } else {
      setTimeout(() => {
        photo.style.display = "none";
        message.classList.remove("hidden");
        message.innerHTML = "❤️ I Love You Sona ❣️ ❤️";
      }, 2500);
    }
  }, 2500);
}

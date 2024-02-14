const yes = document.getElementById('yes');
const no = document.getElementById('no');




const heartImages = [
    "assets/Heart animation/0.jpg",
    "assets/Heart animation/1.jpg",
    "assets/Heart animation/2.jpg",
    "assets/Heart animation/3.jpg",
    "assets/Heart animation/4.jpg",
    "assets/Heart animation/5.jpg",
    "assets/Heart animation/6.jpg",
    "assets/Heart animation/7.jpg",
    "assets/Heart animation/8.jpg",
    "assets/Heart animation/9.jpg",
    "assets/Heart animation/10.jpg",
    "assets/Heart animation/11.jpg"
  ];
  
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    let no = document.getElementById('no');
    if (no) {
      no.addEventListener('click', () => {
        spawnNextImage();
        console.log('ouch!');
      });
    }
  });

function spawnNextImage() {
    if (currentIndex==11){
        alert('ur loss');
      }else{
    currentIndex = (currentIndex + 1) % heartImages.length; // Get the index of the next coffee image
    const nextImageSrc = heartImages[currentIndex]; // Get the URL of the next coffee image
    let heartImage = document.querySelector('.heart');
    if (heartImage && currentIndex<11) {
      heartImage.src = nextImageSrc;
    }}
  }



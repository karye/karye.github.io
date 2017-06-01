var images = ["Bilder/Bildspel01.jpg", "Bilder/Bildspel03.jpg", "Bilder/Bildspel02.jpg", "Bilder/Bildspel04.jpg"];

var imageNumber = 0;
var imageLenght = images.length - 1;


function changeImage(x) {
    imageNumber += x;

    if (imageNumber > imageLenght) {
        imageNumber = 0;
    }
    if (imageNumber < 0) {
        imageNumber = imageLenght;
    }

    document.getElementById("slideshow").src = images[imageNumber];

    return false;
}



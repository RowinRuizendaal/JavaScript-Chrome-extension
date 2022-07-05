function setImage(image) {
    document.body.setAttribute(
        "style",
        `background-image: url(https://source.unsplash.com/random/1920x1080);`
    );
}

document.addEventListener("DOMContentLoaded", () => {
    setImage();
});
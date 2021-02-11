
let siteImages = document.querySelectorAll("img");
let bannerImg = document.querySelector(".home img");
let navAnchors = document.querySelectorAll("nav a");


// BANNER IMG CLICKED
bannerImg.addEventListener("click", bannerImgClick);

function bannerImgClick(event) {
    console.log("cliiiiiicked")
    event.target.style.opacity = "0.5";
}

//DEFAULT PICTURES TO GREYSCALE
window.addEventListener("load", event => {
    console.log("loaded");
    document.querySelectorAll("img").forEach(image => {
        image.style.filter = "grayscale(100%)";
        image.style.opacity = 1;
    })
})

//COLOR PICTURES ON SCROLL
document.addEventListener("scroll", event => {
    siteImages.forEach(image => {
        image.style.filter = "";
    })
})

//CHANGE OPACITY WITH SIDE ARROWS
document.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.code === "ArrowLeft") {
        console.log("arrow left")
        siteImages.forEach(image => {
            console.log(`old image opacity: ${image.style.opacity}`);
            console.log(image.style.opacity > 0);
            if (image.style.opacity > 0) {
                image.style.opacity = image.style.opacity - 0.1;
                console.log(`new image opacity: ${image.style.opacity}`);
            }
        })
    }

    if (e.code === "ArrowRight") {
        console.log("arrow right")
        siteImages.forEach(image => {
            console.log(`old image opacity: ${image.style.opacity}`);
            console.log(image.style.opacity < 1);
            if (image.style.opacity < 1) {
                // image.style.opacity = image.style.opacity + 0.1;
                image.style.opacity = Number(image.style.opacity) + 0.1;
                console.log(`new image opacity: ${image.style.opacity}`);
            }
        })
    }
}


//REMOVE DEFAULT BEHAVIOUR
navAnchors.forEach(anchor => {
    anchor.addEventListener("click", event => {
        event.preventDefault();
        console.log("prevented");
    })
})



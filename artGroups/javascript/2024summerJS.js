const imageData = [
    { src: "../images/2024summer/2.jpg", title: "gradient (1)", description: "a set of 3 using a gradient techinque I discovered" },
    { src: "../images/2024summer/3.jpg", title: "gradient (2)", description: "a set of 3 using a gradient techinque I discovered" },
    { src: "../images/2024summer/4.jpg", title: "gradient (3)", description: "a set of 3 using a gradient techinque I discovered" },

    { src: "../images/2024summer/albcover.png" , title: "untitled", description: "I really liked this clash of colors" },
    {src: "../images/2024summer/chicago2.png" , title: "chicago (1)", description: "I really enjoy my city"}, 
    {src: "../images/2024summer/chciago1.png", title: "chicago (2)"
    , description: "I forgot where I took this, but I know it was a pretty sight" }, 
    {src: "../images/2024summer/IMG_9031.png", title: "yellow bench"
    , description: "I took a similar picture a few years ago and I really liked it"},
    {src: "../images/2024summer/faoki.png", title: "familiar"
    , description: "this is one of my favorite images, I don't know why"}, 
    {src: "../images/2024summer/holdFlowers.png", title: "held"
    , description: "my sister didn't trust the process but I like how it came out"}, 
    {src: "../images/2024summer/OrangeFLowers.png", title: "Orange Flowers"
    , description: "theres a unique sadness to these flowers, I cherish them"},
    {src: "../images/2024summer/glitchYELLOW.png", title: "Yellow Flowers"
    , description: "mixing my editing with nature, kinda subtle I like it"}, 
    {src: "../images/2024summer/atsomepoint.png", title: "at some point"
    , description: "if I make these nature-type photos a collection, this will be the cover"}, 
    {src: "../images/2024summer/flowes.png", title: "untitled"
    , description: "back in high school I loved this idea of a box, and I think its refined a little more now"}, 
    {src: "../images/2024summer/standsomwhere.png", title: "field" 
    , description:"A lot of my work is focused on circles, and I wanted to do that this summer too"},
    {src: "../images/2024summer/goose.png", title: "goose"
    , description:"more box art that I liked"},
    {src: "../images/2024summer/wallbrick.png", title: "untitled"
    , description: "very pretty walls"}, 
    {src: "../images/2024summer/squareboat.png", title: "sailboat"
    , description: "sucha pretty scene, I'm glad I saw it"}, 
    {src: "../images/2024summer/parachute1.png", title: "untitled"
    , description: "what a wonderful feeling that must be"} 
];

// Get the index from the URL
const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get('index'), 10);

// Use the index to get the correct image data
const image = imageData[index];
document.getElementById("image").src = image.src;
document.getElementById("title").innerText = image.title;
document.getElementById("description").innerText = image.description;

// For navigation buttons
document.getElementById("next").onclick = () => navigate(index + 1);
document.getElementById("prev").onclick = () => navigate(index - 1);

function navigate(newIndex) {
    if (newIndex >= imageData.length) newIndex = 0; // Wrap around to first image
    if (newIndex < 0) newIndex = imageData.length - 1; // Wrap around to last image
    window.location.href = `viewerSummer.html?index=${newIndex}`;
}


// Open Lightbox
function openLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = image.src;
    // lightboxTitle.innerText = image.title;
    // lightboxDescription.innerText = image.description;
    
    lightbox.style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
// Event listener for the 'Escape' key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Event listener for clicking outside the image to close the lightbox
document.getElementById("lightbox").addEventListener('click', (event) => {
    if (event.target === document.getElementById("lightbox")) {
        closeLightbox();
    }
});
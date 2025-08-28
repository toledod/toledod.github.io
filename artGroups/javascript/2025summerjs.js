const imageData = [
    { src: "../images/2025summer/absence.jpg", title: "absence", description: "an empty path, a moment to reflect" },
    { src: "../images/2025summer/cornered.jpg", title: "cornered", description: "corner of a wall, vegetation bringing it to life" },
    { src: "../images/2025summer/flowerspng.jpg", title: "untitled", description: "what a beautiful set of flowers" },
    { src: "../images/2025summer/flowerGlitch.jpg" , title: "glitch (1)", description: "an expirement using blending modes and blurs to create a glitch effect" },
    {src: "../images/2025summer/parkGlitch.jpg" , title: "glitch (2)", description: "an expirement using blending modes and blurs to create a glitch effect"}, 
    {src: "../images/2025summer/handincloud.jpg", title: "hand in the clouds (1)"
    , description: "just keep reaching" }, 
    {src: "../images/2025summer/handincloud2.jpg", title: "hand in the clouds (2)"
    , description: "even if you're set back"},
    {src: "../images/2025summer/rainyWalk1.jpg", title: "walk in the rain (1)"
    , description: "these were taken on a walk with my family as it started raining"}, 
    {src: "../images/2025summer/rainyWalk2.jpg", title: "walk in the rain (2)"
    , description: "these were taken on a walk with my family as it started raining"},
    {src: "../images/2025summer/rainyWalk3.jpg", title: "walk in the rain (3)"
    , description: "these were taken on a walk with my family as it started raining"},
    {src: "../images/2025summer/yard.jpg", title: "in my yard"
    , description: "now that I am back home, my yard will be my main studio. Can't wait to see what I can do here."}
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
    window.location.href = `viewerSummer2025.html?index=${newIndex}`;
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
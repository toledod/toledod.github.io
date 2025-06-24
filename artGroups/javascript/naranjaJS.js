const imageData = [
    { src: "../images/deNaranja/Orange1.jpg", title: "untitled", description: "Orange sunset on a snowy field." },
    { src: "../images/deNaranja/Oragne2.jpg", title: "untitled", description: "Orange scarffff" },
    { src: "../images/deNaranja/Orange3.jpg", title: "untitled", description: "Orange house!" },
    { src: "../images/deNaranja/Orange4.jpg" , title: "untitled", description: "gradient added" },
    {src: "../images/deNaranja/Orange5.jpg" , title: "untitled", description: "RIP frijolito"}, 
    {src: "../images/deNaranja/Orange6.jpg", title: "untitled"
    , description: "Cheeto's paw" }, 
    {src: "../images/deNaranja/Orange7.jpg", title: "untitled"
    , description: "Cheeto"},
    {src: "../images/deNaranja/Orange8.jpg", title: "untitled"
    , description: "idk what this is, but it is orange"}, 
    {src: "../images/deNaranja/Orange9.jpg", title: "untitled"
    , description: "more orange"}, 
    {src: "../images/deNaranja/Orange10.jpg", title: "untitled"
    , description: "start of the orange balloon series. THe balloon was not orange at first."},
    {src: "../images/deNaranja/Orange11.jpg", title: "untitled"
    , description: "orange ballon again"}, 
    {src: "../images/deNaranja/Orange12.jpg", title: "untitled"
    , description: "Orange filter"}, 
    {src: "../images/deNaranja/Orange13.jpg", title: "untitled"
    , description: "More focus on photoshop creation of an orange background"}, 
    {src: "../images/deNaranja/Orange14.jpg", title: "untitled" 
    , description:"brining in my waves"},
    {src: "../images/deNaranja/Orange15.jpg", title: "untitled"
    , description:"two trees touching"},
    {src: "../images/deNaranja/Orange16.jpg", title: "untitled"
    , description: "definitely more blue than orange but still has orange"}, 
    {src: "../images/deNaranja/Orange17.jpg", title: "sailboat"
    , description: "Orange sunset again, with a cool pattern in the sky."}, 
    {src: "../images/deNaranja/Orange18.jpg", title: "untitled"
    , description: "orange balloon series continues!"},
    {src: "../images/deNaranja/Orange19.jpg", title: "untitled"
    , description: "orange balloon"},
    {src: "../images/deNaranja/Orange20.jpg", title: "untitled"
    , description: "orange balloon again"},
    {src: "../images/deNaranja/Orange22.jpg", title: "untitled"
    , description: "orange balloon one last time"},
    {src: "../images/deNaranja/Orange21.jpg", title: "untitled"
    , description: "wavy pattern to end it off"}  
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
    window.location.href = `viewerNaranja.html?index=${newIndex}`;
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

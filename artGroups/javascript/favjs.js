const imageData = [
    {src: "../images/fav/youwouldhavelikedthese2.png", 
        title: "you would have liked these", 
        description: "" },
        {src: "../images/fav/skycantholdyoufvr.png", 
        title: "the sky can't hold you forever", 
        description: "" },
        {src: "../images/fav/show me its real.png", 
        title: "show me whats real", 
        description: "" },
        {src: "../images/fav/mirrorselfie.png", 
        title: "mirror selfie", 
        description: "" },
        {src: "../images/fav/layephoto1.jpg", 
        title: "blindsighted", 
        description: "" },
        {src: "../images/fav/ink2.png", 
        title: "colormesh", 
        description: "" },
        {src: "../images/fav/im okay.png", 
        title: "im okay", 
        description: "" },
        {src: "../images/fav/hope youre well copy.png", 
        title: "hope you're well", 
        description: "" },
        {src: "../images/fav/handswithlight.png", 
        title: "in your hands", 
        description: "" },
        {src: "../images/fav/almost.jpg", 
        title: "almost", 
        description: "" }
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
    document.getElementById("next").onclick = () => navigate(index - 1);
    document.getElementById("prev").onclick = () => navigate(index + 1);
    
    function navigate(newIndex) {
        if (newIndex >= imageData.length) newIndex = 9; 
        if (newIndex < 0) newIndex = imageData.length - 1;
        window.location.href = `viewerFav.html?index=${newIndex}`;
    }
    
    
    // Open Lightbox
    function openLightbox() {
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightboxImage");
        lightboxImage.src = image.src;
        const imageSrc = lightboxImage.src;
    
        lightboxImage.classList.remove("lightbox-content", "lightbox-contentB");
    
        if (imageSrc.includes("almost.jpg")) {
            lightboxImage.classList.add("lightbox-contentB");
            console.log("gave B");
        } else {
            lightboxImage.classList.add("lightbox-content");
        }
        
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

    document.getElementById("lightbox").addEventListener('click', (event) => {
        if (event.target === document.getElementById("lightbox")) {
            closeLightbox();
        }
    });
const imageData = [
    {src: "../images/general/photo2.png",title: "noticed",
    description: "" },
    {src: "../images/general/laye2-2.png",title: "untitled",
    description: "" },
    {src: "../images/general/concalma.png",title: "con calma",
    description: "" },
    {src: "../images/general/Mex5.png",title: "mexico (1)",
    description: "" },
    {src: "../images/general/mexArt1.png",title: "mexico (2)",
    description: "" },
    {src: "../images/general/Mexrt4.png",title: "mexico (3)",
    description: "" },
    {src: "../images/general/handsoutLONG.png",title: "untitled",
    description: "" },
    {src: "../images/general/color thing.png",title: "color palette",
    description: "" },
    {src: "../images/general/album cover2.png",title: "album cover",
    description: "I actually really liked this one I dont know why I didn't use it" },
    {src: "../images/general/brokenLight.png",title: "broken light",
    description: "" },
    {src: "../images/general/hymPost.png",title: "hate yourself",
    description: "" },
    {src: "../images/general/benchWithSister.png",title: "untitled",
    description: "" },
    {src: "../images/general/loveyourself.png",title: "love yourself",
    description: ""},
    {src: "../images/general/yearn.png",title: "yearn",
    description: ""},
    {src: "../images/general/stars that shine.png",title: "untitled",
    description: ""},
    {src: "../images/general/the stars in my room.png",title: "the stars in my room",
    description: ""},
    {src: "../images/general/CTAtrain.png",title: "train ride",
    description: ""}
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
        window.location.href = `viewerGeneral.html?index=${newIndex}`;
    }
    
    
    // Open Lightbox
    function openLightbox() {
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightboxImage");
        // Set the image src first
        lightboxImage.src = image.src;
        const imageSrc = lightboxImage.src; // Now this contains the updated src
    
        lightboxImage.classList.remove("lightbox-content", "lightbox-contentB");
    
        if (imageSrc.includes("handsoutLONG.png") || imageSrc.includes("yearn.png")) {
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
    
    // Event listener for clicking outside the image to close the lightbox
    document.getElementById("lightbox").addEventListener('click', (event) => {
        if (event.target === document.getElementById("lightbox")) {
            closeLightbox();
        }
    });
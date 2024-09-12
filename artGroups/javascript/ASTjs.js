const imageData = [
    {src: "../images/sky.png",title: "untitled",
    description: "taken in Iowa surprisingly"},
    {src: "../images/sky2.png",title: "untitled",
    description: "a very beautiful sky"}, 
    {src: "../images/windGen.png",title: "windmill",
    description: "I love their shape, and I took this through a car window"}, 
    {src: "../images/bridgeCar.png",title: "untitled",
    description: "this color is very pleasing to look at"}, 
    {src: "../images/classRoom.png",title: "classroom",
    description: "light/shadows are really nice"}, 
    {src: "../images/flowers2.png",title: "keep right",
    description: "nothing else to do"}, 
    {src: "../images/pinkflwr.png",title: "pink flowers",
    description: "a beautiful sight"}, 
    {src: "../images/simple2.png",title: "untitled",
    description: "such a pretty blue sky"}, 
    {src: "../images/flower1.png",title: "untitled",
    description: "highlighting the prettiest part"}, 
    {src: "../images/hope youre well copy.png",title: "hope you're well",
    description: "i really do"}, 
    {src: "../images/sign1.png",title: "please wait a little more",
    description: "just a bit"}, 
    {src: "../images/peacefulnessBook.png",title: "peacefulness",
    description: "such a scenic sky"}, 
    {src: "../images/bluered.png",title: "untitled",
    description: "what a lonely table"}, 
    {src: "../images/did you calm downBook.png",title: "did you calm down",
    description: "used to have text in the brown gradient"}, 
    {src: "../images/greens.png",title: "green",
    description: "reminds me of my older work"}, 
    {src: "../images/youwouldhavelikedthese2.png",title: "you would have liked these",
    description: "or maybe you wouldn't, I'd never really know"}, 
    {src: "../images/flowerTree.png",title: "pink",
    description: "made alognside green"}, 
    {src: "../images/barkFlower.png",title: "untitled",
    description: "almost like a window inside the bark"}, 
    {src: "../images/tornclouds1.png",title: "torn clouds",
    description: "a cool concept I enjoyed making"}, 
    {src: "../images/tree1.png",title: "untitled",
    description: ""}, 
    {src: "../images/art11 copy.png",title: "dilemma",
    description: "you wish \n your mess \n was a pattern \n because \n maybe then \n you can say \n you know what \n you are doing"}, 
    {src: "../images/coudlve.png",title: "could've",
    description: "the last time we spoke \n i should have said so \n much more \n\n but I couldn't \n so this will \n have to do instead"},
    {src: "../images/cover2ast.png",title: "front cover",
    description: ""},
    {src: "../images/coverBack2.png",title: "back cover",
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
        window.location.href = `viewerAST.html?index=${newIndex}`;
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
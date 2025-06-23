const imageData = [
    {src: "../images/loteria/intro/Cover1.jpg",title: "sobre loteria",
    description: "Cover art for my book, 'sobre loteria', taken while playing with a custom version of the game I made that included my friends."},
    {src: "../images/loteria/intro/page1.jpg",title: "Acknowledgements",
    description: "All the people who made this possible!"},
    {src: "../images/loteria/intro/page2.jpg",title: "La Estrella",
    description: "A edit of the original card, 'La Estrella', which is my favorite card in the game."},
    {src: "../images/loteria/intro/page3.jpg",title: "Playing Loteria",
    description: "Picutre of my friend Zoey playing Loteria at a LASO event at Carleton College"},
    {src: "../images/loteria/intro/page4.jpg",title: "My Preample",
    description: " "},
    {src: "../images/loteria/chap1/page5.png",title: "Chapter 1",
    description: " "},
    {src: "../images/loteria/chap1/page6.png",title: "El Gato",
    description: "featuring the lovely Cheeto"},
    {src: "../images/loteria/chap1/page7.png",title: "El Fuego",
    description: " "},
    {src: "../images/loteria/chap1/page8.png",title: "Las Flores",
    description: " "},
    {src: "../images/loteria/chap1/page9.png",title: "El Coche",
    description: " "},
    {src: "../images/loteria/chap1/page10.png",title: "La Casa",
    description: " "},
    {src: "../images/loteria/chap1/page11.png",title: "El Globo",
    description: "Description for page 11"},
    {src: "../images/loteria/chap1/page12.png",title: "La Naranja",
    description: " "},
    {src: "../images/loteria/chap1/page13.png",title: "Los Zapatos",
    description: " "},
    {src: "../images/loteria/chap1/page14.png",title: "El Piano",
    description: " "},
    {src: "../images/loteria/chap2/page5.jpg",title: "Chapter 2",
    description: " "},
    {src: "../images/loteria/chap2/page6.jpg",title: "La Calavera",
    description: "On the wall of probably the worst dorm at Carleton College, Musser Hall, I decided to put 'La Calavera' or 'The Skull' simply to show my appreciation."},
    {src: "../images/loteria/chap2/page7.jpg",title: "El Sol",
    description: "I put 'El Sol' or 'The Sun' on the wall of my boss, Angelica Linder, office. She was an amazing inspiration and mentor during my time at Carleton, and made me feel close to home even though I was miles away."},
    {src: "../images/loteria/chap2/page8.jpg",title: "El Arbol",
    description: "Placed on a sidewalk leading up to Watson Hall, simply for it being one of the most scenic pictures I have taken at Carleton College, when I least expected it to become that."},
    {src: "../images/loteria/chap2/page9.jpg",title: "La Araña",
    description: "Placed on a brick pillar at Family Fare in Northfield, MN. Not really sure why I picked to place la araña there, but I think it looks really cool."},
    {src: "../images/loteria/chap2/page10.jpg",title: "La Bandera",
    description: "I place 'La Bandera' or 'The Flag' on the wall of Coco's Place, as they had a very nice Mexican aesthetic inside their resturant, and I enjoyed going there every time."},
    {src: "../images/loteria/chap2/page11.jpg",title: "El Pajaro",
    description: "Placed on the side of a residential house, I really enjoyed how it blended in with the rest of the pictures scenery."},
    {src: "../images/loteria/chap2/page12.jpg",title: "El Corazon",
    description: "Placed inside a painting that resides in El Triunfo, my favorite Mexican restaurant in Northfield, MN. This was my favorite place to go eat, and I especially enjoyed meeting the owners and being able to support their resturant."},
    {src: "../images/loteria/chap3/chap3.jpg",title: "Chapter 3",
    description: " "},
    {src: "../images/loteria/chap3/page6.jpg",title: "El Diablito",
    description: "Modeled by my friend Angel, which I can say is anything but an angel. A little of a michievous person, but a good friend who I know will make many people proud in life. I am very glad he was able to model for this card."},
    {src: "../images/loteria/chap3/page7.jpg",title: "La Dama",
    description: "Modeled by my friend Layevska, who I knew would be perfect for this card. She has helped me the most with my photography projects, and she is always so supportive and interested in my photos. She is such a sweet, kind, and amazing person, and I am glad she was able to model for this card."},
    {src: "../images/loteria/chap3/page8.jpg",title: "El Catrin",
    description: "Modeled by my friend Allen, who I think did an amazing job at modeling for this card. He is a very hard working and dedicated person, and has been a great friend for these 4 years. I am glad he was down to be this card for the project."},
    {src: "../images/loteria/chap3/page9.jpg",title: "La Sirena",
    description: "Modeled by my friend Karina, which I am very grateful to be able to included in this project. She inspired me to look into the independent study option,and overall kinda jumpstarted this project. All though we did not talk too much, I know she is a very kind, so so supportive, and talented person, and I am glad she was able to model for this card."},
    {src: "../images/loteria/chap3/page10.jpg",title: "El Valiente",
    description: "Modeled by my friend Julian, which I believe did an amazing job at modeling this card. One of the realest friends I made, he's so funny and down to earth person, and I am glad he was down to do this card. (ladies hmu for his number)"},
    {src: "../images/loteria/chap3/page11.jpg",title: "La Muerte",
    description: "Modeled by my best friend Zoey, it took a good bit of convincing to get her to do this, but I am happy she did. As such a important part of my college experience, I would've hated to not include her. She is a very interesting individual in the most complicaated but best way possible. I am glad I met her and I am glad she did this card."},
    {src: "../images/loteria/chap3/Artboard 1.jpg",title: "La Mano",
    description: "Modeled by my friend Maurice, who I know does not like to be in pictures a lot, so I am very happy I can include his hand at least in this project. An amazing roomate, and a great friend, words cannot describe how much I appreciate him."},
    {src: "../images/loteria/chap3/Artboard 2.jpg",title: "El Negrito",
    description: "Modeled by my friend Amadou, I am very glad he was down to be this card, as it is a little contriversial, but I think came out as one of the best cards in the collection. One of the first friends I made through Carleton, I am very happy to be able to include him in my project."},
    {src: "../images/loteria/chap3/Artboard 3.jpg",title: "Los Borrachos",
    description: "Modeled by my friends, Angel, Julian, and Jose, who I consider great drinking buddies. Might not be the best thing to say, but I am glad we were able to make the memories we did while drinking together, and I am glad to be able to capture that in this card."},
    {src: "../images/loteria/chap3/Artboard 4.jpg",title: "El Musico",
    description: "Modeled by my friend Jose, which was honestly inspired by him learning to play the guitar the previous term. A fancinating person, always surprising me with the stuff he does, I am glad to be able to include him."}, 
    {src: "../images/loteria/chap3/Artboard 5.jpg",title: "El Mundo",
    description: "Modeled by my friend Sameer, I think this card came out amazing. He really did an amazing job for such an interesting card to have to model for. The first Carleton friend I met in person, I am very grateful to be able to include him in this project."}, 
    {src: "../images/loteria/chap3/Artboard 6.jpg",title: "La Soldada",
    description: "Modeled by my friend Dani, I think she did an amazing job at capturing what I wanted for this card. I am forever in her debt for being able to take me to and from Chicago/Northfield, she is a very caring and warm person, and I loved being able to make this card with her."}, 
    {src: "../images/loteria/chap3/Artboard 7.jpg",title: "El Fotografo",
    description: "Modeled by my friend Jonathan, I enjoyed being able to create a new card to be able to not only replace a card that I did not want to recreate, but also incorporate part of his life into the project. We have worked on a few amazing creative projects together, and I am glad he was able to be a part of mine"}, 
    {src: "../images/loteria/chap3/Artboard 8.jpg",title: "La Chalupa",
    description: "Modeled by my friend Lizzet, I am very grateful that she was down to help me for this card. As mysterious and lowkey as she is, she is a very kind and supportive person which I am very glad to have met. I am so grateful to be able to include her in this project."}, 
    {src: "../images/loteria/chap3/Artboard 9.jpg",title: "All Cards",
    description: "All of the cards as they were printed for the custom game of loteria."},
    {src: "../images/loteria/chap1/Cover2.jpg",title: "Back Cover",
    description: " "}
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
        window.location.href = `viewerLoteria.html?index=${newIndex}`;
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
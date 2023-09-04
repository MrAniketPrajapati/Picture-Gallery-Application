const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const categoryButtons = document.querySelectorAll(".category-button");


const photos = [
    { url: "images/photo1.jpg", category: "landscape" },
    { url: "images/photo3.jpg", category: "city" },
    { url: "images/photo2.jpg", category: "landscape" },
    { url: "images/photo4.jpg", category: "animals" },
    { url: "images/photo5.jpg", category: "city" },
    { url: "images/photo14.jpg", category: "landscape" },
    { url: "images/photo6.jpg", category: "city" },
    { url: "images/photo12.jpg", category: "landscape" },
    { url: "images/photo15.jpg", category: "food" },
    { url: "images/photo13.jpg", category: "landscape" },
    { url: "images/photo7.jpg", category: "city" },
    { url: "images/photo8.jpg", category: "food" },
    { url: "images/photo16.jpg", category: "animals" },
    { url: "images/photo17.jpg", category: "animals" },
    { url: "images/photo18.jpg", category: "animals" },
    { url: "images/photot9.jpg", category: "food" },
    { url: "images/photo10.jpg", category: "food" },
   
];


function displayPhotos(photosArray) {
    gallery.innerHTML = "";
    photosArray.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo.url;
        gallery.appendChild(img);
    });
}


displayPhotos(photos);


searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPhotos = photos.filter(photo => photo.url.toLowerCase().includes(searchTerm));
    displayPhotos(filteredPhotos);
});


categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        if (category === "all") {
            displayPhotos(photos);
        } else {
            const filteredPhotos = photos.filter(photo => photo.category === category);
            displayPhotos(filteredPhotos);
        }
    });
});

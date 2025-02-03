const accessKey = "Un96KFSq2IXT4jn7yi80y3izmM7TQyLQ_3N_Rr-gIZA";
const apiUrl = "https://api.unsplash.com/search/photos";
const imageContainer = document.getElementById("imageContainer");

document.getElementById("searchImage").addEventListener("click" ,()=>{
 const searchQuery = document.getElementById("imageNameInput").value.trim();

 if(searchQuery===""){
    alert("Please enter image name");
    return;
 }
//  fetch(`${apiUrl}?query=${searchQuery}&count=10&client_id=${accessKey}`)
 fetch(`${apiUrl}?query=${searchQuery}&per_page=30&client_id=${accessKey}`)
 .then(response =>response.json())
 .then(data=>{

    imageContainer.innerHTML = "";
    data.results.forEach(photoData => {
        const photoUrl = photoData.urls.regular;
        const imageElement = document.createElement('img');
        imageElement.src = photoUrl;
        imageElement.className = "img-thumbnail";
        imageElement.style.height = "220px";
        imageElement.style.width = "250px";
        imageContainer.appendChild(imageElement);
    });
 });
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
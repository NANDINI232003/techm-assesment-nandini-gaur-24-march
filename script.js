let result=document.getElementById("result")
console.log(result)
let currentIndex = 0;
let images = document.querySelectorAll(".box");

function highlightImage(index) {
    
    images.forEach(img => img.classList.remove("background-box"));

   
    images[index].classList.add("background-box");
}


let enlarge = function(n) {
    let image=document.createElement("img")
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    result.appendChild(image);
    let imagePath = `./images/image${n}.png`; 
    image.src = imagePath;
    image.classList.add("result"); 
    
};
function previous() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    highlightImage(currentIndex);
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    highlightImage(currentIndex);
}
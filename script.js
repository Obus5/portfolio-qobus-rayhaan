const text = [

    "Fresh Graduate",
    "Management Graduate",
    "Capital Market Enthusiast",
    "Investment Research Learner"

];


let index = 0;
let char = 0;

const typing = document.getElementById("typing");


function type(){

    if(char < text[index].length){

        typing.textContent += text[index].charAt(char);
        char++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}



function erase(){

    if(char > 0){

        typing.textContent =
        text[index].substring(0,char-1);

        char--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index >= text.length){
            index = 0;
        }

        setTimeout(type,500);

    }

}


type();
// CERTIFICATE POPUP

const certificateImages = document.querySelectorAll(".certificate-img");
const popup = document.querySelector(".certificate-popup");
const popupImage = document.querySelector(".popup-image");
const closePopup = document.querySelector(".close-popup");


certificateImages.forEach((image) => {

    image.addEventListener("click", () => {

        popup.style.display = "flex";
        popupImage.src = image.src;

    });

});


closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});


popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});
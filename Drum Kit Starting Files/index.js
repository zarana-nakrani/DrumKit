//happening on click (for understanding purpose)
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked");
// }

//adding event listener to all button using anynomous function
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
            
});
}


document.addEventListener("keydown", function(event) {
  var pressed = event.key;
  console.log(pressed)
  makeSound(pressed);
  buttonAnimation(pressed)
  
});



function makeSound(key){
    switch(key) {
        case "w":
            var tom1_key = new Audio("sounds/tom-1.mp3");
            tom1_key.play();
        break;
        
        case "a":
            var tom2_key = new Audio("sounds/tom-2.mp3");
            tom2_key.play();
        break;
        
        case "s":
            var tom3_key = new Audio("sounds/tom-3.mp3");
            tom3_key.play();
        break;
        
        case "d":
            var tom4_key = new Audio("sounds/tom-4.mp3");
            tom4_key.play();
        break;
        
        case "j":
            var snare_key = new Audio("sounds/snare.mp3");
            snare_key.play();
        break;
        
        case "k":
            var crash_key = new Audio("sounds/crash.mp3");
            crash_key.play();
        break;
    
        case "l":
            var kick_key = new Audio("sounds/kick-bass.mp3");
            kick_key.play();
        break;
    
        default:
            console.log("Nthing");
        }
}

function buttonAnimation(key_pressed) {
    document.querySelector("."+key_pressed).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("."+key_pressed).classList.remove("pressed");
    }, 100  )
}

        
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
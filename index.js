var len = document.querySelectorAll(".drum").length;

for( var i = 0; i < len; i++ )
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var which_button = this.textContent;

        makeSound( which_button );

        buttonAnimation(which_button);
    });
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
  
    buttonAnimation(event.key);
  
  });

function makeSound( key ) {

    switch (key) 
    {
        case "w":
            var sound1 = new Audio("tom-1.mp3");
            sound1.play();
            break;

        case "a":
            var sound2 = new Audio("tom-2.mp3");
            sound2.play();
            break;

        case "s":
            var sound3 = new Audio("tom-3.mp3");
            sound3.play();
            break;

        case "d":
            var sound4 = new Audio("tom-4.mp3");
            sound4.play();
            break;

        case "j":
            var sound5 = new Audio("crash.mp3");
            sound5.play();
            break;

        case "k":
            var sound6 = new Audio("kick-bass.mp3");
            sound6.play();
            break;

        case "l":
            var sound7 = new Audio("snare.mp3");
            sound7.play();
            break;
    
        default: console.log(which_button);
            
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
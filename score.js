console.log("score")
function printHighscores() {
  

    
    function myFunction () {
        document.getElementById("demo").innerHTML = "Recent Score "  + localStorage.getItem("highscores").split(",")
    }
    
    myFunction()

}



printHighscores()
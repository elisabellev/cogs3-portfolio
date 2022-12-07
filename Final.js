function details(id) {
    var btnText = document.getElementById(id+"-btn");
    var dtls = document.getElementById(id+"-dtls");
    //console.log(btnText+" "+dtls);
    if (dtls.style.display === "none") {
      dtls.style.display = "inline-block";
      btnText.innerHTML = "hide details"; 
    } else {
      dtls.style.display = "none";
      btnText.innerHTML = "show details";
    }
  }

window.onload = function () { //run when the page is done loading
    var scrli = 0; // used to ensure that the progress bars only load once    
    window.onscroll = function () { //run while the user is scrolling the page        
        let pos = document.getElementById("about").offsetTop; //get the top position of the progress div
        //console.log(pos + " " + window.scrollY);
        if (window.scrollY >= pos - 350) { // if the user's scroll position is equal to pos minus 350 pixels...
            if (scrli == 0) { // if the progress bars haven't initiated yet...        
                move('html', 60);
                move('css', 50);
                move('java', 10);
                move('fig', 20);
                move('gw', 85);
                move('mo', 80);
                scrli=1; // set scrli to 1 after initiating the progress bars so they don't initiate again
            }
        }
    };
};
  
  
function move(id, pct) {
      var elem = document.getElementById(id+"Bar");
      var width = 1;
      var time = setInterval(frame, 10);
      function frame() {
        if (width >= pct) {
          clearInterval(time);
        } else {
          width++;
          elem.style.width = width + "%";
        }
  }
}

function confirm(event) {
    alert("Your message has been sent!");
    event.preventDefault();
  }
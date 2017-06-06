       
function myFunction() {
                var x = document.getElementById("nav");
                if (x.className === "Nav") {
                    x.className += " responsive";
                } else {
                    x.className = "Nav";
                }
            }
//---------------------------------------------------------------------
function modal1(){      
    var modal = document.getElementById('myModal');

    var img = document.getElementsByClassName('images')[0];
    var modalImg = document.getElementById("content");
    var captionText = document.getElementById("caption");
            
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    } 
}

//--------------------------------------------------------------------
function modal2(){      
    var modal = document.getElementById('myModal');

    var img = document.getElementsByClassName('images')[1];
    var modalImg = document.getElementById("content");
    var captionText = document.getElementById("caption");
            
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    } 
}

//--------------------------------------------------------------------
function modal3(){      
    var modal = document.getElementById('myModal');

    var img = document.getElementsByClassName('images')[2];
    var modalImg = document.getElementById("content");
    var captionText = document.getElementById("caption");
            
    img.onclick = function(){
        modal.style.display = "block";
        captionText.innerHTML = this.alt;
        modalImg.src = this.src;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    } 
}

//--------------------------------------------------------------------
function modal4(){      
    var modal = document.getElementById('myModal');

    var img = document.getElementsByClassName('images')[3];
    var modalImg = document.getElementById("content");
    var captionText = document.getElementById("caption");
            
    img.onclick = function(){
        modal.style.display = "block";
        captionText.innerHTML = this.alt;
        modalImg.src = this.src;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    } 
}

//--------------------------------------------------------------------
function modal5(){      
    var modal = document.getElementById('myModal');

    var img = document.getElementsByClassName('images')[4];
    var modalImg = document.getElementById("content");
    var captionText = document.getElementById("caption");
            
    img.onclick = function(){
        modal.style.display = "block";
        captionText.innerHTML = this.alt;
        modalImg.src = this.src;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    } 
}
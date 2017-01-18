function myFunction() {
                var x = document.getElementById("nav");
                if (x.className === "Nav") {
                    x.className += " responsive";
                } else {
                    x.className = "Nav";
                }
            }

//-------------------------------------------------------
function modal1(){      
    var modal = document.getElementById('myModal');
    var img = document.getElementsByClassName('images')[0];
    var modalImg = document.getElementById("content");
            
    
    modal.style.display = "block";
    modalImg.src = img.src;
    

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    } 
}
//--------------------------------------------------------
function modal2(){      
    var modal = document.getElementById('myModal');
    var img = document.getElementsByClassName('images')[1];
    var modalImg = document.getElementById("content");
            
    
    modal.style.display = "block";
    modalImg.src = img.src;
    

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    } 
}

//--------------------------------------------------------
function modal3(){      
    var modal = document.getElementById('myModal');
    var img = document.getElementsByClassName('images')[2];
    var modalImg = document.getElementById("content");
            

    modal.style.display = "block";
    modalImg.src = img.src;
    

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    } 
}

//---------------------------------------------------------
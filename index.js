var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progressBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
          if(getInputValue() >= 100){
              null;
          }else{
              width = getInputValue();
              elem.style.width = width + "%";

          }
      }
    }
  }
} 

function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("getTemperature").value;
    
    return inputVal;
}
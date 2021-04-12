
    
    
    
    /* AJAX code*/
    
    function loadFileInto(fromFile, whereTo) {
      
      ajax = new XMLHttpRequest();
      
      ajax.open("GET", fromFile, true);
      
      ajax.onreadystatechange = function () {
        
        if((this.readyState == 4) && (this.status == 200)) {
          document.getElementById(whereTo).innerHTML = this.responseText;
        
        } else if ((this.readyState == 4) && (this.status !=200)) { 
        console.log("Error: " + this.responseText);
          
        }
        
      }
        
        ajax.send();
        
    }
      
       window.onload = function () {
         
         loadFileInto("Ingredients.html" , "ingredients");
         loadFileInto("Equipment.html" , "equipment");
         loadFileInto("Directions.html" , "directions")
         
       };

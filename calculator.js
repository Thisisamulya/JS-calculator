let screen=document.getElementById("screen");
    function displayip(inp){
        screen.value+=inp;
    }
    function clearall(){
        screen.value="";
    }
    function displayans(e){
        try{
            screen.value=eval(screen.value);
        }
        catch{
            screen.value="error"
        }
    }
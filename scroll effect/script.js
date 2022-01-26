    test = document.getElementById('test').style;

    test.color ="black";
    test.backgroundColor = "white"
    test.width = 240+"px";
    test.style.transitionDuration="20s"


    function scrolled(){
        var value = window.scrollY;
        test.width = value * 1.2 + "px";

        if (value<=0){
            test.color ="black";
            
            test.width = 240+"px";
            

        } else{
            
            test.backgroundColor = "black";
            

        }

        if (value<=180 && value>=10){
            test.backgroundColor = "#222"
            
        }

        if (value>=150){
            test.color = "white"
            
        }
          
        if (value>=200){
            test.width = 240+"px";
            test.color ="white";
            
        }
    };

   

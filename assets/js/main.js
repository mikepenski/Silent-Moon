window.onload = function(e){ 

    var nav = document.getElementById("toggle").nextElementSibling;

        if(nav.length != 0){

            document.getElementById("toggle").addEventListener("click", function(){
            this.classList.toggle("active");
            nav.classList.toggle("active");
        });

        }

}



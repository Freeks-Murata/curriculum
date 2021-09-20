function changeLang() {
        let japan = document.getElementById("japan");
        let usa = document.getElementById("usa");
        let options = document.querySelectorAll("option");
        if (options[1].selected) {
                japan.style.display = "block";
                usa.style.display = "none";
        } else if (options[2].selected) {
                japan.style.display = "none";
                usa.style.display = "block";
        } else if (options[3].selected) {
                japan.style.display="block";
                usa.style.display="block";
        }
} 

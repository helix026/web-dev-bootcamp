var lis = document.querySelectorAll("li");
for(var i=0; i<lis.length; i++) {
    lis[i].addEventListener("mouseover", function() {
        if(!this.classList.contains("checked"))
            this.classList.add("focused");
    })
    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("focused");
    })
    lis[i].addEventListener("click", function() {
        this.classList.toggle("checked");
    })
}
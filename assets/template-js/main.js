function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("fa-xmark");
}


$(document).ready(function() {
    $(".searchIcon").click(function() {
        $(".search").toggleClass("active");


    });
});
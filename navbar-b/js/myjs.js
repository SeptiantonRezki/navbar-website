var btnNavbar = document.getElementById("buttonNavbar");
var closeNavbar = document.getElementById("closeNavbar");

var containerFullNavbarSlide = document.getElementsByClassName("containerFullNavbarSlide")[0];
var containerNavbarSlide = document.getElementsByClassName("containerNavbarSlide")[0];


btnNavbar.addEventListener("click", function () {
    containerFullNavbarSlide.style.display = "block";
    setTimeout(() => {
        containerNavbarSlide.style.left = "0px";
    }, 500)
});
document.addEventListener("click", function (e) {
    closeNavbar.addEventListener("click", function () {
        containerFullNavbarSlide.style.display = "none";
        setTimeout(() => {
            containerNavbarSlide.style.left = "-100%";
        }, 500)
    })
})
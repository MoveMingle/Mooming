
document.addEventListener("DOMContentLoaded", function () {
var footerContainer = document.getElementById("footer");
var footerRequest = new XMLHttpRequest();
footerRequest.open("GET", "footer.html", true);
footerRequest.onload = function () {
    if (footerRequest.status >= 200 && footerRequest.status < 400) {
        footerContainer.innerHTML = footerRequest.responseText;
    }
};
footerRequest.send();
});
// AJAX 요청을 보내고 외부 HTML 파일을 가져와서 <header>에 삽입합니다.
const xhr = new XMLHttpRequest();
xhr.open("GET", "header.html", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("navbar").innerHTML = xhr.responseText;
    }
};
xhr.send();









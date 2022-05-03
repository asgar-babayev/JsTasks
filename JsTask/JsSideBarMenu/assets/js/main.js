

btnopen.onclick = function () {
    if (navbar.style.width == 0 + "%" || navbar.style.width == "") {
        navbar.style.width = 20 + '%';
        ul.style.display = 'block';
    }
    else {

        navbar.style.width = 0 + "%";
        ul.style.display = 'none';
    }
}
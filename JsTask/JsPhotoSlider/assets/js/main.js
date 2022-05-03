

let mainimg = document.querySelector(".slayd");

img1.onclick = () => mainimg.setAttribute("src", "assets/images/1.jpg")
img2.onclick = () => mainimg.setAttribute("src", "assets/images/2.jpg")
img3.onclick = () => mainimg.setAttribute("src", "assets/images/3.jpg")

let _slayd = document.getElementsByClassName("slayd");

let slaydCount = _slayd.length;
console.log(slaydCount);
let slaydNo = 0;
let i = 0;

slaydShow(slaydNo);


btnNext.onclick = function nextSlayd() {
    slaydNo++;
    slaydShow(slaydNo);
}

btnPrev.onclick = function previousSlayd() {
    slaydNo--;
    slaydShow(slaydNo);
}

function slaydShow(slaydNumber) {
    slaydNo = slaydNumber;

    if (slaydNumber >= slaydCount) slaydNo = 0;

    if (slaydNumber < 0) slaydNo = slaydCount - 1;

    for (i = 0; i < slaydCount; i++) {
        _slayd[i].style.display = "none";
    }

    _slayd[slaydNo].style.display = "block";

}
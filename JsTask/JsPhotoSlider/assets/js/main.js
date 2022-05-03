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
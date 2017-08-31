document.getElementById("box1").onclick = displayAlert;

function displayAlert(e) {
    if (e.target.id == 'box3') {
        alert("Clicked on box 1 and also inside box3!");
    } else {
        alert('only box1');
    }
}

document.getElementById("box2").onclick = disableAlert;

function disableAlert(evt) {
    evt.stopPropagation();
}
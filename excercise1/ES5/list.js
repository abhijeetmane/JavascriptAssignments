'use strict';

var names = ['Maddy', 'Daddy', 'Faddy', 'saddy', 'zaddy'],
    showAlert = function showAlert(name) {
    alert('you clicked on ' + name);
},
    listTemplate = '<ul>',
    getListElement = function getListElement(index, name) {
    return '<li onclick=showAlert("' + name + '")>' + index + ' ' + name + '</li>';
};

for (var i = 0; i < names.length; i++) {
    listTemplate += getListElement(i, names[i]);
}

listTemplate += '</ul>';
document.getElementById("nameList").innerHTML = listTemplate;
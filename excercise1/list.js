var names = ['Maddy', 'Daddy', 'Faddy', 'saddy', 'zaddy'],
    showAlert = function(name) {
        alert('you clicked on ' + name);
    },
    listTemplate = '<ul>',
    getListElement = (index, name) =>
         '<li onclick=showAlert("' + name + '")>' +
            index + ' ' + name + '</li>';
    
for (let i = 0; i < names.length; i++) {
    listTemplate += getListElement(i, names[i]);
}

listTemplate += '</ul>';
document.getElementById("nameList").innerHTML = listTemplate;
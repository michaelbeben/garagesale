var items = Array();
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'list.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
function init() {
    loadJSON(function (response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
    });
}
var electronicsList = document.createElement('ol');
var furnitureList = document.createElement('ol');
var miscellaneousList = document.createElement('ol');
miscellaneousList.setAttribute("id", "miscellaneousList");
var electronics = ["TV", "Toaster"];
var furniture = ["couch", "ottoman"];
document.getElementById("submit").onclick = function (submit) {
    var newItem = (document.getElementById("myText").value);
    items.push(newItem);
    document.getElementById("myText").value = "";
    if (electronics.includes(newItem)) {
        var listitem = document.createElement('li');
        listitem.appendChild(document.createTextNode(newItem));
        electronicsList.appendChild(listitem);
        document.body.append(electronicsList);
        document.body.append("electronics");
    }
    else if (furniture.includes(newItem)) {
        var listitem = document.createElement('li');
        listitem.appendChild(document.createTextNode(newItem));
        furnitureList.appendChild(listitem);
        document.body.append(furnitureList);
        document.body.append("success");
    }
    else {
        var listitem = document.createElement('li');
        listitem.appendChild(document.createTextNode(newItem));
        miscellaneousList.appendChild(listitem);
        document.body.append(miscellaneousList);
        document.body.append("success");
    }
};
console.log(items);
console.log(electronicsList);

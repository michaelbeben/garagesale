let items:any = Array();
function loadJSON(callback) {   

    let xobj = new XMLHttpRequest();
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
    loadJSON(function(response) {
     // Parse JSON string into object
       let actual_JSON = JSON.parse(response);
    });
   }
 

let electronicsList = document.createElement('ol');
let furnitureList = document.createElement('ol');
let miscellaneousList = document.createElement('ol');
miscellaneousList.setAttribute("id","miscellaneousList");
const electronics = ["TV","Toaster"];
const furniture = ["couch","ottoman"];


document.getElementById("submit").onclick = function(submit)
{

    let newItem: string = ((document.getElementById("myText") as HTMLInputElement).value);
    items.push(newItem);
    (document.getElementById("myText") as HTMLInputElement).value="";
    
    if (electronics.includes(newItem)) {
        let listitem = document.createElement('li');
        listitem.appendChild(document.createTextNode(newItem));
        electronicsList.appendChild(listitem);
        document.body.append(electronicsList)
        document.body.append("electronics")
        
    }
    else if (furniture.includes(newItem)) {
        let listitem = document.createElement('li');
        listitem.appendChild(document.createTextNode(newItem));
        furnitureList.appendChild(listitem);
        document.body.append(furnitureList)
        document.body.append("success")
    }
    else {
        let listitem = document.createElement('li');
        listitem.appendChild(document.createTextNode(newItem));
        miscellaneousList.appendChild(listitem);
        document.body.append(miscellaneousList)
        document.body.append("success")
    }
}

console.log(items);
console.log(electronicsList)

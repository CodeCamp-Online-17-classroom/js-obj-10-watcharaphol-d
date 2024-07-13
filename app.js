let obj = {};
while (true) {
    let key = prompt("Please enter FRUIT NAME: \n\tor type 'STOP' to finish:");
    if (key == "") {
        alert("You are not filled fruit name!");
        continue;
    }
    if (key.toLowerCase() == "stop") break;

    let value = prompt(`Please enter ${key} QUANTITY:`);
    if (value == "") {
        alert(`You are not filled ${key} quantity`);
        continue;
    }
    value = +value;
    if (isNaN(value)) {
        alert("The received data is not quantity!");
        continue;
    }
    if (value > 1) key += "s";
    alert(`The data is being restored\n\tFruit: ${key} \n\tQuantity: ${value}`);
    obj[key] = value;
}

console.log(obj);
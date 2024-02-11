let fahrenheit = Number(prompt ("Zadejte stupně Fahrenheita: "));
console.log ("fahrenheit " + fahrenheit);

let celsius = Number((5* (fahrenheit - 32)) / 9);
console.log ("celsia: " + celsius);

//document.body.innerHTML += "<p>" + "Váš převod je: " + "</p>";

document.body.innerHTML += "<p>"  + fahrenheit + " stupňů Fahrenheita " + "= " + celsius + " stupňů Celsia" + "</p>";

let trouba = Math.round (celsius)
console.log (trouba)

document.body.innerHTML += "<p><h1>" + "Na troubě nastavte " + trouba + " stupňů." + "</h1></p>";
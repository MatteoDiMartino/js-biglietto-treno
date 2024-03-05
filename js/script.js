// chiedo nome
    let userName = prompt("Dimmi il tuo nome");
    document.getElementById("Benvenuto").innerHTML = "Benvenuto/a " + userName;

// chiedo età
    let ageUser = parseInt(prompt("Scrivi la tua età"));
    document.getElementById("età").innerHTML = "Hai " + ageUser + " anni";
    console.log (ageUser)
// chiedo km
    let lengthTravel = parseInt(prompt("Scrivi la lunghezza del tuo viaggio"));
    document.getElementById("lunghezza").innerHTML = "Andrai a percorrere " + lengthTravel + "km";
    console.log (lengthTravel)
// definisco prezzo km
    let priceOnlykm = 0.21;

// calcolo prezzo
    let totalPrice = (priceOnlykm * lengthTravel)
    document.getElementById("costo").innerHTML = "Prezzo finale " + totalPrice + " euro"; 
    console.log (totalPrice)

// calcolo sconto 
    let discount
    if (ageUser<18) {
        discount = totalPrice * 0.20; 
    } else if (ageUser>65) {
        discount = totalPrice * 0.40;
    } else {
        discount = totalPrice;
    }

    console.log (discount)

// costo finale

    let finalPrice = (totalPrice - discount);

    console.log (finalPrice)
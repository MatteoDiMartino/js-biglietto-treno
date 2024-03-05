// chiedo età
    let ageUser = parseInt(prompt("Scrivi la tua età"));
    console.log (ageUser)
// chiedo km
    let lengthTravel = parseInt(prompt("Scrivi la lunghezza del tuo viaggio"));
    console.log (lengthTravel)
// definisco prezzo km
    let priceOnlykm = 0.21;

// calcolo prezzo
    let totalPrice = (priceOnlykm * lengthTravel)
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
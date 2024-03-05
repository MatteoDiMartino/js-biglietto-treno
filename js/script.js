// chiedo età

    let ageUser = parseInt(prompt("dimmi la tua età"));
    console.log (ageUser);

// chiedo km

    let kmTravel = parseInt(prompt("dimmi i km che vuoi percorrere"));
    console.log (kmTravel);

// calcolo prezzo

    let costKm = 0.21;

    console.log (costKm);


    let totalTicket = (costKm * kmTravel);
    console.log (totalTicket);

// definisco sconti
    let priceDiscount

    if(ageUser < 18) {
        priceDiscount = (totalTicket * 20 / 100);
    } else if (ageUser > 65){
       priceDiscount = (totalTicket * 40 / 100);
    };

    console.log (priceDiscount)


    
    
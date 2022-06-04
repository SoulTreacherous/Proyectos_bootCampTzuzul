
let piedra = 1, papel = 2, tijera = 3;
let usuario, bot, nombre, conforme;
// char ["Hola como estan, Espero que mal. XD"];
Boolean = true

function numRandom() {
    bot = 1+ parseInt(Math.random()*3);
    return bot;
}

sum:
do {

    do {

        nombre = prompt(`Es hora de decirnos tu nombre:\n`)

        conforme = prompt(`¿Lo escribiste bien o estas sensible hoy?, verifique su nombre t(-_-)t`)

        if(conforme === nombre ){
            alert(`Bueno, siguele tu camino, ${nombre} criatura del señor`)
            Boolean = true
            break
        }

        else(conforme != nombre);{

            console.log(`Sip, andas sensible`)
            Boolean = false
            break sum;
        }

    } while (Boolean == true);

        usuario = parseInt(prompt(`Vamos sin rodeos, ${nombre} ¿Que eliges? \nJAN_: ${piedra}\nKen_: ${papel}\nPON_: ${tijera}`))

    //esta madre me confundia. Secuencia 1
    if (usuario == 1) {

        console.log(`${nombre} uso el poder de la Piedra`);

        numRandom()
        
        if (bot == 1) {

            bot = piedra

            if (bot == 1) {
                console.log(`el bot uso piedra\n EMPATE` );
            }

        }

        else if (bot == 2) {

            bot = papel

            if (bot == 2) {
                console.log(`el bot uso papel\n PERDISTE` );
            }

        }

        else if (bot == 3) {

            bot = tijera

             if (bot == 3) {
                console.log(`el bot uso tijeras\n GANASTE` );
            }

        }


    }
    //esta madre me confundia. Secuencia 2
    else if (usuario == 2) {
        
        console.log(`${nombre} uso el poder del Papel`);

        numRandom()

            if (bot == 1) {

                bot = piedra

                if (bot == 1) {
                    console.log(`el bot uso piedra\n GANASTE` );
                }

            }

            else if (bot == 2) {

                bot = papel

                 if (bot == 2) {
                    console.log(`el bot uso papel\n EMPATE` );
                }

            }

            else if (bot == 3) {

                bot = tijera

                 if (bot == 3) {
                    console.log(`el bot uso tijeras\n PERDISTE` );
                }

            }
          
    }
    //esta madre me confundia. Secuencia 3
    else if (usuario == 3) {
        
        console.log(`${nombre} uso el poder de la Tijera`);

        numRandom()
        
        if (bot == 1) {

            bot = piedra

            if (bot == 1) {
                console.log(`el bot uso piedra\n PERDISTE` );
            }

        }

        else if (bot == 2) {

            bot = papel

             if (bot == 2) {
                console.log(`el bot uso papel\n GANASTE` );
            }

        }

        else if (bot == 3) {

            bot = tijera

             if (bot == 3) {
                console.log(`el bot uso tijeras\n EMPATE` );
            }
        }
    }
    //fin de la secuencia.
    else{
        
        alert(`POS QUE SHING4DOS?`);
        setTimeout(() => {
            console.log(`Por eso los shampoos tienen instrucciones -_-`);
            console.log(`\n\nGRACIAS PERO NO VUELVAS :D`);
        }, 2000);

        break sum;
    }

} while (!usuario);



setTimeout(() => {
    console.log(`\n\n\n\n\nTERMINO EL JUEGO`);
}, 2000);




// for (var i; i < 36; i++){

//     cout << i[char];

//     timeset(350)
// }
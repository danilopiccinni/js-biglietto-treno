/* 
-   far inserire dall'utente e memorizzare i dati dell'utente richiesti (chilometri desiderati e età)
-   calcoliamo il prezzo del biglietto (moltiplicando i chilometri inseriti dall'utente per il prezzo fisso per chilometro)
-   ? SE l'utente ha insireto dei dati NON validi (differenziando i vari casi di inserimento sbagliato)
-       °chiediamo all'utente di reinserire i dati correttamente
-   : ALTRIMENTI
-       °   ? SE la sua età è minore di 18 anni
-               ° si attua uno sconto del 20% sul prezzo calcolato in partenza e lo comunichiamo all'utente
-           : ALTRIMENTI
-               ? SE la sua età è maggiore si 65 anni
-                   ° si attua uno sconto del 40% sul prezzo calcolato in partenza e lo comunichiamo all'utente
-               : ALTRIMENTI 
-                   ° comunichiamo all'utente il prezzo calcolato in partenza (quindi senza sconto)
*/

let chilometri;
let età;
let prezzoKm = 0.21;
let prezzoSenzaSconto;
let prezzoScontato;


chilometri = parseInt (prompt("Quanti chilometri desideri percorrere?"))

età = parseInt (prompt("Indica la tua età perfavore"))

prezzoSenzaSconto = chilometri * prezzoKm


if (isNaN(chilometri) && isNaN(età)) {

    document.writeln ("A quanto pare ho a che fare con un asino")
    
    } else 
        if(isNaN(età)) {
    
            document.writeln ("Se non sai indicare correttamente quanti anni hai stai messo male fraté")
    
        } else 
            if(isNaN(chilometri)) {
    
                document.writeln ("Se non sai quanto dista la tua destinazione puoi googlare e riprovare")
    
            } else 
                if (età < 18) {
    
                    prezzoScontato = prezzoSenzaSconto = (prezzoSenzaSconto / 100 * 20)
    
                    prezzoScontato = prezzoScontato.toFixed(2)
    
                    console.log ("il prezzo del biglietto é " + prezzoScontato)
    
                    document.writeln("Il prezzo del viaggio é " + prezzoScontato + "€")
    
                } else
                    if (età > 65) {
    
                        prezzoScontato = prezzoSenzaSconto = (prezzoSenzaSconto / 100 * 40)
    
                        prezzoScontato = prezzoScontato.toFixed(2)
    
                        console.log ("il prezzo del biglietto é " + prezzoScontato)
    
                        document.writeln("Il prezzo del viaggio é " + prezzoScontato + "€")
    
                    } else 
                        {

                        prezzoSenzaSconto = prezzoSenzaSconto.toFixed(2)

                        console.log ("il prezzo del biglietto é " + prezzoSenzaSconto)

                        document.writeln("Il prezzo del viaggio é " + prezzoSenzaSconto + "€")

                        }
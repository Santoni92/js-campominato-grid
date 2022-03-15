console.log('JS OK!');  //controllo che lo script js sia collegato all'html

//vado a selezionare (prendere) l'elemento (il div che rappresenta la griglia) nell'html
const griglia = document.getElementById('griglia');

let livelloUtente = parseInt(prompt('Inserisci livello di difficoltà ( o 1 o 2 oppure 3): '));
while(isNaN(livelloUtente) && (livelloUtente !== 1 || livelloUtente !== 2 || livelloUtente !== 3))
{
    let livelloUtente = parseInt(prompt('Inserisci livello di difficoltà ( o 1 o 2 oppure 3): '));
}

switch(livelloUtente){
    case 1:{
                const columns = 10;  //n° delle colonne della griglia
                const rows = 10; //n° delle righe della griglia
                const totalCells = columns * rows;  //n° totale di celle (di elementi) presenti nella griglia
                 //con un ciclo for mi creo un numero totale di celle pari ad totalCells
                 for(let i = 0; i < totalCells;i++)
                {
                    //creo la singola cella presente nella griglia
                     const cell = createTypologyOfCell(livelloUtente);  
                     cell.innerText = ( i + 1);  //I numeri della griglia vanno inseriti in ordine, da 1 a 100. Non in ordine casuale.

                    cell.addEventListener('click',function(){
                                                            cell.classList.toggle('bg-azzurro');  
                                                                                                
                                                              });
                     griglia.appendChild(cell); //appendo il div appena creato che rappresenta la singola cella della griglia nel div che rappresenta la griglia stessa
               }
               break;
            }

    case 2:{
                 const columns = 9;  //n° delle colonne della griglia
                 const rows = 9; //n° delle righe della griglia
                 const totalCells = columns * rows;  //n° totale di celle (di elementi) presenti nella griglia
                 //con un ciclo for mi creo un numero totale di celle pari ad totalCells
                 for(let i = 0; i < totalCells;i++)
                {
                    //creo la singola cella presente nella griglia
                     const cell = createTypologyOfCell(livelloUtente);  
                     cell.innerText = ( i + 1);  //I numeri della griglia vanno inseriti in ordine, da 1 a 100. Non in ordine casuale.
                    cell.addEventListener('click',function(){
                                                            cell.classList.toggle('bg-azzurro');  
                                                                                                
                                                              });
                     griglia.appendChild(cell); //appendo il div appena creato che rappresenta la singola cella della griglia nel div che rappresenta la griglia stessa
                }
                break;
             }
     case 3:{
                 const columns = 7;  //n° delle colonne della griglia
                 const rows = 7; //n° delle righe della griglia
                 const totalCells = columns * rows;  //n° totale di celle (di elementi) presenti nella griglia
                 //con un ciclo for mi creo un numero totale di celle pari ad totalCells
                 for(let i = 0; i < totalCells;i++)
                {
                    //creo la singola cella presente nella griglia
                     const cell = createTypologyOfCell(livelloUtente);  
                     cell.innerText = ( i + 1);  //I numeri della griglia vanno inseriti in ordine, da 1 a 100. Non in ordine casuale.
                    cell.addEventListener('click',function(){
                                                            cell.classList.toggle('bg-azzurro');  
                                                                                                
                                                              });
                     griglia.appendChild(cell); //appendo il div appena creato che rappresenta la singola cella della griglia nel div che rappresenta la griglia stessa
                }
                break;
            }
}





/*******************************************Implementazione delle funzioni**************************************/

function createTypologyOfCell(livello)
{
    const item = document.createElement('div');
    switch(livello)
    {
        case 1: {
                item.classList.add('cell-1');
                break;
             }
        case 2: {
             item.classList.add('cell-2');
             break;
          }
        case 3:{
            item.classList.add('cell-3');
            break;
        }
    }
    return item;
}
export const getImponibileIVA = (callback)=>{
    setTimeout(()=>{callback([100, 22])}, 3000);
}
export const callImponibileIVA = (valori)=>{
    console.log(`Imponibile: ${valori[0]} euro`);
    console.log(`IVA: ${valori[1]} euro`);
    calcolaOrdine(valori[0], valori[1], calcolaIVA);
}

const calcolaOrdine = (imponibile, IVA, callback)=>{
    setTimeout(()=>{callback(imponibile+IVA)}, 3000);
}
const calcolaIVA = (totale)=>{
    console.log(`Totale ordine: ${totale} euro`);
}

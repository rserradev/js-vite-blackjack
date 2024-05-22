/** Esta función me permite tomar una carta
 * @param {Array<String>} deck Es un array de cartas
 * @returns {String} retorna una carta aleatoria del deck
 */

export const pedirCarta = ( deck ) => {

    if (deck === undefined || deck.length === 0) {
        throw 'No hay cartas en el deck o es undefined';
    }

    const carta = deck.pop();
    return carta;
}
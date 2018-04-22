/**
 * Add bet transaction
 * @param {worldcup.AddBet} tx
 * @transaction
 */
async function addBet(tx) {
    if (tx.newBet.homeScore < 0 || tx.newBet.awayScore < 0) {
        throw new Error('Score must be positive or 0');
    }

    const registry = await getAssetRegistry('worldcup.Game');
    
    if (!tx.game.bets) {
        tx.game.bets = [tx.newBet];
    } else {
        tx.game.bets.push(tx.newBet);
    }

    await registry.update(tx.game);

    const event = getFactory().newEvent('worldcup', 'BetAdded');
    event.game = tx.game;
    event.bet = tx.newBet;
    emit(event);
}

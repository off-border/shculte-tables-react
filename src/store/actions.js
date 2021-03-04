export function startStopGame(dispatch, gameState) {
    if (gameState === 'finished') {
        dispatch({type: 'START_GAME'});
    } else {
        dispatch({type: 'STOP_GAME'});
    }
}
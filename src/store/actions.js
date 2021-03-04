export function startStopGame(dispatch, gameState) {
    if (gameState === 'finished') {
        dispatch({ type: 'START_GAME' });
    } else {
        dispatch({ type: 'STOP_GAME' });
    }
}

export function goToNextNumber(dispatch) {
    dispatch({
        type: 'GO_TO_NEXT_NUMBER',
    });
}

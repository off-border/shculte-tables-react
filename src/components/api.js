import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import { getNumbers, getGameState } from '../store/selectors';

export function useApi() {
    const gameState = useSelector(getGameState);
    const numbers = useSelector(getNumbers);
    const gameStarted = gameState === 'started';

    const dispatch = useDispatch();

    const startStopGame = () => actions.startStopGame(dispatch, gameState);

    const goToNextNumber = useCallback(() => actions.goToNextNumber(dispatch), [
        dispatch,
    ]);

    return {
        numbers,
        gameState,
        gameStarted,
        startStopGame,
        goToNextNumber,
    };
}

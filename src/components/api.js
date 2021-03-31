import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import { getNumbers, getGameState, getNextNumber } from '../store/selectors';

export function useApi() {
    const gameState = useSelector(getGameState);
    const numbers = useSelector(getNumbers);
    const nextNumber = useSelector(getNextNumber);
    const gameStarted = gameState === 'started';

    const dispatch = useDispatch();

    const startStopGame = () => actions.startStopGame(dispatch, gameState);

    const goToNextNumber = useCallback(() => actions.goToNextNumber(dispatch), [
        dispatch,
    ]);

    return {
        numbers,
        nextNumber,
        gameState,
        gameStarted,
        startStopGame,
        goToNextNumber,
    };
}

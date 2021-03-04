
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { getNumbers, getGameState } from "../store/selectors";

export function useApi() {
    const gameState = useSelector(getGameState);
    const numbers = useSelector(getNumbers);
    const dispatch = useDispatch();
    const startStopGame = () => actions.startStopGame(dispatch, gameState);

    return {
        numbers,
        gameState,
        startStopGame
    }
}
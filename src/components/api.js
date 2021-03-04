
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { getNumbers, getGameState } from "../store/selectors";

export function useApi() {
    const dispatch = useDispatch();
    const gameState = useSelector(getGameState);
    const startStopGame = () => actions.startStopGame(dispatch, gameState);

    return {
        numbers: useSelector(getNumbers),
        startStopGame
    }
}
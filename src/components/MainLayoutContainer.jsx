import { useDispatch, useSelector } from "react-redux";
import { startStopGame } from "../store/actions";
import { getNumbers, getGameState } from "../store/selectors";
import MainLayout from "./MainLayout";

export default function MainLayoutContainer() {
    
    const numbers = useSelector(getNumbers);
    const dispatch = useDispatch();
    const gameState = useSelector(getGameState);
    const _startStopGame = () => startStopGame(dispatch, gameState);
    
    return <MainLayout numbers={numbers} startStopGame={_startStopGame} />
}
import { useApi } from './api';
import MainLayout from './MainLayout';

export default function MainLayoutContainer() {
    const { numbers, gameState, gameStarted, startStopGame, goToNextNumber, nextNumber } = useApi();

    return (
        <MainLayout
            {...{ numbers, gameState, gameStarted, startStopGame, goToNextNumber, nextNumber }}
        />
    );
}

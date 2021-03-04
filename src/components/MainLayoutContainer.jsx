import { useApi } from './api';
import MainLayout from './MainLayout';

export default function MainLayoutContainer() {
    const { numbers, gameState, startStopGame } = useApi();

    return <MainLayout {...{numbers, gameState, startStopGame}} />;
}

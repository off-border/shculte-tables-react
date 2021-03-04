import { useApi } from './api';
import MainLayout from './MainLayout';

export default function MainLayoutContainer() {
    const { numbers, startStopGame } = useApi();

    return <MainLayout numbers={numbers} startStopGame={startStopGame} />;
}

import './MainLayout.sass';
import StartButton from './StartButton.jsx';
import Table from './Table.jsx';

const MainLayout = ({ numbers, gameState, startStopGame }) => (
    <main className="MainLayout">
        <div className="MainLayout__column">
            <Table numbers={numbers} />
        </div>
        <div className="MainLayout__column MainLayout__controls">
            <StartButton onClick={startStopGame}>
              {gameState === 'started' ? 'STOP' : 'START'}
            </StartButton>
        </div>
    </main>
);

export default MainLayout;

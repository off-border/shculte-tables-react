import './MainLayout.sass';
import StartButton from './StartButton.jsx';
import Table from './Table.jsx';

const MainLayout = ({ numbers, startStopGame }) => (
    <main className="MainLayout">
        <div className="MainLayout__column">
            <Table numbers={numbers} />
        </div>
        <div className="MainLayout__column MainLayout__controls">
            <StartButton onClick={startStopGame} />
        </div>
    </main>
);

export default MainLayout;

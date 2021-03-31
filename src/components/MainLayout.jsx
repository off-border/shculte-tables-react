import Controls from './Controls';
import './MainLayout.sass';
import Table from './Table.jsx';

const MainLayout = ({ numbers, gameStarted, startStopGame, goToNextNumber, nextNumber }) => {
    

    return (
        <main className="MainLayout">
            <div className="MainLayout__column">
                <Table numbers={numbers} />
            </div>
            <div className="MainLayout__column MainLayout__controls">
                <Controls {...{ gameStarted, startStopGame, goToNextNumber, nextNumber }}/>
            </div>
        </main>
    );
};

export default MainLayout;

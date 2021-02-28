import './MainLayout.sass';
import StartButton from './StartButton.jsx';
import Table from './Table.jsx';

const MainLayout = ({ numbers }) => (
  <main className="MainLayout">
      <div className="MainLayout__column">
        <Table numbers={numbers} />
      </div>
      <div className="MainLayout__column MainLayout__controls">
        <StartButton />
      </div>
  </main>
);

export default MainLayout;

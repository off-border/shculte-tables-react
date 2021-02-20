import Table from "./Table.jsx";

const MainLayout = ({ rowSize }) => (
    <main className="MainLayout">
        rowSize: { rowSize }
        <Table rowSize={rowSize}/>
    </main>
);

export default MainLayout;

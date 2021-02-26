const Table = ({ numbers = [" "], onCellClicked = () => {} }) => {
    return (
        <ul className="Table">
            {numbers.map((n, i) => (
                <li className="Table__cell" key={i} onClick={() => onCellClicked(n)}>
                    {n}
                </li>
            ))}
        </ul>
    );
};

export default Table;

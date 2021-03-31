import './Table.sass';

const Table = ({
    numbers = [' '],
    nextNumber,
    onCellClicked = () => {},
}) => {
    return (
        <ul className="Table">
            {numbers.map((n, i) => (
                // <li
                //     className="Table__cell"
                //     key={i}
                //     onClick={() => onCellClicked(n)}
                // >
                //     {n}
                // </li>
                <Table__cell
                    key={i}
                    number={n}
                    next={nextNumber}
                    onClick={onCellClicked}
                />
            ))}
        </ul>
    );
};

const Table__cell = ({ onClick, number, next }) => {
    const cn = [
        'Table__cell', 
        number === next 
        && 'Table__cell-next'
    ].filter(Boolean).join(' ');

    return (
        <li className={cn} onClick={() => onClick(number)}>
            {number}
        </li>
    );
};

export default Table;

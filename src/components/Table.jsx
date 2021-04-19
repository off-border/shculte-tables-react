import { useEffect, useState } from 'react';
import './Table.sass';

const Table = ({ numbers = [' '], nextNumber, onCellClicked = () => {} }) => {
    return (
        <ul className="Table">
            {numbers.map((n, i) => (
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
    const isNext = number === next;
    const isPrev = number < next;

    const cn = [
        'Table__cell',
        isNext && 'Table__cell_next',
        isPrev && 'Table__cell_prev',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <li className={cn} onClick={() => onClick(number)}>
            {number}
        </li>
    );
};

export default Table;

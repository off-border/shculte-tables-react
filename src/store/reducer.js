const DEFAULT_TABLE_SIZE = 5;

const defaultState = {
    tableSize: DEFAULT_TABLE_SIZE,
    numbers: Array(DEFAULT_TABLE_SIZE * DEFAULT_TABLE_SIZE).fill(0).map((_, i) => i + 1),
};

const commits = {
    START_GAME: store => ({
        ...store,
        gameState: 'started'
    })
}

export default function (state = defaultState, action) {
    console.log('----- reducer', action);

    return state;
}

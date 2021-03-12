const DEFAULT_TABLE_SIZE = 5;

const defaultState = {
    tableSize: DEFAULT_TABLE_SIZE,
    numbers: Array(DEFAULT_TABLE_SIZE * DEFAULT_TABLE_SIZE)
        .fill(0)
        .map((_, i) => i + 1),
    gameState: 'finished',
    nextNumber: 1,
};

const commits = {
    START_GAME: (state) => ({
        ...state,
        gameState: 'started',
        nextNumber: 1,
        numbers: generateNumbers(state),
    }),

    STOP_GAME: (state) => ({
        ...state,
        gameState: 'finished',
    }),

    SET_NEXT_NUMBER: (state) => ({
        ...state,
        nextNumber: state.nextNumber + 1
    }),
};

export default function reducer(state = defaultState, action) {
    if (commits[action.type]) {
        state = commits[action.type](state);
    }

    return state;
}

function generateNumbers(state) {
    let arr = Array(state.tableSize * state.tableSize)
        .fill(0)
        .map((_, i) => i);

    for (let i = 0; i < arr.length; i++) {
        const rand = Math.floor(Math.random() * arr.length);
        const tmp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = tmp;
    }

    return arr;
}

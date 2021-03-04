const DEFAULT_TABLE_SIZE = 5;

const defaultState = {
    tableSize: DEFAULT_TABLE_SIZE,
    numbers: Array(DEFAULT_TABLE_SIZE * DEFAULT_TABLE_SIZE).fill(0).map((_, i) => i + 1),
    gameState: 'finished'
};

const commits = {
    START_GAME: state => ({
        ...state,
        gameState: 'started'
    }),
    STOP_GAME: state => ({
        ...state,
        gameState: 'finished'
    })
}

export default function reducer(state = defaultState, action) {
    if (commits[action.type]) {
        state = commits[action.type](state)
    } 

    return state;
}

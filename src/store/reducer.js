const defaultState = {
    rowSize: 5,
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

import { startStopGame } from "./actions";
import store from './store';

describe('actions.js', () => {
    let dispatch;

    beforeEach(() => {
        dispatch = jest.fn(action => store.dispatch(action));
    });

    describe('startStopGame', () => {
        
        it('starts the game if it`s not started', () => {
            startStopGame(dispatch, 'finished');
            expect(dispatch).toBeCalledWith({type: 'START_GAME'});
            expect(store.getState().gameState).toBe('started');
        });

        // it('stops the game if it`s started', () => {
        //     startStopGame(dispatch, 'started');
        //     expect(dispatch).toBeCalledWith({type: 'STOP_GAME'});
        // });
        
    });
});
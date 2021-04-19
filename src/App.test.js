import { mount } from 'enzyme';
import App from './App';
import StartButton from './components/StartButton';
import store from './store/store';

describe('App.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
        store.dispatch({ type: 'START_GAME' });
        store.dispatch({ type: 'STOP_GAME' });
    });

    afterEach(() => wrapper.unmount());

    it('renders MainLayout', () => {
        expect(wrapper.find('.MainLayout').exists()).toBe(true);
    });

    it('starts the game when start button clicked', () => {
        wrapper.find(StartButton).simulate('click');
        expect(store.getState().gameState).toBe('started');
    });

    it('goes to the next number when SPACE pressed', () => {
        wrapper.find(StartButton).simulate('click');
        document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space' }));
        expect(store.getState().nextNumber).toBe(2);
    });

    it('displays the next number in controls', () => {
        wrapper.find(StartButton).simulate('click');
        document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space' }));
        expect(wrapper.find('.Controls__next-number').text()).toBe('NEXT: 2');
    });
    
    // it('applies modifier to the next cell', () => {
    //     wrapper.find(StartButton).simulate('click');
        
    //     document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space' }));
    //     console.log('-----nn', store.getState().numbers);

    //     console.log("---", wrapper.html());
    //     console.log("---", wrapper.find('.Table__cell-next').html());

    //     expect(wrapper.find('.Table__cell-next').text()).toBe('2');
    // });
});

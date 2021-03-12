import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';
import StartButton from './components/StartButton';
import store from './store/store';

describe('App.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
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
        document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space' }));
        expect(store.getState().nextNumber).toBe(2);
    });
});

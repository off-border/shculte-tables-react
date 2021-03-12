import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import MainLayout from './MainLayout';
import StartButton from './StartButton';

import Table from './Table';

describe('MainLayout.jsx', () => {
    let wrapper, startStopGame;

    beforeEach(() => {
        startStopGame = jest.fn();
        wrapper = mount(
            <MainLayout numbers={[1, 2, 3]} startStopGame={startStopGame} />
        );
    });

    afterEach(() => wrapper.unmount());

    it('renders the table ', () => {
        expect(wrapper.find('.Table').exists()).toBe(true);
    });

    it('passes params to the table', () => {
        expect(wrapper.find(Table).props()).toEqual({ numbers: [1, 2, 3] });
    });

    it('starts the game when "start" button pressed', () => {
        wrapper.find(StartButton).simulate('click');
        expect(startStopGame).toBeCalled();
    });
});

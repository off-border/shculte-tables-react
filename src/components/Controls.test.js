import { mount, shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls.jsx', () => {
    let wrapper, goToNextNumber, listeners;

    beforeEach(() => {
        goToNextNumber = jest.fn();
        listeners = {};
        wrapper = mount(<Controls {...{ goToNextNumber }} />);
    });

    it('triggers goToNextNumber on SPACE press', async () => {
        document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space' }));
        expect(goToNextNumber).toBeCalled();
    });
});

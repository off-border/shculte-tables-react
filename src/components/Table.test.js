import { shallow } from "enzyme";
import Table from "./Table";

describe("Table.jsx", () => {
    let wrapper, onCellClicked;

    beforeEach(() => {
        onCellClicked = jest.fn();
        wrapper = shallow(<Table numbers={[1, 2, 3, 4]} onCellClicked={onCellClicked} />);
    });

    it("renders table", () => {
        expect(wrapper.find(".Table__cell").length).toBe(4);
    });

    it("trigggers onCellClicked with correct number", () => {
        wrapper.find(".Table__cell").at(3).simulate("click");
        expect(onCellClicked).toBeCalledWith(4);
    });
});

import { mount, shallow } from "enzyme";
import Table from "./Table";

describe("Table.jsx", () => {
    let wrapper, onCellClicked;

    beforeEach(() => {
        onCellClicked = jest.fn();
        wrapper = mount(<Table numbers={[1, 2, 3, 4]} onCellClicked={onCellClicked} nextNumber={3} />);
    });

    it("renders table", () => {
        expect(wrapper.find(".Table__cell").length).toBe(4);
    });


    it("trigggers onCellClicked with correct number", () => {
        wrapper.find(".Table__cell").at(3).simulate("click");
        expect(onCellClicked).toBeCalledWith(4);
    });

    it("applies modifier to the next number", () => {
        expect( wrapper.find(".Table__cell_next").text()).toBe("3");
    });

    it("applies modifier to the prev number", () => {
        expect( wrapper.find(".Table__cell_prev").last().text()).toBe("2");
    });

});
